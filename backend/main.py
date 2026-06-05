from fastapi import FastAPI


app = FastAPI()
@app.get("/")
def greet():
    return {"message": "hello mayank welcome in fastApi Era"}