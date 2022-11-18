import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie"
const { MovieDb } = require('moviedb-promise');
const moviedb = new MovieDb('ed82f4c18f2964e75117c2dc65e2161d');



export function Movies() {

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/discover/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR')
		.then((res) => {
			setMovies(res.data.results);

		})}, [])

	return (
		<div className="movies">
			{
				movies.map((movie, i) =>
				<div key={i}>	<Movie movie={movie}/></div>
				)
			}
		</div>
	);


}