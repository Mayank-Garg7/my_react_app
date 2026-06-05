from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.app_middleware(
    
)

@app.get("/")
def greet():
    return {"message": "hello mayank welcome in fastApi Era"}