import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'

function Movies() {
  return (
    <>
      <Header />
      <main className='movies'>
        <div className='movies__container container'>
          <SearchForm />
          <MoviesCardList />
          <button className='btn-more'>Ещё</button>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Movies
