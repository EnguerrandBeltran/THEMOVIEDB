import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/Modal';
import { SimilarMovie } from "./SimilarMovie";






const MovieCard = ({ movie }) => {

  var dateMovie = movie.release_date;
  const dates = dateMovie.split('-');



return (
<div><div className="movieCard">
<div className="movieCardPosterContent">
  			<img className="movieCardPoster" src={movie.poster_path
				? "https://image.tmdb.org/t/p/original/" + movie.poster_path
				: "./img/poster.jpg"
			}
				alt={`affiche ${movie.title}`}
			/></div>
      <div className="movieInfo">
        <div className="movieTitre">{movie.title}</div>
        <div className="movieTitreVO">Titre Original : {movie.original_title}</div>
        <div className="movieDate">Date de sortie : {dates[2]}/{dates[1]}/{dates[0]}</div>
        <div className="movieOverview">{movie.overview}</div>
        </div></div>
        <div>
          <div className="similar">Films Similaire : </div>
          <SimilarMovie movie={movie}/>
        </div>
        </div>
  );

}

export default MovieCard;
