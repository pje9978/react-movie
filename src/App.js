// import logo from './logo.svg';
import './App.css';
import './index.css'
import Button from "./Button"
import { useState ,useEffect, useRef} from "react";

function Hello(){
  useEffect(() => {
    console.log("created :)")
    return () => console.log("destoryed :(");
  },[])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);

  const onClick = () =>setShowing((prev) => !prev)
    
  
  return (
    <>
      <div>
        {showing ? <Hello/> : null}
          <button onClick={onClick}>{showing ? "hide" : "show"}</button>
      </div>
    </>
  );
}

export default App;
