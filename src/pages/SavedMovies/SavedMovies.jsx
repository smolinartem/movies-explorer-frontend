import './SavedMovies.css'

import SearchForm from '../../components/SearchForm/SearchForm'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function SavedMovies() {
  return (
    <>
      <Header />
      <main>
        <section className='saved-movies' aria-label='Section saved movies'>
          <div className='saved-movies__container container'>
            {/* <SearchForm />
        <MoviesCardList /> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
