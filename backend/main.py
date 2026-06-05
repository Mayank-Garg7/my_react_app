from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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
    {
        "id": 1,
        "text": "did You do stretch today",
        "status": "pending",
        "priority": "moderate"
    },
    {
        "id": 2,
        "text": "did you learn something new today",
        "status": "pending",
        "priority": "Very-High"
    },
    {
        "id": 3,
        "text": "did eat something healthy",
        "status": "pending",
        "priority": "High"
    },
    {
        "id": 4,
        "text": "did you do worship",
        "status": "pending",
        "priority": "High"
    },
]

@app.get("/tasks")
def get_tasks():
    return tasks