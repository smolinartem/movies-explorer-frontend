import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './MoviesCard.css'
import Button from '../Button/Button'

function toHoursAndMinutes(totalMinutes) {
  const minutes = totalMinutes % 60
  const hours = Math.floor(totalMinutes / 60)

  return `${hours > 0 ? `${hours}ч` : ''}${minutes > 0 ? ` ${minutes}м` : ''}`
}

function MoviesCard({ name, imageUrl, duration }) {
  const { pathname } = useLocation()
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(!saved)
  }
  return (
    <li className='movie'>
      <div className='movie__content'>
        {pathname === '/movies' && (
          <Button
            className={saved ? 'movie__saved' : 'movie__save'}
            type='button'
            title={saved ? '' : 'Сохранить'}
            onClick={handleSave}
          />
        )}
        {pathname === '/saved-movies' && <Button className='movie__delete' type='button' />}
        <img className='movie__img' src={`https://api.nomoreparties.co${imageUrl}`} alt={name} />
      </div>

      <div className='movie__info'>
        <span className='movie__name'>{name}</span>
        <span className='movie__duration'>{toHoursAndMinutes(duration)}</span>
      </div>
    </li>
  )
}

export default MoviesCard
