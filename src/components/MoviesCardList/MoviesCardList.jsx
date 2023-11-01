import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import { movies } from '../../utils/MoviesList'

function MoviesCardList() {
  return (
    <ul className='movies-list'>
      {movies.map((movie) => (
        <MoviesCard key={movie.id} name={movie.nameRU} imageUrl={movie.image.url} duration={movie.duration} />
      ))}
    </ul>
  )
}

export default MoviesCardList
