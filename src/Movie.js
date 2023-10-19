function Movie({coverImage, title, summary, genres}){
    return (
        <div >
            <img src={coverImage} alt={title}></img>
            <h2 className='text-2xl'>{title}</h2>
            <p>{summary}</p>
            <ul className='bg-yellow-200'>
            {genres.map(g => <li key={g}>{g}</li>)}
            
            </ul>
        </div>
  );

}
export default Movie;