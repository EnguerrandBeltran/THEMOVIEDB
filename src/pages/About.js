import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import '../styles/page.css';
import LogoTMDB from "../images/Logo.svg";
export function About() {
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
				Auteur du site : Enguerrand Beltran
			</div>
		</div>
	);
}