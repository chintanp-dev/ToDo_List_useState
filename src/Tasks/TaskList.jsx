import React from "react";
import { useContext } from "react";
import { taskListContext } from "../ContextProviders";
import "./TaskList.css";

const TaskList = () => {
  const {
    taskList,
    removeHandler,
    updateHandler,
    editHandler,
    handleInput,
    updateTask,
  } = useContext(taskListContext);

  return (
    <>
      {taskList.map((task, index) =>
        task.id === updateTask ? (
          <ul className="flex-col-center" key={index}>
            <li>
              {task.id}
              <input
                type="text"
                placeholder="Enter Task Name"
                name="taskName"
                value={task.taskName || ""}
                onChange={handleInput}
              />
              <input
                type="text"
                placeholder="Enter Status"
                name="status"
                value={task.status || ""}
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
};

export default TaskList;
