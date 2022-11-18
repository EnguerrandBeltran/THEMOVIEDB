import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




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


	return (
		<div className="movie">
			<img onClick={handleClick} className="poster" src={movie.poster_path
				? "https://image.tmdb.org/t/p/original/" + movie.poster_path
				: "./img/poster.jpg"
			}
				alt={`affiche ${movie.title}`}
			/>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{movie.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				Titre Original : {movie.original_title}
					<br/>
					Langue : {movie.original_language}
					<br/>
					Date de Sortie : {movie.release_date}
					<br/>
					Résumé : {movie.overview}


				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);

}

export default Movie;