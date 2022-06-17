import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../api/MoviesServices";

export const MovieDetail = (props) => {
  const [movie, setMovie] = useState({});

  const { id } = useParams() ;

  const getMovie = async () => {   
    const { data } = await MoviesService.getMovieDetail(id);
    setMovie(data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <section className="movie-detail">
      <div className="container">
        <div className="row gx-5">
          <div className="col-6">
        
          </div>
          <div className="col-6">
            <h1>{movie.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>
    </section>
  );
};
