import { BrowserRouter, Routes, Route, Outlet, Link, useLocation} from "react-router-dom";
import '../styles/page.css';
import LogoTMDB from "../images/Logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from '../composants/MovieCard';






export function MoviePage() {
	const [movie, setMovie] = useState();
	const { state } = useLocation();
	//console.log(state.movieId);

	useEffect(() => {
		console.log(state)
			axios
				.get('https://api.themoviedb.org/3/movie/' + state.movieId +'?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR')
				.then((res) => {
					console.log(res.data);
					setMovie(res.data);

				})
		
	},[])

	//const location = useLocation();
	//console.log(movie)
	return (
		<div>
			<div className="enTete">
				<img className="logo" src={LogoTMDB} alt="fireSpot" />
				<div className="navigation_bar">
					<Link className="navLink" to="/">Home</Link>
					<Link className="navLink" to="/About">About</Link>
									</div>
				
			</div>
			<div className="corps">
				{movie && 
				<MovieCard movie={movie}/>
				}
			</div>
		</div>
	);
}