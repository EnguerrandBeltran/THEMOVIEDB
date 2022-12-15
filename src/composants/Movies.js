import Movie from "./Movie"

export function Movies({ movies }) {


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



