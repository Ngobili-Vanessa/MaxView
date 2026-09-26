from sqlalchemy import Column, Integer, String, Enum, TIMESTAMP
from database import Base
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(150), unique=True, nullable=False, index=True)
    password_hash = Column(String(125), nullable=False)
    role = Column(Enum("user", "admin"), default="user")
    avatar = Column(String(500), nullable=True)
    created_at = Column(TIMESTAMP, nullable=True)