import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import { movies } from '../../utils/MoviesList'

function MoviesCardList() {
  console.log(movies)
  return (
    <ul className='movies-list'>
      {movies.map((movie) => (
        <MoviesCard key={movie.id} name={movie.nameRU} imageUrl={movie.image.url} />
      ))}
    </ul>
  )
}

export default MoviesCardList
