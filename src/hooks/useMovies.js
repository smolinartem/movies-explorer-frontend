import { useContext } from 'react'
import { MoviesContext } from '../hoc/MoviesProvider'

export const useMovies = () => {
  return useContext(MoviesContext)
}
