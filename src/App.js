// // import CompA from "./components/CompA";
// // import CompB from "./components/CompB";
// // import CompC from "./components/CompC";
// // import { ThemeContext } from "./context/Context";
// // import {useState} from "react"
// import { init } from 'ityped'
// import { useRef,useEffect } from 'react'
// function App() {
//   // const [useDetails] = useState({
//   //   name:"Zahid khAN",
//   //   age: 25,
//   //   nationality:"pakistani"
//   // }
//   // )
//            const textRef =   useRef();
//   useEffect(() => {

//     init(textRef.current, { showCursor: true, strings: ['Engineer', 'Developer' ,"Designer" ," Teacher" ], });

//   }, [])
//   return (
//     <div>
//       {/* <ThemeContext.Provider value={useDetails}>
//         <CompA />
//         <CompB />
//         <CompC />
//       </ThemeContext.Provider> */}
//        <div >
//       <span>Computer Science</span> <span ref={textRef}></span>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Addmovie from "./pages/Addmovie";
import { Movie } from "./pages/Movie";
import { MovieProvider } from "./pages/MovieContext";
import Nav from "./pages/Nav";

const App = () => {
  return (
    <MovieProvider>
      <Nav />
      <Addmovie />
      <Movie />
    </MovieProvider>
  );
};

export default App;
