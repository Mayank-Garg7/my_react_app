import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TaskList from "./TaskList";

function ShowTodos() {
  const { task } = useContext(TodoContext);

  const pendingTasks = task.filter((item) => item.status === "pending");
  const completedTasks = task.filter((item) => item.status === "completed");

  return (
    <div className="p-4 space-y-8">

      {/* Pending Section */}
      <div>
        <h2 className="text-xl font-bold mb-3">Pending Tasks</h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pendingTasks.length > 0 ? (
            pendingTasks.map((item) => (
              <TaskList key={item.id} item={item} />
            ))
          ) : (
            <p>No pending tasks</p>
          )}
        </div>
      </div>

      {/* Completed Section */}
      <div>
        <h2 className="text-xl font-bold mb-3">Completed Tasks</h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {completedTasks.length > 0 ? (
            completedTasks.map((item) => (
              <TaskList key={item.id} item={item} />
            ))
          ) : (
            <p>No completed tasks</p>
          )}
        </div>
      </div>

    </div>
  );
}

export default ShowTodos;