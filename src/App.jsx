import React, { useState } from "react";
import "./Tasks/TaskList.css";
import Button from "./UI/Button";

function App() {
  const [taskList, setTaskList] = useState([]);

  const id = taskList.length + 1;
  const [task, setTask] = useState({ id: id, taskName: "", status: "" });

  const [updateTask, setUpdateTask] = useState(-1);

  const tasknameChangeHandler = (event) =>
    setTask((state) => {
      state.taskName = event.target.value;
      return structuredClone(state);
    });

  const statusChangeHandler = (event) =>
    setTask((state) => {
      state.status = event.target.value;
      return structuredClone(state);
    });

  const addTaskHandler = (event) => {
    event.preventDefault();

    setTask((state) => {
      state.id = id;
      return structuredClone(state);
    });

    setTaskList((taskList) => {
      taskList.push(task);
      return structuredClone(taskList);
    });
  };

  const editHandler = (id) => {
    setUpdateTask(id);
  };

  const updateHandler = (event) => {
    event.preventDefault();
    setUpdateTask(-1);
  };

  const removeHandler = (id) => {
    const newTaskList = taskList.filter((li) => li.id !== id);
    setTaskList(newTaskList);
  };

  function handleInput(event) {
    setTaskList((taskList) => {
      taskList.map((li) =>
      li.id === task.id
        ? { ...li, [event.target.name]: event.target.value }
        : li
    );
    return structuredClone(taskList)
  });
}

  return (
    <>
      <form onSubmit={addTaskHandler}>
        <div className="flex-col-center">
          <label>Task Name</label>
          <input type="text" onChange={tasknameChangeHandler} />
        </div>

        <div className="flex-col-center">
          <label>Status</label>
          <input type="text" onChange={statusChangeHandler} />
        </div>

        <div className="flex-col-center">
          <label>Edit</label>
        </div>

        <div className="flex-col-center">
          <label>Remove</label>
        </div>

        <div className="flex-col-center">
          <Button type="submit">Add Task</Button>
        </div>
      </form>

      {taskList.map((task, index) =>
        task.id === updateTask ? (
          <ul className="flex-col-center">
            <li>
              {task.id}
              <input
                type="text"
                name="taskName"
                value={task.taskName}
                onChange={handleInput}
              />
              <input
                type="text"
                name="status"
                value={task.status}
                onChange={handleInput}
              />
              <button onClick={updateHandler}>Update</button>
            </li>
          </ul>
        ) : (
          <ul key={index} className="flex-col-center">
            <li>
              {task.id} {task.taskName} {task.status}
              <button onClick={() => editHandler(task.id)}>Edit</button>
              <button onClick={() => removeHandler(task.id)}>Remove</button>
            </li>
          </ul>
        )
      )}
    </>
  );
}

export default App;