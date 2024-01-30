// pages/tasks.js
import React, { useEffect, useState } from 'react';
import axios from '../config/axios';
import TaskRow from '../components/TaskRow';
import "../app/globals.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleCompleteClick = async (taskId) => {
    try {
      await axios.patch(`/tasks/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error marking task as completed:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="mx-10">
        <h2 className="text-2xl font-bold mb-4">Task List</h2>
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left">Task</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskRow key={task.id} task={task} onCompleteClick={handleCompleteClick} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
