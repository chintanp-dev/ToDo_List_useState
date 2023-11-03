import React, { useState } from "react";
import TaskList from "./Tasks/TaskList";
import Button from "./UI/Button";

import { useContext } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

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

      <TaskList
        taskList={taskList}
        updateTask={updateTask}
        updateHandler={updateHandler}
        editHandler={editHandler}
        handleInput={handleInput}
        removeHandler={removeHandler}
      />
    </>
  );
}

export default App;
