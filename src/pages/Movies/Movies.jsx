import { useEffect, useState } from 'react'
import './Movies.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SearchForm from '../../components/SearchForm/SearchForm'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import Button from '../../components/Button/Button'

import { getAllMovies, getSavedMovies } from '../../utils/MoviesApi'
import { useMovies } from '../../hooks/useMovies'
import { useWindowSize } from '../../hooks/useWindowSize'

function Movies() {
  const { width } = useWindowSize()
  const {
    setSearchMovies,
    setShortMovies,
    renderMovies,
    setRenderMovies,
    filterSearchAll,
    filterSearchShorts,
    setNotFound,
    setSavedMovies,
  } = useMovies()

  const [shownMovies, setShownMovies] = useState([]) // ? то что отражено на странице
  const [initialAmount, setInitialAmount] = useState(getInitial())
  const [additionAmount, setAdditionAmount] = useState(0) // ? сколько добавить фильмов
  const [isLoading, setIsLoading] = useState(false)
  const [isValid, setIsValid] = useState(true)

  const [hasLike, setHasLike] = useState([])
  useEffect(() => {
    getSavedMovies()
      .then((data) => {
        const likes = data.movies.map((movie) => {
          return movie.movieId
        })
        setHasLike(likes)
        setSavedMovies(data.movies)
      })
      .catch(() => console.error())
  }, [setSavedMovies])

  useEffect(() => {
    if (width > 989) {
      setAdditionAmount(3)
    } else if (width < 990) {
      setAdditionAmount(2)
    }
  }, [width])

  function getInitial() {
    if (window.innerWidth > 989) {
      return 12
    } else if (window.innerWidth > 689 && window.innerWidth < 990) {
      return 8
    } else if (window.innerWidth < 690) {
      return 5
    }
  }

  useEffect(() => {
    setShownMovies(renderMovies.slice(0, getInitial()))
  }, [renderMovies, setShownMovies])

  function handleSearchMovie(event) {
    event.preventDefault()
    const input = event.target.search.value
    const checkbox = event.target.checkbox

    setIsValid(event.target.checkValidity())
    if (event.target.search.value === '') return

    setIsLoading(true)
    getAllMovies()
      .then((movies) => {
        const result = filterSearchAll(movies, input)
        const shorts = filterSearchShorts(result)

        if (result.length === 0 || shorts.length === 0) {
          setNotFound('Ничего не найдено')
        }

        if (checkbox.checked) {
          setRenderMovies(shorts)
        } else {
          setRenderMovies(result)
        }
        setSearchMovies(result)
        setShortMovies(shorts)

        localStorage.setItem('movies', JSON.stringify(result))
        localStorage.setItem('checked', checkbox.checked)
        localStorage.setItem('input', JSON.stringify(input))

        /* const data = JSON.stringify({
          input: input,
          checked: checkbox.checked,
          movies: result,
        })
        localStorage.setItem('data', data) */
      })
      .catch(() => console.error())
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleShowMore() {
    setInitialAmount(initialAmount + additionAmount)
    let amount = initialAmount + additionAmount
    setShownMovies(renderMovies.slice(0, amount))
  }

  return (
    <>
      <Header />
      <main className='main'>
        <section className='movies' aria-label='Section movies'>
          <div className='movies__container container'>
            <SearchForm handleSubmit={handleSearchMovie} isValid={isValid} />

            <MoviesCardList isLoading={isLoading} movies={shownMovies} hasLike={hasLike} />

            {renderMovies.length === shownMovies.length ? null : (
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
