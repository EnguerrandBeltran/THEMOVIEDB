import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Celestialbodies } from "../composants/Celestialbodies";
import LogoTMDB from "../images/Logo.svg";
export function Home() {
	return (
		<> <div className="enTete">
			<img className="logo" src={LogoTMDB} alt="fireSpot" />
			<div className="navbar">
				<Link className="navLink" to="/">Home</Link>
				<Link className="navLink" to="/About">About</Link>
			</div>
		</div>
			<div className="corps">
				<Celestialbodies />
			</div>
		</>


	);
}