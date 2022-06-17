import { Link } from "react-router-dom";

export const Movie = ({ movie }) => (
  <div className="movie-item">
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt=""
      />
    </div>
    <div className="movie-excerpt">
      <h4>{movie.title}</h4>
      <Link to={`/movie/${movie.id}`} className="btn btn-primary">
        Ver detalhes
      </Link>
    </div>
  </div>
);
