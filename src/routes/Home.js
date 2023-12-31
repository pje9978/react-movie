import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container mx-auto overflow-hidden">
          <h2 className="text-3xl text-center my-12 font-medium">Movies..</h2>
          <div className="flex flex-wrap">
            {movies.map((movie) => (
              <Movie
                id={movie.id}
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                showImage={true}
                // summary={movie.summary}
                // genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;