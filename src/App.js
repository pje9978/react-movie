// import logo from './logo.svg';
import './App.css';
import './index.css'
import Button from "./Button"
import { useState ,useEffect, useRef} from "react";

function App() {
   const [loading, setLoading] = useState(true);
   const [coin, setCoins] = useState([])
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response)  => response.json())
      .then((json) => {
        setCoins(json); 
        setLoading(false);
      });
  },[])
  return (
    <>
      <h1>The coins {loading ? "" : `(${coin.length})`}</h1>
      {loading ? <strong>Loading</strong> : 
        <ul>
            {coin.map((coin)=> <li>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</li>)}
        </ul>
      }

    </>
  );
}

export default App;
