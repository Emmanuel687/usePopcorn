import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from './App';
import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating]=useState(0)
//   return (
//     <>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating}/>
//       <p>This movie Received a {movieRating} stars Rating </p>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={6}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    {/* <StarRating maxRating={5} color="red" className="test" defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
