import React from "react";
// import TaskList from "./TaskList.css"

function TaskList(props) {
  // const addTaskHandler = (event) => {
  //   const trimedTaskId = enteredTaskid.trim();
  //   const trimedTaskName = enteredTaskname.trim();
  //   const trimedStatus = enteredStatus.trim();

  //   event.preventDefault();

  //   props.onAddTask(trimedTaskId, trimedTaskName, trimedStatus);
  //   setEnteredTaskId("");
  //   setEnteredTaskname("");
  //   setEnteredStatus("");
  // };

  return props.taskList.map((task) => (
    <ul key={task.id}>
      <li>
        {task.name} {task.task} <button>Edit</button> <button>Remove</button>
      </li>
    </ul>
  ));
}
export default TaskList;
