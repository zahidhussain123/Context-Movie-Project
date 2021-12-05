import { createContext , useState } from "react";


export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movie , setMovie] = useState([
        {
        
        },
     
      ]);
    return (
        <MovieContext.Provider value={[movie , setMovie]}>
           {props.children}
        </MovieContext.Provider>
    )
}