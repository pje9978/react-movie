// import logo from './logo.svg';
import './App.css';
import './index.css'
import Button from "./Button"
import { useState ,useEffect, useRef} from "react";


function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeywork(event.target.value);
  const [keyword, setKeywork] = useState("");


  useEffect(() => {
    console.log("i run only once")
  },[]); 
  useEffect(() => {
    console.log("I run when 'keyword' changes")

  }, [keyword])
  useEffect(() => {
    console.log("I run when 'counter' changes")
   
  }, [counter])
  useEffect(()=> {
    console.log("I run when keyword & counter change")
  }, [keyword, counter])
  return (
    <>
      <input value={keyword} type="text" onChange={onChange} placeholder="Search here..."></input>
      <h1>{counter}</h1>
      <button onClick={onClick}  >Click me</button>
    </>
  );
}

export default App;
