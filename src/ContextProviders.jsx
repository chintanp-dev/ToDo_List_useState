import React, { createContext, useState, useRef } from "react";

export const taskListContext = createContext();

export function TaskListProvider({ children }) {
  const [taskList, setTaskList] = useState([]);

  let id = taskList.length + 1;

  const [task, setTask] = useState([{ id: id, taskName: "", status: "" }]);
  const [updateTask, setUpdateTask] = useState();

  const ref = useRef();
  const reff = useRef();

  const taskChangeHandler = (event) => {
    setTask((task) => {
      task[event.target.name] = event.target.value;
      return structuredClone(task);
    });
  };

  let { taskName, status } = task;

  const addTaskHandler = (event) => {
    event.preventDefault();
    ref.current.value = "";
    reff.current.value = "";

    if (taskName === "" && status === "") {
      alert("please enter Something");
    } else {
      setTaskList([...taskList, { id, taskName, status }]);
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


  const [time, setTime] = useState();


  const timer = setInterval(function () {
    console.log(timer );
  }, 1000);

  function stopTimer() {
    clearInterval(timer);  
  }



  return (
    <taskListContext.Provider
      value={{
        ref,
        reff,
        timer,
        task,
        setTask,
        taskList,
        setTaskList,
        updateTask,
        stopTimer,
        setUpdateTask,
        addTaskHandler,
        taskChangeHandler,
        handleInput,
        editHandler,
        updateHandler,
        removeHandler,
      }}
    >
      {children}
    </taskListContext.Provider>
  );
}
