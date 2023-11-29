import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

function MoviesCardList({ isLoading = false, movies, hasLike = [] }) {
  const moviesComponent =
    movies.length > 0 ? (
      <ul className='movies-list'>
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id || movie.movieId}
            movie={movie}
            isSaved={hasLike.includes(movie.id)}
          />
        ))}
      </ul>
    ) : null

  return isLoading ? <Preloader /> : moviesComponent
}

export default MoviesCardList

/* <span className='movies-list__text'>Ничего не найдено</span> */
