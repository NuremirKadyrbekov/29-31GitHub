import { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import './App.scss';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  

  const createTodo = () => {
    setTodos([...todos, {
      text: inputValue,
    }])
    setInputValue("")
  }
  
  return (
    <div className="App">
      <div>
        <input type="text" value={inputValue} onChange={(e) => {
          setInputValue(e.target.value)
        }} />
        <button onClick={createTodo}>ADD</button>
      </div>
      {
        todos.map((el, id) => {
          return <TodoItem el={el} key={id} />
        })
      }
    </div>
  );
}

export default App;
