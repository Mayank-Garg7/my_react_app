import { createContext, useEffect, useState } from "react";
import Tasks from "../mock/Tasks.json";

const TodoContext = createContext();

export const ContextProvider = ({ children }) => {

  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/tasks");
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await response.json();
        setTask(data);
        localStorage.setItem("TaskData", JSON.stringify(data));
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);



  const [edit, setEdit] = useState({
    item: {},
    editTask: false
  });


  const add_Task = (newTask) => {
    setTask((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTask((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEditTask = (item) => {
    setEdit({
      item,
      editTask: true
    });
  };

  // FIX: Renamed second parameter to updatedFields for clarity and exact spreading
  const edit_Task = (id, updatedFields) => {
    setTask((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...updatedFields } : item
      )
    );
    // Reset edit state
    setEdit({
      item: {},
      editTask: false
    });
  };

  // Update task status
  const handleStatusChange = (state, id) => {
    setTask((prev) =>
      prev.map((data) => (data.id === id ? { ...data, status: state } : data))
    );
  };

  return (
    <TodoContext.Provider
      value={{
        task,
        add_Task,
        handleStatusChange,
        handleDeleteTask,
        handleEditTask,
        edit,
        edit_Task
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;