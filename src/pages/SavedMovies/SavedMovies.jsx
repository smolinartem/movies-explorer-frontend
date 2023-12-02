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
    setShortSavedMovies,
    setSearchSavedMovies,
    renderSavedMovies,
    setRenderSavedMovies,
  } = useMovies()

  const [isValid, setIsValid] = useState(true)

  useEffect(() => {
    getSavedMovies()
      .then((data) => {
        const result = data.movies
        const shorts = data.movies?.filter((m) => {
          return m.duration < 40
        })
        setSavedMovies(result)
        setSearchSavedMovies(result)
        setShortSavedMovies(shorts)
        setRenderSavedMovies(result)
      })
      .catch(() => console.error())
  }, [setSavedMovies, setRenderSavedMovies, setSearchSavedMovies, setShortSavedMovies])

  useEffect(() => {
    setShownSavedMovies(renderSavedMovies)
  }, [setShownSavedMovies, renderSavedMovies])

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
      setRenderSavedMovies(shorts)
    } else {
      setRenderSavedMovies(result)
    }

    setSearchSavedMovies(result)
    setShortSavedMovies(shorts)
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
