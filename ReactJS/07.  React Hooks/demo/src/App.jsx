import { useEffect, useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import AddToodModal from "./components/AddTodoModal";

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

  return (
    <>
      <Header />
      <ToDoList
        todos={todos}
        onAddTodoClick={onAddTodoClick}
        onTodoDelete={onTodoDelete}
      />
      <AddToodModal
        isAddTodoOpen={isAddTodoOpen}
        onAddTodoClose={onAddTodoClose}
        onAddTodoSubmit={onAddTodoSubmit}
      />
    </>
  );
}

export default App;
