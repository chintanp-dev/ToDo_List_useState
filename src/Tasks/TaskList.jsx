import React from "react"
import "./TaskList.css";

const TaskList = (props) => {
    return (
        <>
      {props.taskList.map((task, index) =>
        task.id === props.updateTask ? (
          <ul className="flex-col-center" key={index}>
            <li>
              {task.id}
              <input
                type="text"
                name="taskName"
                value={task.taskName || ""}
                onChange={props.handleInput}
              />
              <input
                type="text"
                name="status"
                value={task.status || ""}
                onChange={props.handleInput}
              />
              <button onClick={props.updateHandler}>Update</button>
            </li>
          </ul>
        ) : (
          <ul key={index} className="flex-col-center">
            <li>
              {task.id} {task.taskName} {task.status}
              <button onClick={() => props.editHandler(task.id)}>Edit</button>
              <button onClick={() => props.removeHandler(task.id)}>Remove</button>
            </li>
          </ul>
        )
      )}
    </>
    )
}

export default TaskList