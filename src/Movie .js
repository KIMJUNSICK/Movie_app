import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import LinesEllipsis from "react-lines-ellipsis";

function Movie({ title, poster, genres, summary }) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>

      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <div className="Movie__Summary">
          <LinesEllipsis
            text={summary}
            maxLine="3"
            ellipsis="..."
            trimRight
            baseon="letters"
          />
        </div>
      </div>
    </div>
  );
}

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre} </span>;
}

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  summary: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default Movie;
