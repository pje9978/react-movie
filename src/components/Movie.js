import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title,showImage}) {
  const handleImageLoadError = (event) => {
    console.log("에러: 이미지를 로드할 수 없습니다.");
    event.target.parentElement.parentElement.parentElement.style.display = "none";
  };

  // coverImg가 유효하고 showImage가 true인 경우에만 해당 div 요소를 렌더링합니다.
  const renderMovieContent = () => {
    if (coverImg && showImage) {
      return (
        <Link to={`/movie/${id}`}>
          <div className="p-6 md:p-3">
            <img className="w-full h-full rounded" src={coverImg} alt={title} onError={handleImageLoadError} />
            <h2 className="text-xl font-medium truncate text-black/60 hover:text-black/100">
              {title}
            </h2>
          </div>
        </Link>
      );
    } else {
      return null; // coverImg가 유효하지 않거나 showImage가 false인 경우에는 null을 반환하여 해당 div 요소를 숨깁니다.
    }
  };

  return <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" >{renderMovieContent()}</div>;
}

Movie.propTypes = {
  id:PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  showImage: PropTypes.bool.isRequired,
  // summary: PropTypes.string.isRequired,
  // genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;