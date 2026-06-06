import { createContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const ContextProvider = ({ children }) => {

  const [task, setTask] = useState([]);

useEffect(() => {
  fetch("http://127.0.0.1:8000/tasks")
    .then((res) => res.json())
    .then((data) => {
      setTask(data);
      localStorage.setItem("TaskData", JSON.stringify(data));
    })
    .catch((err) => console.error(err));
}, []);

useEffect(() => {
  localStorage.setItem("TaskData", JSON.stringify(task));
}, [task]);


  useEffect(() => {
  if (task.length > 0) {
    localStorage.setItem("TaskData", JSON.stringify(task));
  }
}, [task]);



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