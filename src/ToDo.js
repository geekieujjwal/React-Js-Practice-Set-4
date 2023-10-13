import { useState } from "react";

const ToDo = ({ todoItems }) => {
  const [remove, setRemove] = useState(todoItems);

  const handleClick = (e) => {
    console.log(e.target.value);
    setRemove((prev) =>
      prev.filter((tasks) => tasks.id !== Number(e.target.value))
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      {remove.map(({ id, task, isDone }) => {
        return (
          <div
            key={id}
            style={{ textDecoration: isDone ? "line-through" : "" }}
          >
            {task}
            <button onClick={handleClick} value={id}>
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
