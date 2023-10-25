import './MoviesCard.css'

function MoviesCard({ name, imageUrl }) {
  return (
    <li className='card'>
      <div className='card__content'>
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
