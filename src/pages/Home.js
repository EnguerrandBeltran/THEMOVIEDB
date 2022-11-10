import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Celestialbodies } from "../composants/Celestialbodies";
export function Home() {
	return (
        <div>
        <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        </div>
        <Celestialbodies/>
        </div>

	);
  }