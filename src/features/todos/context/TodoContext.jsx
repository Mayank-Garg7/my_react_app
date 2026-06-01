import { createContext, useEffect, useState } from "react";
import Tasks from "../mock/Tasks.json";

const TodoContext = createContext();

export const ContextProvider = ({ children }) => {


  const [edit, setEdit] = useState({
    item: {},
    editTask: false
  })

  const add_Task = (newTask) => {
    setTask((prev) => [...prev, newTask]);
  };


  const [task, setTask] = useState(() => {
    const data = localStorage.getItem("TaskData");
    try {
      return data ? JSON.parse(data) : Tasks;
    } catch (error) {
      console.error("Invalid localStorage data:", error);
      return Tasks;
    }
  });

  const handleDeleteTask = (id) => {
    setTask((prev) =>
      prev.filter((item) =>
        item.id !== id
      ))
  }

  const handleEditTask = (item) => {
    setEdit({
      item,
      editTask: true
    })
  }

  const edit_Task = (id, text) => {
    setTask((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, text } : item
      ))
    setEdit({
      item: {},
      editTask: false
    });
  }

  // Save tasks to localStorage whenever task changes
  useEffect(() => {
    localStorage.setItem("TaskData", JSON.stringify(task));
  }, [task]);


  // Update task status
  const handleStatusChange = (event, id) => {
    const checked = event.target.value;
    setTask((prev) => prev.map((data) => {
      if (data.id === id) {
        return { ...data, status: checked }
      }
      return data
    }
    ))
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