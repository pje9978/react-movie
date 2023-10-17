// import logo from './logo.svg';
import './App.css';
import './index.css'
import Button from "./Button"
import { useState ,useEffect, useRef} from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  // console.log(toDo)
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(toDo)
    if(toDo === ""){
      return;
    }
    
    setToDos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  }
 
  return (
    <>
      <h1>My to do list {toDos.length}</h1>
      <form action="" onSubmit={onSubmit}>
        <input
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="Write your to do..."/>
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item,index) => (<li key={index}>{item}</li>))}
      </ul>
    </>
  );
}

export default App;
