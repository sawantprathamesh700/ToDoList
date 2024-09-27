import React from 'react';

const TaskList = ({ tasks, deleteTask, setTaskToEdit }) => {
  const handleDelete = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this task?');
    if (isConfirmed) {
      deleteTask(id); // Only delete the task if the user confirms
    }
  };

  return (
    <div className="task-list-container">
      <h2>Your To-Do List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Option 1</th>
              <th>Option 2</th>
              <th>Option 3</th>
              <th>Date</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.option1}</td>
                <td>{task.option2}</td>
                <td>{task.option3}</td>
                <td>{task.date}</td>
                <td>{task.description}</td>
                <td>
                  <button
                    className="btn btn-secondary btn-sm me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#taskModal" // This opens the modal
                    onClick={() => setTaskToEdit(task)} // Set the task to be edited
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;