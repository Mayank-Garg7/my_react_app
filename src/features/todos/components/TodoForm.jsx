import React, { useState, useEffect, useContext } from "react";
import TodoContext from "../context/TodoContext";
import Card from "../../../shared/Card";
import Button from "../../../shared/Button";


function TodoForm() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState(false);
  const { add_Task, edit, edit_Task } = useContext(TodoContext);


  // console.log(edit.item.text)
  useEffect(() => {
    setText(edit.item.text)
  }, [edit])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length < 10) {
      setMessage(true);
      return;
    }
    setMessage(false);
    if (edit.editTask) {
      edit_Task(edit.item.id, text);
    } else {
      add_Task({
        id: Date.now(),
        text,
        status: "pending",
        priority: "medium",
      });
    }
    setText("");
  };

  return (
    <div className="w-xl justify-self-center-safe mt-5">
      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Header */}
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-800">
              Create New Task
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add and organize your daily workflow
            </p>
          </div>

          {/* Input */}
          <div>
            <input
              type="text"
              placeholder="Enter your task..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />

            {message && (
              <p className="mt-2 text-sm font-medium text-red-500">
                Task must be at least 10 characters long.
              </p>
            )}
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <Button>
              {edit.editTask ? "Update Task" : "Add Task"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default TodoForm;