import { useEffect, useState } from 'react'
import './SavedMovies.css'

import SearchForm from '../../components/SearchForm/SearchForm'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import { getSavedMovies } from '../../utils/MoviesApi'

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([])

  useEffect(() => {
    getSavedMovies()
      .then((data) => {
        setSavedMovies(data.movies)
      })
      .catch(() => console.error())
  }, [])

  const handleDelete = (id) => {
    setSavedMovies(savedMovies.filter((m) => m._id !== id))
  }

  return (
    <>
      <Header />
      <main className='main'>
        <section className='saved-movies' aria-label='Section saved movies'>
          <div className='saved-movies__container container'>
            <SearchForm />
            <MoviesCardList movies={savedMovies} onDelete={handleDelete} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
