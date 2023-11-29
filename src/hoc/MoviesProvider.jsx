import { createContext, useState } from 'react'

export const MoviesContext = createContext()

function MoviesProvider({ children }) {
  const [allMovies, setAllMovies] = useState(getLocalStorageMovieList())
  const [shownMovies, setShownMovies] = useState([])
  const [savedMovies, setSavedMovies] = useState([])
  const [shorts, setShorts] = useState([])
  const [initialAmount, setInitialAmount] = useState(getInitial())

  function getInitial() {
    if (window.innerWidth > 989) {
      return 12
    } else if (window.innerWidth > 689 && window.innerWidth < 990) {
      return 8
    } else if (window.innerWidth < 690) {
      return 5
    }
  }

  function getLocalStorageMovieList() {
    return JSON.parse(localStorage.getItem('moviesData')).moviesList
  }

  const value = {
    allMovies,
    setAllMovies,
    shownMovies,
    setShownMovies,
    savedMovies,
    setSavedMovies,
    initialAmount,
    setInitialAmount,
    shorts,
    setShorts,
  }

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}

export default MoviesProvider
