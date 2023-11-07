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
                <div key={movie.id} className='w-full  sm:w-1/2 md:w-1/3 lg:w-1/4'>
                  <div key={movie.id} className='m-6 sm:mx-3 mb-0 p-3  flex flex-col overflow-hidden project-card'>
                      <div className='h-full group rounded-md bg-slate-200 grow relative'>
                        <img className='w-full rounded-md' src={movie.medium_cover_image}></img>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-black w-full h-full text-2xl font-semibold rounded-md  text-slate-500 p-4 opacity-90 group-hover:opacity-0 flex justify-center items-center animate-fade duration-500 delay-200 iteration-count-3'><h2 className='p-2 truncate text-4xl'>{movie.title}</h2></div>
                        <p className=' absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2  w-2/3 text-base leading-relaxed text-slate-700  h-16 truncate rounded-md text-slate-500 group-hover:opacity-0  animate-fade duration-500 delay-200 iteration-count-3'>{movie.summary}</p>
                        {/* <ul className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-xs inline-flex flex-wrap gap-2'>
                          {movie.genres.map((g,i) => <li className='px-2 py-1 shadow-sm text-slate-600 bg-white rounded-md' key={i}>{g}</li>)}
                        </ul> */}
                      </div>
                </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
