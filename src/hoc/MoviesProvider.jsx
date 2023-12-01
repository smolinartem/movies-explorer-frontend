import { createContext, useState } from 'react'

export const MoviesContext = createContext()

function MoviesProvider({ children }) {
  const [savedMovies, setSavedMovies] = useState([])
  const [shownSavedMovies, setShownSavedMovies] = useState([])

  const [searchMovies, setSearchMovies] = useState(getSearchMoviesFromLS() || []) // ? отфильтрованный список фильмов
  const [shortMovies, setShortMovies] = useState(getShortMoviesFromLS() || []) // ? только короткие фильмы
  const [renderMovies, setRenderMovies] = useState(getRenderMovies() || []) // ? либо searchMovies, либо shortMovies

  const [checked, setChecked] = useState(false)
  const [notFound, setNotFound] = useState(getNotFound())

  function getSearchMoviesFromLS() {
    return JSON.parse(localStorage.getItem('data'))?.movies
  }
  function getShortMoviesFromLS() {
    return filterSearchShorts(JSON.parse(localStorage.getItem('data'))?.movies)
  }
  function getRenderMovies() {
    return JSON.parse(localStorage.getItem('data'))?.checked
      ? filterSearchShorts(JSON.parse(localStorage.getItem('data'))?.movies)
      : JSON.parse(localStorage.getItem('data'))?.movies
  }
  function getNotFound() {
    if (JSON.parse(localStorage.getItem('data'))?.movies.length === 0) {
      return ''
    }
  }

  function filterSearchAll(list, value) {
    return list?.filter((m) => {
      return m.nameRU.toLowerCase().includes(value) || m.nameEN.toLowerCase().includes(value)
    })
  }

  function filterSearchShorts(list) {
    return list?.filter((m) => {
      return m.duration < 40
    })
  }

  const value = {
    searchMovies,
    setSearchMovies,
    shortMovies,
    setShortMovies,
    renderMovies,
    setRenderMovies,
    savedMovies,
    setSavedMovies,
    checked,
    setChecked,
    filterSearchAll,
    filterSearchShorts,
    notFound,
    setNotFound,
    shownSavedMovies,
    setShownSavedMovies,
  }

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}

export default MoviesProvider
