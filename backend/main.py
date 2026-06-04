from fastapi import FastAPI

message = "hello mayank welcome in fastApi Era"
app = FastAPI()
@app.get("/")
def greet():
    return {message: "hello mayank welcome in fastApi Era"}