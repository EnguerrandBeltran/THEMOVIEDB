import logo from './logo.svg';
import Foaas from './Foaas';
import { About } from './pages/About';
import { Home } from './pages/Home';

import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";



export default function App() {
	fetch("https://foaas.com/off/Thomas/Enguerrand")
		.then(response => response.json())
		.then((data) => console.log(data));
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
		</BrowserRouter>

	);
}





