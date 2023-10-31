import { useState } from "react";

function TodoList(props) {
  return props.todos.map((task) => (
    <ul key={task.id}>
      <li>{task.name}</li>
      <li>{task.task}</li>
    </ul>
  ));
}

function App() {
  const [todos, setTodos] = useState([]);

  const [task, setTask] = useState({ id: null, name: "", task: "" });

  const addName = (event) =>
    setTask((state) => {
      state.name = event.target.value;
      return structuredClone(state);
    });

  const addTask = (event) =>
    setTask((state) => {
      state.task = event.target.value;
      return structuredClone(state);
    });

  const addTodo = (event) => {
    event.preventDefault();

    setTask((state) => {
      state.id = Math.random();
      return structuredClone(state);
    });

    setTodos((todos) => {
      todos.push(task);
      return structuredClone(todos);
    });
  };

  return (
    <div className="app">
      {/* <Navbar />
      <Content /> */}

      <form onSubmit={addTodo}>
        name
        <input type="text" onChange={addName} /> <br />
        task
        <input type="text" onChange={addTask} /> <br />
        <button type="submit">submit</button>
      </form>

      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
