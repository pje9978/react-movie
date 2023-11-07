import { useState , useEffect} from "react";
import Movie from "../componont/Movie";


export default function Home(params) {
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

  // console.log(movies)
  return (
    <>
      {loading ? (
        <h1 className='w-screen h-screen opacity-80 bg-slate-900 text-slate-200 text-4xl font-semibold text-center pt-12'>Loading..</h1>
        ) : (
        <div className='bg-gradient-to-r via-black-500 from-slate-900 to-slate-900'>
          <nav className='bg-black'>
            <div className='container mx-auto flex justify-center items-center relative'>
            <div className=' text-slate-400 text-center py-4'>
              <h1 className='text-4xl text-center font-bold'>Movie</h1>

            </div>
            <button className="bg-slate-600 hover:bg-slate-500 hover:text-slate-80 text-slate-800 absolute right-0 mr-6 px-3 py-1 font-medium rounded-md">login</button>

            </div>
          </nav>

          <div className='container mx-auto flex flex-wrap mt-8'>
              <p className="text-center w-full mx-auto text-slate-300 tracking-widest text-xs opacity-30 mt- pb-2">Explore, Watch, and Enjoy Movies Anytime, Anywhere</p>
              {movies.map(movie => (
                <Movie 
                  id={movie.id}
                  key={movie.id}
                  coverImg={movie.medium_cover_image}
                  summary={movie.summary}
                  title={movie.title}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};
