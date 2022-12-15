import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie"


export function SimilarMovie({ movie }) {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/movie/' + movie.id + '/similar?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR')
			.then((res) => {

				setMovies(res.data.results);

			})
	}
		, [movies])


	return (
		<>
			<div className="corps">
				<div className="moviesContent">
					<div className="movies">
						{
							movies.map((movie, i) =>
								<div key={i}>	<Movie movie={movie} /></div>
							)
						}
					</div>
				</div>
			</div>
		</>
	);


}



