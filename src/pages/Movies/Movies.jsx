import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import './Movies.css'

import SearchForm from '../../components/SearchForm/SearchForm'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import Button from '../../components/Button/Button'

import { getAllMovies } from '../../utils/MoviesApi'
import { useMovies } from '../../hooks/useMovies'

export const moviesLoader = () => {
  const dataFromLocalStorage = localStorage.getItem('moviesData')
  return JSON.parse(dataFromLocalStorage)
}

function Movies() {
  const data = useLoaderData()
  const { allMovies, setAllMovies, shownMovies, setShownMovies, initialAmount, handleShowMore } =
    useMovies()

  const [isValid, setIsValid] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (data) {
      setAllMovies(data.moviesList)
      setShownMovies(allMovies.slice(0, initialAmount))
    }
  }, [data, allMovies, initialAmount, setAllMovies, setShownMovies])

  /* const handleSearchMovie = async (event) => {
    event.preventDefault()
    setIsValid(event.target.checkValidity())

    try {
      setIsLoading(true)
      const inputValue = event.target.search.value

      if (!inputValue) return
      const movies = await getAllMovies()
      const result = movies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(inputValue) ||
          movie.nameEN.toLowerCase().includes(inputValue)
        )
      })

      setMovies(result)

      if (result.length === 0) return
      const moviesData = JSON.stringify({
        searchValue: inputValue,
        shortsChecked: true,
        moviesList: result,
      })

      localStorage.setItem('moviesData', moviesData)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  } */

  return (
    <section className='movies' aria-label='Section movies'>
      <div className='movies__container container'>
        <SearchForm
          /*           handleSubmit={handleSearchMovie} */
          isValid={isValid}
          pastSearch={data ? data.searchValue : ''}
        />
        <MoviesCardList isLoading={isLoading} movies={shownMovies} />
        <Button onClick={handleShowMore} className='movies__more hover' title='Ещё' />
      </div>
    </section>
  )
}

export default Movies
