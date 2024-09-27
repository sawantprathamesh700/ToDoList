import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
  const [task, setTask] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  // Use useEffect to populate the form when taskToEdit changes
  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit.name);
      setOption1(taskToEdit.option1);
      setOption2(taskToEdit.option2);
      setOption3(taskToEdit.option3);
      setDate(taskToEdit.date);
      setDescription(taskToEdit.description);
    } else {
      // Clear the form when taskToEdit is null (after editing is complete)
      resetForm();
    }
  }, [taskToEdit]);

  // Function to reset the form fields
  const resetForm = () => {
    setTask('');
    setOption1('');
    setOption2('');
    setOption3('');
    setDate('');
    setDescription('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      name: task,
      option1,
      option2,
      option3,
      date,
      description,
    };

    if (taskToEdit) {
      editTask(newTask); // Edit an existing task
    } else {
      addTask(newTask); // Add a new task
    }

    // Reset form after submission
    resetForm();

    // Close the modal after form submission
    document.getElementById('taskModalClose').click();
  };

  return (
    <div className="container mt-5">
      {/* Trigger Button to Open Modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#taskModal"
      >
        {taskToEdit ? 'Edit Task' : 'Add Task'}
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="taskModal"
        tabIndex="-1"
        aria-labelledby="taskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="taskModalLabel">
                {taskToEdit ? 'Edit Task' : 'Add Task'}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="taskModalClose"
              ></button>
            </div>
            <div className="modal-body">
              <form className="tkform" onSubmit={handleSubmit} >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="option1">Assigned to</label>
                    <select
                      id="option1"
                      className="form-select"
                      value={option1}
                      onChange={(e) => setOption1(e.target.value)}
                      required
                    >
                      <option value="">Select Option</option>
                      <option value="User 1">User 1</option>
                      <option value="User 2">User 2</option>
                      <option value="User 3">User 3</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="option2">Status</label>
                    <select
                      id="option2"
                      className="form-select"
                      value={option2}
                      onChange={(e) => setOption2(e.target.value)}
                      required
                    >
                      <option value="">Select Option</option>
                      <option value="Completed">Completed</option>
                      <option value="Not Started">Not Started</option>
                      <option value="In Progress">In Progress</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="option3">Priority</label>
                    <select
                      id="option3"
                      className="form-select"
                      value={option3}
                      onChange={(e) => setOption3(e.target.value)}
                      required
                    >
                      <option value="">Select Option</option>
                      <option value="Normal">Normal</option>
                      <option value="High">High</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="date">Due Date</label>
                    <input
                      id="date"
                      type="date"
                      className="form-control"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      className="form-control"
                      rows="4"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Description"
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer sbbutton">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-success">
                    {taskToEdit ? 'Update Task' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;