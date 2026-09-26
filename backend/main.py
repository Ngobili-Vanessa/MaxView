from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from database import SessionLocal
from models import User
from schemas import UserResponse

from passlib.context import CryptContext
from schemas import UserCreate, UserResponse

app = FastAPI()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

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