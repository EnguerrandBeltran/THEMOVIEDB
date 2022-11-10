import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import '../styles/page.css';
export function About() {
	return (
                <div>
        <div className="enTete">
               <h1> A Propos : </h1>
        <div className="navbar">
        <Link className="navLink" to="/">Home</Link>
        <Link  className="navLink" to="/About">About</Link>
        </div>
        </div>
        <div className="lorem">
Auteur du site : Enguerrand Beltran
</div>
        </div>
	);
  }