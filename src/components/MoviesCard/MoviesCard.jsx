import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './MoviesCard.css'

function MoviesCard({ name, imageUrl, duration }) {
  const location = useLocation()
  const [saved, setSaved] = useState(false)

  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60
    const hours = Math.floor(totalMinutes / 60)

    return `${hours > 0 ? `${hours}ч` : ''}${minutes > 0 ? ` ${minutes}м` : ''}`
  }

  const handleSave = () => {
    setSaved(!saved)
  }
  return (
    <li className='movie'>
      <div className='movie__content'>
        {location.pathname === '/movies' && (
          <button onClick={handleSave} className={saved ? 'movie__saved' : 'movie__save'}>
            {saved ? '' : 'Сохранить'}
          </button>
        )}
        {location.pathname === '/saved-movies' && <button className='movie__delete' />}
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
