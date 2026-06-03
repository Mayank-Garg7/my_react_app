import React, { useContext } from "react";
import { FaTrash, FaPen } from "react-icons/fa";
import Card from "../../../shared/Card";
import TodoContext from "../context/TodoContext";

function TaskList({ item }) {
  const { handleStatusChange, handleDeleteTask, handleEditTask } = useContext(TodoContext);
  const pendingTasks = item.status === "pending"
  const completedTasks = item.status === "completed"
  // =========================
  // Status Styles
  // =========================
  const statusStyles = {
    pending: "bg-amber-50 text-amber-700 border border-amber-200",
    completed: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };

  // =========================
  // Priority Styles
  // =========================
  const priorityStyles = {
    Easy: "text-emerald-600",
    Moderate: "text-amber-600",
    High: "text-orange-600",
    'Very-High': "text-red-600",
  };

  // =========================
  // Reusable Button Styles
  // =========================
  const buttonBaseStyle = `
    flex items-center gap-1
    rounded-lg
    px-2 py-1
    text-sm font-medium
    text-white
    transition duration-200
  `;



  return (
    <Card>
      <div className="flex flex-col gap-2">
        {/* ========================================
            Header
        ======================================== */}
        <div className="flex items-start justify-between gap-2">
          {/* Task Info */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-800">
              {item.text}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Manage and track task progress
            </p>
          </div>
          {/* Status Badge */}
          <span
            className={`
              px-3 py-1
              rounded-full
              text-xs font-semibold
              capitalize whitespace-nowrap
              ${statusStyles[item.status]}
            `}
          >
            {item.status}
          </span>
        </div>
        {/* ========================================
            Priority & Status Update
        ======================================== */}
        <div className="flex items-center justify-between">
          {/* Priority */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Priority
            </p>
            <p
              className={`
                text-sm font-semibold
                capitalize
                ${priorityStyles[item.priority]}
              `}
            >
              {item.priority}
            </p>
          </div>
          {/* Status Dropdown */}
          <div className="flex items-center gap-2">
            <input
              id={`status-${item.id}`}
              type="checkbox"
              value={item.status}
              checked={item.status === "completed"}
              onChange={(e) =>
                handleStatusChange(
                  e.target.checked ? "completed" : "pending",
                  item.id
                )
              }
              disabled={item.status === "completed"}
              className="h-4 w-4 rounded border-slate-300 text-blue-600"
            />
            <label
              htmlFor={`status-${item.id}`}
              className="text-sm font-medium text-slate-700"
            >
              Mark as completed
            </label>
          </div>
        </div>
        {/* ========================================
            Action Buttons
        ======================================== */}
        <div className="flex items-center gap-3 pt-2">
          {/* Add Button */}
          <button
            className={`${buttonBaseStyle} bg-blue-600 hover:bg-blue-700`}
            onClick={() => handleEditTask(item)}
          >
            <FaPen />
            Edit Task
          </button>
          {/* Delete Button */}
          <button
            onClick={() => handleDeleteTask(item.id)}
            className={`${buttonBaseStyle} bg-red-600 hover:bg-red-700`}
          >
            <FaTrash />
            Delete
          </button>
        </div>
      </div>
    </Card>

  );
}

export default TaskList;