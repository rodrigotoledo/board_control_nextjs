// components/TaskRow.js
import React from 'react';

const TaskRow = ({ task, onCompleteClick }) => (
  <tr key={task.id}>
    <td className="border border-gray-200 px-4 py-2">{task.title}</td>
    <td className="border border-gray-200 px-4 py-2">
      {task.completed ? (
        <span className="text-green-500">Completed</span>
      ) : (
        <span className="text-yellow-500">Pending</span>
      )}
    </td>
    <td className="border border-gray-200 px-4 py-2">

      {task.completed ? (
        <span className="text-green-500">{new Date(task.updated_at).toLocaleString()}</span>
      ) : (
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={() => onCompleteClick(task.id)}
        >
          Mark as Completed
        </button>
      )}
    </td>
  </tr>
);

export default TaskRow;
