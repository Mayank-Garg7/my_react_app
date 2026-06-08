from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.routes import task

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables (dev only)
Base.metadata.create_all(bind=engine)

# Register routes
app.include_router(task.router, prefix="/tasks", tags=["Tasks"])


@app.get("/")
def root():
    return {"message": "API is running"}