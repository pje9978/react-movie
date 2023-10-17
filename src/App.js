// import logo from './logo.svg';
import './App.css';
import './index.css'
import Button from "./Button"
import { useState ,useEffect, useRef} from "react";

function App() {
  const [loading,setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )).json();

    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(()=>{
    getMovies()
  },[])
  console.log(movies)
  return (
    
    <>
      {loading? (
        <h1>Loaing</h1>
      ) : ( 
        <div> 
          {movies.map(movie => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image}></img>
              <h2 className='text-2xl'>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul className='bg-yellow-200'>
                {movie.genres.map(g => <li>{g}</li>)}
                
              </ul>
            </div>
           
          ))}
        </div>
      )}
    </>
  );
}

export default App;
