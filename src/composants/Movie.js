import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Movie = ({ movie }) => {

	const [selectedMovie, setSelectedMovie] = useState("");
	const movieId = movie.id;
	const navigate = useNavigate();
	const navigateToMovie = () => {
		navigate("/MoviePage", { state: { movieId } });
	}


	return (
		<div className="movie">
			<img onMouseDown={navigateToMovie} className="poster" src={movie.poster_path
				? "https://image.tmdb.org/t/p/original/" + movie.poster_path
				: "./img/poster.jpg"
			}
				alt={`affiche ${movie.title}`}
			/>
		</div>
	);
}
export default Movie;