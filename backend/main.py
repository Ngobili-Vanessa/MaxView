from dotenv import load_dotenv
import os

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import SessionLocal
from models import User, Bookmark
from passlib.context import CryptContext

from schemas import (
    UserCreate,
    UserLogin,
    UserResponse,
    TokenResponse,
    UserUpdate,
    BookmarkCreate,
    BookmarkResponse
)

from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import JWTError, jwt
import secrets

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"
security = HTTPBearer()
app = FastAPI()
reset_tokens = {}
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def create_access_token(data: dict):
    return jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def home():
    return {"message": "Max View API is running"}

@app.get("/users", response_model=list[UserResponse])
def get_users(db: Session = Depends(get_db)):
   return db.query(User).all()

@app.post("/register", response_model=UserResponse)
def register(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        return {"error": "Email already registered"}
    hashed_password = pwd_context.hash(user.password)
    new_user = User(
        name=user.name,
        email=user.email,
        password_hash=hashed_password,
        role="user"
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user

@app.post("/login", response_model=TokenResponse)
def login(user: UserLogin, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.email == user.email).first()

    if not existing_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    if not pwd_context.verify(user.password, existing_user.password_hash):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    access_token = create_access_token(
        data={
            "sub": str(existing_user.id),
            "email": existing_user.email,
            "role": existing_user.role
        }
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": existing_user
    }

def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):
    token = credentials.credentials

    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        user_id = payload.get("sub")

        if user_id is None:
            raise HTTPException(
                status_code=401,
                detail="Invalid token"
            )

    except JWTError:
        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token"
        )

    user = db.query(User).filter(User.id == int(user_id)).first()

    if user is None:
        raise HTTPException(
            status_code=401,
            detail="User not found"
        )

    return user

@app.get("/me", response_model=UserResponse)
def get_me(current_user: User = Depends(get_current_user)):
    return current_user

@app.put("/me", response_model=UserResponse)
def update_me(
    user_update: UserUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    if user_update.name is not None:
        current_user.name = user_update.name

    if user_update.avatar is not None:
        current_user.avatar = user_update.avatar

    db.commit()
    db.refresh(current_user)

    return current_user


@app.post("/bookmarks", response_model=BookmarkResponse)
def create_bookmark(
    bookmark: BookmarkCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    new_bookmark = Bookmark(
        user_id=current_user.id,
        content_id=bookmark.content_id,
        content_type=bookmark.content_type,
        note=bookmark.note
    )

    db.add(new_bookmark)
    db.commit()
    db.refresh(new_bookmark)

    return new_bookmark

@app.get("/bookmarks", response_model=list[BookmarkResponse])
def get_bookmarks(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return db.query(Bookmark).filter(
        Bookmark.user_id == current_user.id
    ).all()

@app.get("/bookmarks", response_model=list[BookmarkResponse])
def get_bookmarks(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return db.query(Bookmark).filter(
        Bookmark.user_id == current_user.id
    ).all()

@app.put("/bookmarks/{bookmark_id}", response_model=BookmarkResponse)
def update_bookmark(
    bookmark_id: int,
    bookmark: BookmarkCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    existing_bookmark = db.query(Bookmark).filter(
        Bookmark.id == bookmark_id,
        Bookmark.user_id == current_user.id
    ).first()

    if not existing_bookmark:
        raise HTTPException(
            status_code=404,
            detail="Bookmark not found."
        )

    existing_bookmark.note = bookmark.note

    db.commit()
    db.refresh(existing_bookmark)

    return existing_bookmark

@app.post("/forgot-password")
def forgot_password(
    data: dict,
    db: Session = Depends(get_db)
):
    email = data.get("email")

    user = db.query(User).filter(User.email == email).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="No account found with that email."
        )

    reset_token = secrets.token_urlsafe(32)
    reset_tokens[reset_token] = user.id

    return {
        "message": "Password reset request created.",
        "reset_token": reset_token
    }
@app.post("/reset-password")
def reset_password(
    data: dict,
    db: Session = Depends(get_db)
):
    reset_token = data.get("reset_token")
    new_password = data.get("new_password")

    user_id = reset_tokens.get(reset_token)

    if not user_id:
        raise HTTPException(
            status_code=400,
            detail="Invalid or expired reset token."
        )

    user = db.query(User).filter(User.id == user_id).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found."
        )

    user.password_hash = pwd_context.hash(new_password)

    db.commit()

    del reset_tokens[reset_token]

    return {
        "message": "Password reset successfully."
    }

