import React from 'react';

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      <button
        onClick={() => setFilter('All')}
        className={`px-4 py-2 rounded ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('Active')}
        className={`px-4 py-2 rounded ${filter === 'Active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('Completed')}
        className={`px-4 py-2 rounded ${filter === 'Completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;
