import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TaskList from "./TaskList";

function ShowTodos() {
  const { task } = useContext(TodoContext);

  // Safely guard against undefined/null tasks before filtering
  const allTasks = tasks || [];

  const pendingTasks = task.filter((item) => item.status === "pending");
  const completedTasks = task.filter((item) => item.status === "completed");

  return (
    <div className="p-4 flex gap-6">

      {/* Pending Column */}
      <div className="flex-1 bg-gray-200 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4 justify-content
        ">Pending</h2>

        <div className="space-y-4">
          {pendingTasks.map((item) => (
            <TaskList key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Completed Column */}
      <div className="flex-1 bg-gray-200 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Completed</h2>

        <div className="space-y-4">
          {completedTasks.map((item) => (
            <TaskList key={item.id} item={item} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default ShowTodos;