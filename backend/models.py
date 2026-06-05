class Task:
    id: int
    text: str
    status: str
    priority: str

    def __init__(self, id: int, text: str, status: str, priority: str):
        self.id = id
        self.text = text
        self.status = status
        self.priority = priority