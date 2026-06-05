from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import Task

app = FastAPI()

# Allow React frontend to access API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React app URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

tasks = [
    Task(1, "did You do stretch today", "pending", "moderate"),
    Task(2, "did you learn something new today", "pending", "Very-High"),
    Task(3, "did eat something healthy", "pending", "High"),
    Task(4, "did you do worship", "pending", "High")
]

@app.get("/tasks")
def get_all_tasks():
    return tasks

@app.get("/tasks/{id}")
def get_tasks_by_id(id: int):
    for task in tasks:
        if task.id == id:
            return task
    return "Task Not Found"


@app.post("/tasks")
def add_tasks(task):
    tasks.append(task)
    return tasks