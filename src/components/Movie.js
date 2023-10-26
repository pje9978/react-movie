import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres }) {
  return (
    <div className="w-1/4">
      <div className="p-3">
        <img src={coverImg} alt={title} />
        <h2 className="text-xl font-medium truncate">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        {/* <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

Movie.propTypes = {
  id:PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;