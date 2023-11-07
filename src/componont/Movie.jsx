import PropTypes from "prop-types";
import { Link } from "react-router-dom";



export default function Movie({id, coverImg, title, summary}) {
    return(
        <>
            <div className='w-full  sm:w-1/2 md:w-1/3 lg:w-1/4'>
                <div className='m-6 sm:mx-3 mb-0 p-3  flex flex-col overflow-hidden project-card'>
                    <div className='h-full group rounded-md bg-slate-200 grow relative'>
                    <img className='w-full rounded-md' alt={title} src={coverImg}></img>
                    <Link to={`/movie/${id}`}>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-black w-full h-full text-2xl font-semibold rounded-md  text-slate-500 p-4 opacity-90 group-hover:opacity-0 flex justify-center items-center animate-fade duration-500 delay-200 iteration-count-3'>
                            <h2 className='p-2 truncate text-4xl'>
                            {title}
                            </h2>
                        </div>
                    </Link>
                    <p className=' absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2  w-2/3 text-base leading-relaxed text-slate-700  h-16 truncate rounded-md text-slate-500 group-hover:opacity-0  animate-fade duration-500 delay-200 iteration-count-3'>{summary}</p>
                    {/* <ul className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-xs inline-flex flex-wrap gap-2'>
                        {movie.genres.map((g,i) => <li className='px-2 py-1 shadow-sm text-slate-600 bg-white rounded-md' key={i}>{g}</li>)}
                    </ul> */}
                    </div>
                </div>
            </div>    
            
        </>
    );
};

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    // genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}