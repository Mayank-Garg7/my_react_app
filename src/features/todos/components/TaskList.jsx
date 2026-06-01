import React, { useContext } from "react";
import { FaTrash, FaPen } from "react-icons/fa";
import Card from "../../../shared/Card";
import TodoContext from "../context/TodoContext";

function TaskList({ item }) {
  const { handleStatusChange, handleDeleteTask } = useContext(TodoContext);

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
    high: "text-red-600",
    medium: "text-amber-600",
    low: "text-emerald-600",
  };


  // =========================
  // Reusable Button Styles
  // =========================
  const buttonBaseStyle = `
    flex items-center gap-2
    rounded-lg
    px-4 py-2
    text-sm font-medium
    text-white
    transition duration-200
  `;

  return (
    <Card>
      <div className="flex flex-col gap-5">
        {/* ========================================
            Header
        ======================================== */}
        <div className="flex items-start justify-between gap-4">
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
                mt-1
                text-sm font-semibold
                capitalize
                ${priorityStyles[item.priority]}
              `}
            >
              {item.priority}
            </p>
          </div>
          {/* Status Dropdown */}
          <div className="min-w-42.5">
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Update Status
            </label>
            <select
              value={item.status}
              onChange={(e) =>
                handleStatusChange(e, item.id)
              }
              disabled={item.status === "completed"}
              className="
                w-full
                rounded-lg
                border border-slate-300
                bg-white
                px-3 py-2.5
                text-sm font-medium text-slate-700
                shadow-sm
                outline-none
                transition duration-200
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
                disabled:cursor-not-allowed
                disabled:bg-slate-100
                disabled:text-slate-400
              "
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        {/* ========================================
            Action Buttons
        ======================================== */}
        <div className="flex items-center gap-3 pt-2">
          {/* Add Button */}
          <button
            className={`${buttonBaseStyle} bg-blue-600 hover:bg-blue-700`}
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