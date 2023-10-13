import logo from "./logo.svg";
import "./App.css";
import ToDo from "./ToDo";

function App() {
  const todoItems = [
    { id: 1, task: "Writing 1-page poem", isDone: true },
    { id: 2, task: "Gym", isDone: false },
    { id: 3, task: "Shopping", isDone: false },
    { id: 4, task: "Standup call", isDone: true },
  ];

  return (
    <div className="App">
      <ToDo todoItems={todoItems} />
    </div>
  );
}

export default App;

// Build a React component that takes the todoItems as props and list all the todo tasks. b. if isDone is true then show the item with a strikethrough.
