import logo from './logo.svg';
import { About } from './pages/About';
import { Home } from './pages/Home';


import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";



export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
		</BrowserRouter>

	);
}





