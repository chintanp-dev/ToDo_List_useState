import React from "react";
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./AddTask.css";

function AddTask(props) {
  const [enteredTaskid, setEnteredTaskId] = useState("");
  const [enteredTaskname, setEnteredTaskname] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("");
  const [editId, setEditId] = useState(-1);

  const addTaskHandler = (event) => {
    const trimedTaskId = enteredTaskid.trim();
    const trimedTaskName = enteredTaskname.trim();
    const trimedStatus = enteredStatus.trim();

    event.preventDefault();

    props.onAddTask(trimedTaskId, trimedTaskName, trimedStatus);
    setEnteredTaskId("");
    setEnteredTaskname("");
    setEnteredStatus("");
  };

  const editHandler = (id) => {
    setEditId(id);
  };

  const taskIdChangeHandler = (event) => {
    setEnteredTaskId(event.target.value);
  };

  const tasknameChangeHandler = (event) => {
    setEnteredTaskname(event.target.value);
  };

  const statusChangeHandler = (event) => {
    setEnteredStatus(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={addTaskHandler}>
        <div className="flex-col-center">
          <label htmlFor="#">#</label>
          <input
            id="#"
            type="text"
            value={enteredTaskid}
            onChange={taskIdChangeHandler}
          />
        </div>

        <div className="flex-col-center">
          <label htmlFor="task">Task Name</label>
          <input
            id="task"
            type="text"
            value={enteredTaskname}
            onChange={tasknameChangeHandler}
          />
        </div>

        <div className="flex-col-center">
          <label htmlFor="status">Status</label>
          <input
            id="status"
            type="text"
            value={enteredStatus}
            onChange={statusChangeHandler}
          />
        </div>

        <div className="flex-col-center">
          <label onChange={editHandler} htmlFor="edit">Edit</label>
        </div>

        <div className="flex-col-center">
          <label htmlFor="remove">Remove</label>
        </div>

        <div className="flex-col-center">
          <Button type="submit">Add Task</Button>
        </div>
      </form>

      <div>
      <ul>
        {props.map((task) => {
          return task.edit === editId ? (
            <li>
              <input id="#" type="number"  />
              <input id="task" type="text"  />
              <input id="status" type="text"  />
              <button>Update</button>
            </li>
          ) : (
            <li key={Math.random()}>
              {task.id} {task.name} {task.status}{" "}
              <button onClick={() => editHandler(task.edit)}>Edit</button>{" "}
              <button>Remove</button>
            </li>
          );
        })}
      </ul>
      </div>
    </Card>
  );
}
export default AddTask;
