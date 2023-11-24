import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

function MoviesCardList({ isLoading, movies }) {
  const moviesComponent =
    movies.length > 0 ? (
      <ul className='movies-list'>
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id}
            name={movie.nameRU}
            imageUrl={movie.image.url}
            duration={movie.duration}
          />
        ))}
      </ul>
    ) : (
      <span className='movies-list__text'>Ничего не найдено</span>
    )

  return isLoading ? <Preloader /> : moviesComponent
}

export default MoviesCardList
