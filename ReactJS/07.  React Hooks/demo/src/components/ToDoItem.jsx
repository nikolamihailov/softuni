import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { TodoContext } from "../contexts/todoContext";

const ToDoItem = ({ _id, isCompleted, text }) => {
  const { onTodoDelete, onTodoClick } =
    useContext(TodoContext);
  return (
    <ListGroup.Item
      as="li"
      style={{
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
      onClick={() => onTodoClick(_id)}
    >
      <p
        style={
          isCompleted
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {" "}
        {text}
      </p>
      <Button
        variant="danger"
        type="submit"
        onClick={() => onTodoDelete(_id)}
      >
        X
      </Button>
    </ListGroup.Item>
  );
};

export default ToDoItem;
