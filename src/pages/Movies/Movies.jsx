import './Movies.css'

import SearchForm from '../../components/SearchForm/SearchForm'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'

function Movies() {
  return (
    <section className='movies' aria-label='Section movies'>
      <div className='movies__container container'>
        <SearchForm />
        <MoviesCardList />
        <button className='btn-more hover'>Ещё</button>
      </div>
    </section>
  )
}

export default Movies
