import { useEffect } from "react";
const { MovieDb } = require('moviedb-promise');
const moviedb = new MovieDb('ed82f4c18f2964e75117c2dc65e2161d');
var res;

export function Movie(){

  moviedb
    .discoverMovie({})
    .then((res) => {
      
    })

    return(
      <div></div>
);
}