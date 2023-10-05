// import logo from './logo.svg';
import './App.css';
import './index.css'
import Button from "./Button"
import { useState ,useEffect} from "react";
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1)
  console.log("i run all the time")

  useEffect(() => {
    console.log('dddd')
  },[]);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={onClick} text={"Continue"} >Click me</button>
    </>
  );
}

export default App;
