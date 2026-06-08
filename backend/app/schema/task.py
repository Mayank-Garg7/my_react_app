from pydantic import BaseModel


class TaskBase(BaseModel):
    text: str
    status: str
    priority: str


class TaskCreate(TaskBase):
    pass


class TaskResponse(TaskBase):
    id: int

    class Config:
        from_attributes = True