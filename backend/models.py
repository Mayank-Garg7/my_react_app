from pydantic import BaseModel

class Task (BaseModel):
    id: int
    text: str
    status: str
    priority: str

