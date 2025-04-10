import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const token = localStorage.getItem('token');

  const fetchTasks = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/tasks', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setTasks(res.data);
  };

  const saveTask = async (task) => {
    if (task.id) {
      await axios.put(`http://127.0.0.1:8000/api/tasks/${task.id}`, { title: task.title }, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } else {
      await axios.post('http://127.0.0.1:8000/api/tasks', { title: task.title }, {
        headers: { Authorization: `Bearer ${token}` }
      });
    }
    setEditTask(null);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await axios.patch(`http://127.0.0.1:8000/api/tasks/${id}/toggle`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <TaskForm onSave={saveTask} taskToEdit={editTask} />
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={toggleTask}
          onEdit={setEditTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}