import { useContext } from 'react'
import { MoviesContext } from '../hoc/MoviesProvider'

export const useMMovies = () => {
  return useContext(MoviesContext)
}
