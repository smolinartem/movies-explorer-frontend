import { useEffect, useState } from 'react'
import './Movies.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SearchForm from '../../components/SearchForm/SearchForm'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import Button from '../../components/Button/Button'

import { getAllMovies, getSavedMovies } from '../../utils/MoviesApi'
import { useMovies } from '../../hooks/useMovies'

function Movies() {
  const { allMovies, setAllMovies, shownMovies, setShownMovies, initialAmount, handleShowMore } =
    useMovies()

  const [isLoading, setIsLoading] = useState(false)
  const [hasLike, setHasLike] = useState([])

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

  const handleSearchMovie = (event) => {
    event.preventDefault()
    const inputValue = event.target.search.value

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

        setAllMovies(result)

        const moviesData = JSON.stringify({
          searchValue: inputValue,
          shortsChecked: true,
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
              /* pastSearch={data ? data.searchValue : ''} */
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
