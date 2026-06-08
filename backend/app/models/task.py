from sqlalchemy import Column, Integer, String
from app.database import Base


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    text = Column(String, nullable=False)
    status = Column(String, default="pending")
    priority = Column(String, default="moderate")