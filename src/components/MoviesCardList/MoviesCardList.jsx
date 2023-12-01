import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'
import { useMovies } from '../../hooks/useMovies'

function MoviesCardList({ isLoading = false, movies, hasLike = [] }) {
  const { notFound } = useMovies()

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
    ) : (
      <span className='movies-list__text'>{notFound}</span>
    )

  return isLoading ? <Preloader /> : moviesComponent
}

export default MoviesCardList
