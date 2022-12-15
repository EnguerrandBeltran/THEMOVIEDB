import { About } from './pages/About';
import { Home } from './pages/Home';
import { MoviePage } from './pages/MoviePage';
import { Upcomming } from './pages/Upcomming';
import { OutNow } from './pages/OutNow';



import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="moviepage" element={<MoviePage />} />
				<Route path="Upcomming" element={<Upcomming />} />
				<Route path="OutNow" element={<OutNow />} />
			</Routes>
		</BrowserRouter>

	);
}





