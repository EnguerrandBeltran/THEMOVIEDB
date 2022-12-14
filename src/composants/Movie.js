import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/Modal';






const Movie = ({ movie }) => {

	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
	const [selectedMovie, setSelectedMovie] = useState("");
	function handleClick() {
		setSelectedMovie(movie);
		handleShow();
		console.log(movie);
	}

	const movieId = movie.id;


	const navigate = useNavigate();

	const navigateToMovie = () => {
		navigate("/MoviePage", { state: {movieId} });
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

/*
<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{movie.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Titre Original : {movie.original_title}
					<br />
					<br />
					Langue : {movie.original_language}
					<br />
					<br />
					Date de Sortie : {movie.release_date}
					<br />
					<br />
					Résumé : {movie.overview}
					<br />
					<br />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>

*/