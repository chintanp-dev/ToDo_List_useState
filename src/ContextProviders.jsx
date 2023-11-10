import React, { createContext, useState, useRef, useEffect } from "react";

export const taskListContext = createContext();

export function TaskListProvider({ children }) {
  const [taskList, setTaskList] = useState([]);

  let id = taskList.length + 1;

  const ref = useRef();
  const reff = useRef();

  const [task, setTask] = useState({
    id: id,
    taskName: "",
    status: "",
    counterId: 0,
    counter: 0,
  });

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
    ref.current.value = "";
    reff.current.value = ""; 

    if (taskName === "" && status === "") {
      alert("please enter Something");
    } else {
      setTaskList((taskList) => {
        taskList.push({ id, taskName, status, counter: 0, counterId: 0 });
        return structuredClone(taskList);
      });

      function count () {
        setTaskList((taskList) => {
          const task = taskList.find((task) => task.id === id);
          task.counter++;
          task.counterId = counterId;
          return structuredClone(taskList);
        });
      }

      const counterId = setInterval(count, 1000);
    }
  };

  const startButton = () => {
   
  };
  const stopButton = (counterId) => {
    clearInterval(counterId);
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
    <taskListContext.Provider
      value={{
        ref,
        reff,
        task,
        setTask,
        taskList,
        setTaskList,
        updateTask,
        setUpdateTask,
        addTaskHandler,
        taskChangeHandler,
        handleInput,
        editHandler,
        updateHandler,
        removeHandler,
        startButton,
        stopButton,
      }}
    >
      {children}
    </taskListContext.Provider>
  );
}
