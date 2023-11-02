import React, { useState } from "react";
import "./Tasks/TaskList.css";
import Button from "./UI/Button";

function App() {
  const [taskList, setTaskList] = useState([]);

  console.log("tasklList", taskList)

  let id = taskList.length + 1;
  const [task, setTask] = useState({ id: id, taskName: "", status: "" });

  const [updateTask, setUpdateTask] = useState();

  const taskChangeHandler = (event) => {
    setTask((task) => {
      task[event.target.name] = event.target.value;
      return structuredClone(task);
    });
  };

  let { taskName, status } = task;

  const addTaskHandler = (event) => {
    event.preventDefault();

    if (taskName === "" && status === "") {
      alert("please enter Something");
    } else {
      setTaskList([...taskList, { id, taskName, status }]);

      setTask((state) => {
        ({ id: id, taskName: "", status: "" });
        state.id = id;
        return structuredClone(state);
      });
    }
  };

  function handleInput(event) {
    setTaskList((taskList) => {

      taskList.map((li) => {
        return li.id === updateTask
          ? (li[event.target.name] = event.target.value)
          : li;
      });

      return structuredClone(taskList);
    });
  }

  const editHandler = (id) => {
    setUpdateTask(id);
  };

  const updateHandler = (event) => {
    event.preventDefault();
    setUpdateTask(0);
  };

  const removeHandler = (id) => {
    const newTaskList = taskList.filter((li) => li.id !== id);
    setTaskList(newTaskList);
  };

  return (
    <>
      <form onSubmit={addTaskHandler}>
        <div className="flex-col-center">
          <label>Task Name</label>
          <input type="text" name="taskName" onChange={taskChangeHandler} />
        </div>

        <div className="flex-col-center">
          <label>Status</label>
          <input type="text" name="status" onChange={taskChangeHandler} />
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
        task.id === updateTask ? 
        (
          <ul className="flex-col-center" key={Math.random()}>
            <li>
              {task.id}
              <input
                type="text"
                name="taskName"
                value={task.taskName || ""}
                onChange={handleInput}
              />
              <input
                type="text"
                name="status"
                value={task.status || ""}
                onChange={handleInput}
              />
              <button onClick={updateHandler}>Update</button>
            </li>
          </ul>
        ) 
        :
         (
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
