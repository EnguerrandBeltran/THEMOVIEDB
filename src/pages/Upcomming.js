import { Link } from "react-router-dom";
import { MoviesUp } from "../composants/MoviesUp";
import LogoTMDB from "../images/Logo.svg";



export function Upcomming() {

	return (
		<>
			<div className="enTete">
				<img className="logo" src={LogoTMDB} alt="fireSpot" />
				<div className="navigation_bar">
					<Link className="navLink" to="/">Home</Link>
					<Link className="navLink" to="/About">About</Link>
					<Link className="navLink" to="/OutNow">Out Now</Link>
					<Link className="navLink" to="/Upcomming">Upcomming</Link>
					<div></div>
				</div >
				<MoviesUp />
			</div >
		</>


	);
}