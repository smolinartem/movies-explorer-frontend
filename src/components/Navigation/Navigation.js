import './Navigation.css'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='nav'>
      <Link className='nav__link hover' to='/movies'>
        Фильмы
      </Link>
      <Link className='nav__link hover' to='/saved-movies'>
        Сохранённые фильмы
      </Link>
    </nav>
  )
}

export default Navigation
