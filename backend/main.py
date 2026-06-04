from fastapi import FastAPI

app = FastAPI()
app.get("/")
def geet():
    return "hello mayank welcome in fastApi Era"