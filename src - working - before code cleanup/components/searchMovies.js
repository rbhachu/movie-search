import MovieCard from './movieCard';

const SearchMovies = ({ fetchdata }) => { 

  return (
            <div className="card-list">
              {
                fetchdata.map((movie) => (
                  <MovieCard movie={movie} key={movie.id} />
                ))
              }
            </div>
        )

}

export default SearchMovies;