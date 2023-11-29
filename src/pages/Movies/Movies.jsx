import { useEffect, useState } from 'react'
import './Movies.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SearchForm from '../../components/SearchForm/SearchForm'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import Button from '../../components/Button/Button'

import { getAllMovies, getSavedMovies } from '../../utils/MoviesApi'
import { useMovies } from '../../hooks/useMovies'
import { useMMovies } from '../../hooks/useMMovies'

function Movies() {
  const { initialAmount, handleShowMore } = useMovies()

  const { allMovies, setAllMovies, shownMovies, setShownMovies, shorts, setShorts } = useMMovies()

  const [isLoading, setIsLoading] = useState(false)
  const [hasLike, setHasLike] = useState([])
  const [pastSearch, setPastSearch] = useState('')
  const [shortsChecked, setShortsChecked] = useState(false)

  useEffect(() => {
    getSavedMovies()
      .then((data) => {
        const likes = data.movies.map((movie) => {
          return movie.movieId
        })
        setHasLike(likes)
      })
      .catch(() => console.error())
  }, [])

  useEffect(() => {
    setShownMovies(allMovies.slice(0, initialAmount))
  }, [allMovies, initialAmount, setShownMovies])

  useEffect(() => {
    setPastSearch(JSON.parse(localStorage.getItem('moviesData')).searchValue)
    setShortsChecked(JSON.parse(localStorage.getItem('moviesData')).shortsChecked)
  }, [])

  const handleSearchMovie = (event) => {
    event.preventDefault()
    const inputValue = event.target.search.value
    const checkBox = event.target.checkbox

    setIsLoading(true)
    if (!inputValue) return setIsLoading(false)
    getAllMovies()
      .then((movies) => {
        const result = movies.filter((movie) => {
          return (
            movie.nameRU.toLowerCase().includes(inputValue) ||
            movie.nameEN.toLowerCase().includes(inputValue)
          )
        })

        if (result.length === 0) return setIsLoading(false)

        if (checkBox.checked) {
          const shortMovies = result.filter((m) => {
            return m.duration < 40
          })
          setShorts(shortMovies)
          setAllMovies(shorts)
        } else {
          setAllMovies(result)
        }

        const moviesData = JSON.stringify({
          searchValue: inputValue,
          shortsChecked: checkBox.checked,
          moviesList: result,
        })

        localStorage.setItem('moviesData', moviesData)
      })
      .catch(() => console.error())
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <Header />
      <main className='main'>
        <section className='movies' aria-label='Section movies'>
          <div className='movies__container container'>
            <SearchForm
              handleSubmit={handleSearchMovie}
              pastSearch={pastSearch}
              shortsChecked={shortsChecked}
            />

            <MoviesCardList isLoading={isLoading} movies={shownMovies} hasLike={hasLike} />

            {allMovies.length === shownMovies.length ? null : (
              <Button onClick={handleShowMore} className='movies__more hover' title='Ещё' />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies
