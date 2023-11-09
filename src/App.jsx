import React, { useContext, useRef } from "react";
import TaskList from "./Tasks/TaskList";
import Button from "./UI/Button";
import { taskListContext } from "./ContextProviders";

function App() {
  const { addTaskHandler, taskChangeHandler, ref, reff } =
    useContext(taskListContext);

  return (
    <>
      <form onSubmit={addTaskHandler}>
        <div className="flex-col-center">
          Task Name
          <input
            type="text"
            ref={ref}
            placeholder="Enter Task Name"
            name="taskName"
            onChange={taskChangeHandler}
          />
        </div>

        <div className="flex-col-center">
          Status
          <input
            type="text"
            ref={reff}
            placeholder="Enter Status"
            name="status"
            onChange={taskChangeHandler}
          />
        </div>

        <div className="flex-col-center">Edit</div>

        <div className="flex-col-center">Remove</div>

        <div className="flex-col-center">
          <Button type="submit">Add Task</Button>
        </div>
      </form>

      <TaskList />
    </>
  );
}

export default App;
