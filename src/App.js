import logo from "./logo.svg";
import "./App.css";
import react from "react";
import Header from "./compenets/Header";
import Todoitem from "./compenets/Todoitem";
import Button from "./compenets/Button";
import Counter from "./compenets/Counter";
function App() {
  return (
    <div className="todo-container">
      <Header />
      <Todoitem text="Eat" />
      <Todoitem text="Code"/>
      <Todoitem text="Sleep" />
      <Todoitem text="Game"/>
      <Todoitem text="Gym" />
      <Button />
    </div>
  );
}

export default App;
