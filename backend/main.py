from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.app_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
tasks = [
    {
        "id": 1,
        "text": "did You do stretching today",
        "status": "pending",
        "priority": "moderate"
    },
    {
        "id": 2,
        "text": "did you learn something new today",
        "status": "pending",
        "priority": "high"
    }
]
@app.get("/")
def greet():
    return {"message": "hello mayank welcome in fastApi Era"}