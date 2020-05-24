import React from "react";

const Movie = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.year}</h4>
      <h4>{props.genre}</h4>
      <h4>{props.rating}</h4>
    </div>
  );
};
export default Movie;
