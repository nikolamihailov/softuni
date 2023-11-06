import ListGroup from "react-bootstrap/ListGroup";
import ToDoItem from "./ToDoItem";
import Button from "react-bootstrap/Button";

function ToDoList({ todos, onAddTodoClick, onTodoDelete }) {
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
          <ToDoItem
            key={todo._id}
            {...todo}
            onTodoDelete={onTodoDelete}
          />
        ))}
      </ListGroup>
      <Button variant="primary" onClick={onAddTodoClick}>
        Add task
      </Button>
    </div>
  );
}

export default ToDoList;
