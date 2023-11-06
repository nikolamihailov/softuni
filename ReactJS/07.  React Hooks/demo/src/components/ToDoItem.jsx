import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const ToDoItem = ({ _id, text, onTodoDelete }) => {
  return (
    <ListGroup.Item
      as="li"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {text}
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
