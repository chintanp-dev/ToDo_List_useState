import React, { useState } from "react";

import AddTask from "./Tasks/AddTask";
import TasksList from "./Tasks/TasksList";

function App() {
  const [addTask, setAddTask] = useState([]);

  const addTaskHandler = (tId, tName, tStatus, tEdit, tRemove) => {
    // const { tName, tStatus, tEdit, tRemove } = task;

    setAddTask((prevTasksList) => {
      // prevTasksList.push({
      //   name: tName,
      //   status: tStatus,
      //   id: Math.random().toString(),
      //   edit: tEdit,
      //   remove: tRemove,
      // })

      // return structuredClone(prevTasksList)
      return [
        ...prevTasksList,
        {
          id: tId,
          name: tName,
          status: tStatus,
          edit: tEdit,
          remove: tRemove,
        },
      ];
    });
  };

  return (
    <div>
   
      <AddTask onAddTask={addTaskHandler} />
      <TasksList tasks={addTask} />
    </div>
  );
}

export default App;
