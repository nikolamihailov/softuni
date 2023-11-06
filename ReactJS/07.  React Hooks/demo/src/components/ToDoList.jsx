import ListGroup from "react-bootstrap/ListGroup";
import ToDoItem from "./ToDoItem";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { TodoContext } from "../contexts/todoContext";

function ToDoList({ onAddTodoClick }) {
  const { todos } = useContext(TodoContext);
  return (
    <div
      style={{
        textAlign: "center",
        margin: "15px auto",
        width: "40%",
      }}
    >
      <h1>ToDo List:</h1>
      <ListGroup as="ul">
        {todos.map((todo) => (
          <ToDoItem key={todo._id} {...todo} />
        ))}
      </ListGroup>
      <Button variant="primary" onClick={onAddTodoClick}>
        Add task
      </Button>
    </div>
  );
}

export default ToDoList;
