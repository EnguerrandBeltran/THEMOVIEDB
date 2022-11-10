import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Celestialbodies } from "../composants/Celestialbodies";
export function Home() {
	return (
                <div>
        <div className="enTete">
               <h1> Celestials Bodies</h1>
        <div className="navbar">
        <Link className="navLink" to="/">Home</Link>
        <Link  className="navLink" to="/About">About</Link>
        </div>
        </div>
        <Celestialbodies/>
        </div>

	);
  }