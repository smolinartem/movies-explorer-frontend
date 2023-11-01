import './SavedMovies.css'

import SearchForm from '../../components/SearchForm/SearchForm'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'

function SavedMovies() {
  return (
    <section className='saved-movies' aria-label='Section saved movies'>
      <div className='saved-movies__container container'>
        <SearchForm />
        <MoviesCardList />
      </div>
    </section>
  )
}

export default SavedMovies
