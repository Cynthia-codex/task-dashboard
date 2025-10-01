import React from 'react';

const TaskCard = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="bg-white p-4 mb-4 rounded shadow">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="mr-2"
        />
        <span
          className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}
        >
          {task.text}
        </span>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
