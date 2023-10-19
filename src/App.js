// import logo from './logo.svg';
import './App.css';
import './index.css'
import Button from "./Button"
import { useState ,useEffect, useRef} from "react";
import Movie from './Movie';
 
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
          {movies.map((movie) => (
              <Movie 
              key={movie.id}
              coverImage={movie.medium_cover_image}
              summary={movie.summary} 
              title={movie.title} 
              genres={movie.genres} />
       
          ))}
        </div>
      )}
    </>
  );
}
Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary:  PropTypes.string.isRequired,
  genres:  PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default App;
