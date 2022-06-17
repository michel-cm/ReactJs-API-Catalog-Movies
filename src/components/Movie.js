import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addMovie, removeMovie } from "../store/actions/movies";

export const Movie = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites)

  return (
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
        {
          favorites.movies.find(m => m.id == movie.id) ? <button className="btn btn-danger" onClick={() => dispatch(removeMovie(movie))}>Remover dos favoritos</button>
          :
        
        <button className="btn btn-secondary" onClick={() => dispatch(addMovie(movie))}>Favoritar</button>
      }
      </div>
    </div>
  );
};
