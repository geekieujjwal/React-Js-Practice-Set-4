import { useState } from "react";

const ToDo = ({ todoItems }) => {
  const [remove, setRemove] = useState(todoItems);

  const handleCross = (e) => {
    console.log(e.target.value);
    setRemove((prev) =>
      prev.filter((tasks) => tasks.id !== Number(e.target.value))
    );
  };

  const handleMarkAsDone = (e) => {
    console.log(e.target.value);
    setRemove((prev) =>
      prev.map((task) =>
        task.id === Number(e.target.value)
          ? { ...task, isDone: !task.isDone }
          : task
      )
    );
  };
  console.log(remove);

  return (
    <div>
      <h1>Todo List</h1>
      {remove.map(({ id, task, isDone }) => {
        const styles = isDone
          ? { textDecoration: "line-through", color: "red" }
          : {};
        return (
          <div key={id} style={styles}>
            {task}
            <button onClick={handleCross} value={id}>
              x
            </button>
            <button onClick={handleMarkAsDone} value={id}>
              Mark as Done
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
