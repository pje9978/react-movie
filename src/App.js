// import logo from './logo.svg';
import './App.css';
import './index.css'
import Button from "./Button"
import { useState ,useEffect, useRef} from "react";


function App() {
  const [showing, setShowing] = useState(false);

  const onClick = () =>setShowing((prev) => !prev)
    
  
  return (
    <>
      <div>
          <button onClick={onClick}>{showing ? "hide" : "show"}</button>
      </div>
    </>
  );
}

export default App;
