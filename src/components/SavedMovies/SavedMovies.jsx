import './SavedMovies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'

function SavedMovies() {
  return (
    <>
      <Header />
      <main className='saved-movies'>
        <div className='saved-movies__container container'>
          <SearchForm />
          <MoviesCardList />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
