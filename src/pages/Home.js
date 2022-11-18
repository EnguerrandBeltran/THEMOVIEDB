import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Movies } from "../composants/Movies";
import LogoTMDB from "../images/Logo.svg";
export function Home() {
	return (
		<> <div className="enTete">
			<img className="logo" src={LogoTMDB} alt="fireSpot" />
			<div className="navigation_bar">
				<Link className="navLink" to="/">Home</Link>
				<Link className="navLink" to="/About">About</Link>
				
			</div>
		</div>
			<div className="corps">
				<Movies />
			</div>
		</>


	);
}