import Todo from "./Todo";

const Todos = ({ todos, toggleTodoStatus }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header-task">Task</th>
          <th className="table-header-status">Status</th>
          <th className="table-header-action">Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((t) => (
          <Todo
            key={t.id}
            {...t}
            toggleTodoStatus={toggleTodoStatus}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Todos;
