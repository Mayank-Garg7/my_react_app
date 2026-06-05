from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React frontend to access API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

tasks = [
    {
        "id": 1,
        "title": "Learn React",
        "status": "Pending"
    },
    {
        "id": 2,
        "title": "Learn FastAPI",
        "status": "Completed"
    }
]

@app.get("/tasks")
def get_tasks():
    return tasks