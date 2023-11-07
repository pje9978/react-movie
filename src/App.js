// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import './index.css'


function App() {
  const [loading, setLoading] = useState(true);
  const [movies,setMoves] = useState([]);
  const getMovies = async() => {
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )).json();
    setMoves(json.data.movies)
    setLoading(false);
  }
  useEffect(()=>{
    getMovies();
  },[])

  console.log(movies)
  return (
    <>
      {loading ? (
        <h1>loading..</h1>
        ) : (
        <div>
            {movies.map(movie => (
              <div key={movie.id}> 
                  <img src={movie.medium_cover_image}></img>
                  <h2>{movie.title}</h2>
                  <p>{movie.summary}</p>
                  <ul>
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
