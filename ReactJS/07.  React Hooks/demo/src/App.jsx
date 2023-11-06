import { useEffect, useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import AddToodModal from "./components/AddTodoModal";
import { TodoContext } from "./contexts/todoContext";

const URL = "http://localhost:3030/jsonstore/todos";
function App() {
  const [todos, setTodos] = useState([]);
  const [isAddTodoOpen, setIsAddTodoOpen] = useState(false);

  const onAddTodoClick = () => setIsAddTodoOpen(true);
  const onAddTodoClose = () => setIsAddTodoOpen(false);

  const onAddTodoSubmit = async (values) => {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const newTodo = await res.json();
    setIsAddTodoOpen(false);
    setTodos((todos) => [...todos, newTodo]);
  };

  const onTodoDelete = async (id) => {
    await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    setTodos((todos) => todos.filter((t) => t._id !== id));
  };

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setTodos(Object.values(data));
      });
  }, []);

  const onTodoClick = async (id) => {
    const todo = todos.find((t) => t._id === id);

    await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...todo,
        isCompleted: !todo.isCompleted,
      }),
    });
    setTodos((todos) =>
      todos.map((t) =>
        t._id === id
          ? { ...t, isCompleted: !t.isCompleted }
          : t
      )
    );
  };

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setTodos(Object.values(data));
      });
  }, []);

  const todoContext = {
    todos,
    onTodoDelete,
    onTodoClick,
  };

  return (
    <>
      <TodoContext.Provider value={todoContext}>
        <Header />
        <ToDoList onAddTodoClick={onAddTodoClick} />
        <AddToodModal
          isAddTodoOpen={isAddTodoOpen}
          onAddTodoClose={onAddTodoClose}
          onAddTodoSubmit={onAddTodoSubmit}
        />
      </TodoContext.Provider>
    </>
  );
}

export default App;
