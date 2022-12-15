import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie"
import Form from 'react-bootstrap/Form';
const { MovieDb } = require('moviedb-promise');
const moviedb = new MovieDb('ed82f4c18f2964e75117c2dc65e2161d');




export function Movies({movies}) {


	
	return (
		<>
			<div className="corps">
				<div className="moviesContent">
				<div className="movies">
					{
						movies.map((movie, i) =>
							<div key={i}>	<Movie movie={movie} /></div>
						)
					}
				</div>
				</div>
			</div>
		</>
	);


}



