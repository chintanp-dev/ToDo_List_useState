import React, { useContext } from "react";
import TaskList from "./Tasks/TaskList";
import Button from "./UI/Button";
import { taskListContext } from "./ContextProviders";

function App() {
  const { addTaskHandler, taskChangeHandler } = useContext(taskListContext);

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

      <TaskList />
    </>
  );
}

export default App;
