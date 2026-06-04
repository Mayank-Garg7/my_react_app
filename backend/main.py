from fastapi import FastAPI

app = FastAPI()
@app.get("/")
def greet():
    return "hello mayank welcome in fastApi Era"