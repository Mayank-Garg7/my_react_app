import React, { useState, useEffect, useContext } from "react";
import TodoContext from "../context/TodoContext";
import Card from "../../../shared/Card";
import Button from "../../../shared/Button";

function TodoForm() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState(false);
  const [priority, setPriority] = useState("Easy");
  const { add_Task, edit, edit_Task } = useContext(TodoContext);

  useEffect(() => {
    if (edit.editTask && edit.item) {
      setText(edit.item.text || "");
      
      // FIX: Capitalize or format value matching to prevent mismatch with case-sensitive dropdowns
      const itemPriority = edit.item.priority || "Easy";
      const formattedPriority = itemPriority.charAt(0).toUpperCase() + itemPriority.slice(1);
      
      // Safety check to ensure it matches one of our values
      if (["Easy", "Moderate", "High", "Very-High"].includes(formattedPriority)) {
        setPriority(formattedPriority);
      } else if (itemPriority === "very-high" || itemPriority === "Very-High") {
        setPriority("Very-High");
      } else {
        setPriority("Easy");
      }
    } else {
      // Clear form when not editing
      setText("");
      setPriority("Easy");
    }
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length < 10) {
      setMessage(true);
      return;
    }
    setMessage(false);

    if (edit.editTask) {
      edit_Task(edit.item.id, { text, priority });
    } else {
      add_Task({
        id: Date.now(),
        text,
        status: "pending",
        priority,
      });
    }
    
    // Completely clear out fields
    setText("");
    setPriority("Easy");
  };

  return (
    <div className="w-xl justify-self-center-safe mt-5">
      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Header */}
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-800">
              {edit.editTask ? "Update Task" : "Create New Task"}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {edit.editTask ? "Modify your task details" : "Add and organize your daily workflow"}
            </p>
          </div>

          {/* Input */}
          <div>
            <input
              type="text"
              placeholder="Enter your task..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" 
            />
            {message && (
              <p className="mt-2 text-sm font-medium text-red-500">
                Task must be at least 10 characters long.
              </p>
            )}
          </div>

          {/* Dropdown Selection */}
          <select
            className="w-full mt-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
            <option value="Very-High">Very-High</option>
          </select>

          {/* Button */}
          <div className="flex justify-end">
            <Button type="submit">
              {edit.editTask ? "Update Task" : "Add Task"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default TodoForm;