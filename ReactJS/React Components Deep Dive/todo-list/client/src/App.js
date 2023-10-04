import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSppiner from "./components/LoadingSpinner";
import Todos from "./components/Todos";

function App() {

  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then(res => res.json())
      .then(data => {
        const result = Object.keys(data).map(id => ({ id, ...data[id] }));
        setTodos(result);
        setTimeout(() => setIsLoading(false), 1500);
      });
  }, []);

  const toggleTodoStatus = (id) => {
    setTodos(state => state.map(t =>
      t.id === id
        ? { ...t, isCompleted: !t.isCompleted }
        : t));
  };

  const onAddTodo = () => {
    const lastId = todos.at(0)?._id ? +todos.at(-1)._id.split("todo_")[1] : +todos.at(0).id;
    const text = prompt("Task name:");
    const newTask = { id: lastId + 1, text, isCompleted: false };
    setTodos(state => [newTask, ...state]);
  };

  return (
    <div>
      <Header />
      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>
          <div className="add-btn-container">
            <button className="btn" onClick={onAddTodo}>+ Add new Todo</button>
          </div>
          <div className="table-wrapper">
            {/*   <LoadingSppiner /> */}
            {isLoading ? <LoadingSppiner /> : <Todos todos={todos} toggleTodoStatus={toggleTodoStatus} />}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
