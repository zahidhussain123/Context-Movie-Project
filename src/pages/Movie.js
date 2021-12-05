import React,{useContext} from "react";
import { MovieContext } from "./MovieContext";
import MovieList from "./MovieList";

export const Movie = () => {
   const [movie , setMovie] = useContext(MovieContext)
  return (
    <div>
      {movie.map((mov) => (
        <MovieList name={mov.name} actor={mov.actor} id={mov.id} />
      ))}
    </div>
  );
};
