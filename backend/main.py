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
    Task(id = 1, text = "did You do stretch today", status = "pending", priority = "moderate"),
    Task(id = 2, text = "did you learn something new today", status = "pending", priority = "Very-High"),
    Task(id = 3, text = "did eat something healthy", status = "pending", priority = "High"),
    Task(id = 4, text = "did you do worship", status = "pending", priority = "High")
]

@app.get("/")
def get_all_tasks():
    return tasks

@app.get("/tasks/{id}")
def get_tasks_by_id(id: int):
    for task in tasks:
        if task.id == id:
            return task
    return "Task Not Found"


@app.post("/tasks")
def add_tasks(task: Task):
    tasks.append(task)
    return tasks