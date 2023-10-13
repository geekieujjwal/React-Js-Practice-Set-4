import logo from "./logo.svg";
import "./App.css";
import ToDo from "./ToDo";

function App() {
  const todoItems = [
    { id: 1, task: "Writing 1-page poem", isDone: false },
    { id: 2, task: "Gym", isDone: false },
    { id: 3, task: "Shopping", isDone: false },
    { id: 4, task: "Standup call", isDone: false },
  ];

  return (
    <div className="App">
      <ToDo todoItems={todoItems} />
    </div>
  );
}

export default App;
