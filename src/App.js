import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Movie from "./components/Movie";
function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail/:id" element={<Detail />} />
       
      
      </Routes>

  );
}
export default App;