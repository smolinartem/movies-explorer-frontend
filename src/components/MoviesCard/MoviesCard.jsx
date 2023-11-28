import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './MoviesCard.css'
import Button from '../Button/Button'

import { createMovie, deleteMovie } from '../../utils/MoviesApi'

function toHoursAndMinutes(totalMinutes) {
  const minutes = totalMinutes % 60
  const hours = Math.floor(totalMinutes / 60)

  return `${hours > 0 ? `${hours}ч` : ''}${minutes > 0 ? ` ${minutes}м` : ''}`
}

function MoviesCard({ movie, onDelete, isSaved }) {
  const { name = movie.nameRU, imageUrl = movie.image.url, duration } = movie
  const { pathname } = useLocation()
  const [saved, setSaved] = useState(isSaved)

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

    console.log(isSaved)
    if (isSaved) {
      console.log(movie)
      deleteMovie(movie)
        .then((message) => {
          console.log(message)
          isSaved = !isSaved
        })
        .catch(() => console.error())
    } else if (!isSaved) {
      createMovie(savedMovie)
        .then((movie) => {
          console.log(movie)
        })
        .catch(() => console.error())
    }

    setSaved(!saved)
  }

  const handleDelete = () => {
    deleteMovie(movie._id)
      .then((message) => {
        onDelete(movie._id)
      })
      .catch(() => console.error())
  }

  const renderButtons = () => {
    if (pathname === '/movies') {
      return (
        <Button
          className={isSaved ? 'movie__saved' : 'movie__save'}
          type='button'
          title={isSaved ? '' : 'Сохранить'}
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
        <img className='movie__img' src={`https://api.nomoreparties.co${imageUrl}`} alt={name} />
      )
    } else if (pathname === '/saved-movies') {
      return <img className='movie__img' src={movie.image} alt={name} />
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
