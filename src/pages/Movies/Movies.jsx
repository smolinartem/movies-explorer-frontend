import './Movies.css'

import SearchForm from '../../components/SearchForm/SearchForm'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import Button from '../../components/Button/Button'

function Movies() {
  return (
    <section className='movies' aria-label='Section movies'>
      <div className='movies__container container'>
        <SearchForm />
        <MoviesCardList />
        <Button className='movies__more hover' title='Ещё' />
      </div>
    </section>
  )
}

export default Movies
