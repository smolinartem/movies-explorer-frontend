import { useState, useEffect } from 'react'
import { useWindowSize } from './useWindowSize'

export function useMovies() {
  const { width } = useWindowSize()
  const [allMovies, setAllMovies] = useState(getLocalStorageMovieList())
  const [shownMovies, setShownMovies] = useState([])

  const [initialAmount, setInitialAmount] = useState(getInitial())
  const [additionAmount, setAdditionAmount] = useState(0)

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

  useEffect(() => {
    if (width > 989) {
      setAdditionAmount(3)
    } else if (width < 990) {
      setAdditionAmount(2)
    }
  }, [width])

  const handleShowMore = () => {
    setInitialAmount(initialAmount + additionAmount)
    let amount = initialAmount + additionAmount
    setShownMovies(allMovies.slice(0, amount))
  }

  return {
    allMovies,
    setAllMovies,
    shownMovies,
    setShownMovies,
    initialAmount,
    handleShowMore,
  }
}
