import { useEffect, useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';



export function Search({ setMovies }) {


	const [search, setSearch] = useState("?");

	useEffect(() => {
		if (search === "?") {
			axios
				.get('https://api.themoviedb.org/3/discover/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR')
				.then((res) => {

					setMovies(res.data.results);

				})
		}
		else {
			axios
				.get('https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=' + search + '&language=fr-FR')
				.then((res) => {
					setMovies(res.data.results);

				})
		}
	}
		, [search])

	return (
		<>
			<Form className="fromSearch">
				<Form.Control
					className="searchBar"
					type="seach"
					placeholder="Search"
					onChange={(e) => setSearch(e.target.value)} />
			</Form>
		</>
	);


}



