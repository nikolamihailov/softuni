import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import useForm from "../hooks/useForm";

const AddToodModal = ({
  onAddTodoSubmit,
  isAddTodoOpen,
  onAddTodoClose,
}) => {
  const { values, onChangeHandler, onSubmitHandler } =
    useForm({ text: "" }, onAddTodoSubmit);

  return (
    <Modal show={isAddTodoOpen}>
      <Modal.Header closeButton onClick={onAddTodoClose}>
        <Modal.Title>Add todo:</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group
            className="mb-3"
            controlId="formBasicText"
          >
            <Form.Label>Text</Form.Label>
            <Form.Control
              type="text"
              name="text"
              placeholder="Study..."
              value={values.text}
              required
              onChange={onChangeHandler}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button
            variant="secondary"
            onClick={onAddTodoClose}
          >
            Close
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddToodModal;
