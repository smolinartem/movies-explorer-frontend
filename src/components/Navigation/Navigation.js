import './Navigation.css'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='nav'>
      <NavLink
        className={({ isActive }) => (isActive ? 'nav__link hover nav__link_active' : 'nav__link hover')}
        to='/movies'
      >
        Фильмы
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'nav__link hover nav__link_active' : 'nav__link hover')}
        to='/saved-movies'
      >
        Сохранённые фильмы
      </NavLink>
    </nav>
  )
}

export default Navigation
