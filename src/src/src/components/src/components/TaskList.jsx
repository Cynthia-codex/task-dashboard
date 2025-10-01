import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
