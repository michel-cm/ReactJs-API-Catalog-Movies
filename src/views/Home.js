import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesServices";
import { Movie } from "../components/Movie";

export const Home = () => {

  const [movies,setMovies] = useState([]);

  const getMovies = async () => { // funcao para chamar nossa API e setar o valor dentro aqui dos movies
    const {data: {results}} = await MoviesService.getMovies(); // ira retornar uma promisse. 
    
    setMovies(results);
  }

  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="container">
      <div className="row">
        {movies.map(movie => (
           <div key={movie.id} className="col-3">
           <Movie movie={movie}/>
         </div>
        ))}       
      </div>
    </div>
  );
};
