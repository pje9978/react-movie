// import logo from './logo.svg';
import './App.css';
import './index.css'
import Button from "./Button"
import { useState ,useEffect, useRef} from "react";

function App() {
  const [toDo, setTodo]  = useState("");
  const [toDos, setTodos]  = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }

    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  }
  console.log(toDos)
  // console.log(toDo)
  return (
    <>
      <form  onSubmit={onSubmit}>
        <input value={toDo}  onChange={onChange} type="text" placeholder='write your to do..' />
        <button>Add to do</button>
      </form>
    </>
  );
}

export default App;
