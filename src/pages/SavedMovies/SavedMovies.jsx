import { useEffect } from 'react'
import './SavedMovies.css'

import { getSavedMovies } from '../../utils/MoviesApi'

import SearchForm from '../../components/SearchForm/SearchForm'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useMMovies } from '../../hooks/useMMovies'

function SavedMovies() {
  const { savedMovies, setSavedMovies } = useMMovies()

  useEffect(() => {
    getSavedMovies()
      .then((data) => {
        setSavedMovies(data.movies)
      })
      .catch(() => console.error())
  }, [setSavedMovies])

  console.log(savedMovies)

  return (
    <>
      <Header />
      <main className='main'>
        <section className='saved-movies' aria-label='Section saved movies'>
          <div className='saved-movies__container container'>
            <SearchForm />
            <MoviesCardList movies={savedMovies} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
