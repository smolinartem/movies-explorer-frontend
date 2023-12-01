import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import './MoviesCard.css'

import Button from '../Button/Button'

import { createMovie, deleteMovie } from '../../utils/MoviesApi'
import { useMovies } from '../../hooks/useMovies'

function toHoursAndMinutes(totalMinutes) {
  const minutes = totalMinutes % 60
  const hours = Math.floor(totalMinutes / 60)

  return `${hours > 0 ? `${hours}ч` : ''}${minutes > 0 ? ` ${minutes}м` : ''}`
}

function MoviesCard({ movie, isSaved }) {
  const { savedMovies, setSavedMovies, setShownSavedMovies } = useMovies()
  const { name = movie.nameRU, imageUrl = movie.image.url, duration } = movie
  const { pathname } = useLocation()
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setSaved(isSaved)
  }, [isSaved])

  const handleSave = () => {
    const savedMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: Number(movie.year),
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }

    if (saved) {
      const movieToDelete = savedMovies.find((m) => m.movieId === movie.id)
      console.log(savedMovies)

      deleteMovie(movieToDelete._id)
        .then(() => {
          setSaved(false)
        })
        .catch(() => console.error())
    } else if (!saved) {
      createMovie(savedMovie)
        .then((movie) => {
          setSavedMovies([...savedMovies, movie.movie])
          setSaved(true)
        })
        .catch(() => console.error())
    }
  }

  const handleDelete = () => {
    deleteMovie(movie._id)
      .then((message) => {
        const result = savedMovies.filter((m) => m._id !== movie._id)
        setSavedMovies(result)
        setShownSavedMovies(result)
        console.log(message)
      })
      .catch(() => console.error())
  }

  const handleTrailer = (url) => {
    window.open(url, '_blank', 'noreferrer')
  }

  const renderButtons = () => {
    if (pathname === '/movies') {
      return (
        <Button
          className={saved ? 'movie__saved' : 'movie__save'}
          type='button'
          title={saved ? '' : 'Сохранить'}
          onClick={handleSave}
        />
      )
    } else if (pathname === '/saved-movies') {
      return <Button className='movie__delete' type='button' onClick={handleDelete} />
    }
  }

  const renderImage = () => {
    if (pathname === '/movies') {
      return (
        <img
          className='movie__img'
          src={`https://api.nomoreparties.co${imageUrl}`}
          alt={name}
          onClick={() => handleTrailer(`${movie.trailerLink}`)}
        />
      )
    } else if (pathname === '/saved-movies') {
      return (
        <img
          className='movie__img'
          src={movie.image}
          alt={name}
          onClick={() => handleTrailer(`${movie.trailerLink}`)}
        />
      )
    }
  }

  return (
    <li className='movie'>
      <div className='movie__content'>
        {renderButtons()}
        {renderImage()}
      </div>

      <div className='movie__info'>
        <span className='movie__name'>{name}</span>
        <span className='movie__duration'>{toHoursAndMinutes(duration)}</span>
      </div>
    </li>
  )
}

export default MoviesCard
