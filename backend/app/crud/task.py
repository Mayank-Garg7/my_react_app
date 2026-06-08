from sqlalchemy.orm import Session
from app.models.task import Task
from app.schemas.task import TaskCreate


def get_all_tasks(db: Session):
    return db.query(Task).all()


def get_task_by_id(db: Session, task_id: int):
    return db.query(Task).filter(Task.id == task_id).first()


def create_task(db: Session, task: TaskCreate):
    db_task = Task(
        text=task.text,
        status=task.status,
        priority=task.priority
    )
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task


def update_task(db: Session, db_task: Task, updated_task: TaskCreate):
    db_task.text = updated_task.text
    db_task.status = updated_task.status
    db_task.priority = updated_task.priority
    db.commit()
    return db_task


def delete_task(db: Session, db_task: Task):
    db.delete(db_task)
    db.commit()