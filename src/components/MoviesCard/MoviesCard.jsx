import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './MoviesCard.css'

function MoviesCard({ name, imageUrl }) {
  const location = useLocation()
  console.log(location)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(!saved)
  }
  return (
    <li className='card'>
      <div className='card__content'>
        {location.pathname === '/movies' && (
          <button onClick={handleSave} className={saved ? 'card__saved' : 'card__save'}>
            {saved ? '' : 'Сохранить'}
          </button>
        )}
        {location.pathname === '/saved-movies' && <button className='card__delete' />}
        <img className='card__img' src={`https://api.nomoreparties.co${imageUrl}`} alt={name} />
      </div>

      <div className='card__info'>
        <span className='card__name'>{name}</span>
        <span className='card__duration'>1ч 17м</span>
      </div>
    </li>
  )
}

export default MoviesCard
