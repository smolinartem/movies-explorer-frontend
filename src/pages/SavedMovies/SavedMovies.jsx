import { useEffect, useState } from 'react'
import './SavedMovies.css'

import SearchForm from '../../components/SearchForm/SearchForm'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useMovies } from '../../hooks/useMovies'

import { getSavedMovies } from '../../utils/MoviesApi'

function SavedMovies() {
  const {
    savedMovies,
    setSavedMovies,
    filterSearchAll,
    filterSearchShorts,
    shownSavedMovies,
    setShownSavedMovies,
  } = useMovies()

  const [isValid, setIsValid] = useState(true)

  useEffect(() => {
    getSavedMovies()
      .then((data) => {
        setSavedMovies(data.movies)
        setShownSavedMovies(data.movies)
      })
      .catch(() => console.error())
  }, [setSavedMovies, setShownSavedMovies])

  function handleSearchMovies(event) {
    event.preventDefault()
    const input = event.target.search.value
    const checkbox = event.target.checkbox

    setIsValid(event.target.checkValidity())
    if (event.target.search.value === '') return

    const result = filterSearchAll(savedMovies, input)
    const shorts = filterSearchShorts(result)

    console.log(result, shorts, checkbox.checked)

    if (checkbox.checked) {
      setShownSavedMovies(shorts)
    } else {
      setShownSavedMovies(result)
    }
  }

  return (
    <>
      <Header />
      <main className='main'>
        <section className='saved-movies' aria-label='Section saved movies'>
          <div className='saved-movies__container container'>
            <SearchForm handleSubmit={handleSearchMovies} isValid={isValid} />
            <MoviesCardList movies={shownSavedMovies} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
