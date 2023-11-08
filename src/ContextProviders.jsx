import React, { createContext, useState, useRef, useEffect } from "react";

export const taskListContext = createContext();

export function TaskListProvider({ children }) {
  const [taskList, setTaskList] = useState([]);

  let id = taskList.length + 1;
  let timeId;

  const ref = useRef();
  const reff = useRef();

  const [task, setTask] = useState([
    { id: id, taskName: "", status: "", timeId: timeId },
  ]);
  const [updateTask, setUpdateTask] = useState();













  const [time, setTime] = useState(0);
  const [active, notActive] = useState();

  useEffect(() => {
    if (active) {
      timeId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(timeId);
    }
    return () => clearInterval(timeId);
  }, [active]);

  const startButton = (timeId) => {
    notActive(true) 
    timeId(0)
  
  }
  const stopButton = (timeId) => {
    notActive(false)
    timeId(0)
  }



















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
      notActive(true);
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
        time,
        timeId,
        notActive,
        startButton,
        stopButton
      }}
    >
      {children}
    </taskListContext.Provider>
  );
}
