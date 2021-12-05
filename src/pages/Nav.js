import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import "./Nav.css";

const Nav = () => {
  const [movie , setMovie] =  useContext(MovieContext)
    return (
        <div className="app">
            <h1 className="zaid">Zaid-Tech</h1>
            <strong className="list">List of movies:{movie.length}</strong>
        </div>
    )
}

export default Nav;
