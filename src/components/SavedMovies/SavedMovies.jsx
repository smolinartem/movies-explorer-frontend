import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import Footer from '../Footer/Footer'

function SavedMovies() {
  return (
    <>
      <main className='saved-movies'>
        <div className='saved-movies__container container'>
          <SearchForm />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
