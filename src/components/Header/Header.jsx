import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

const links = {
  active: 'header__link hover header__link_active',
  inactive: 'header__link hover',
}

function Header() {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  return pathname === '/signup' || pathname === '/signin' ? null : (
    <header className='header'>
      <div className='header__container container'>
        <Logo />
        <Navigation />
        <Link className='header__profile hover' to='/profile'>
          Аккаунт
        </Link>
        <button
          className={`header__burger ${isOpen ? 'header__burger_opened' : 'header__burger_closed'}`}
          onClick={() => setIsOpen(!isOpen)}
        />
        {/* <nav className='header__auth'>
          <Link className='header__signup hover' to='/signup'>
            Регистрация
          </Link>
          <Link className='header__signin hover' to='/signin'>
            Войти
          </Link>
        </nav> */}

        <nav className={`header__menu ${isOpen ? 'header__menu_opened' : 'header__menu_closed'}`}>
          <NavLink className={({ isActive }) => (isActive ? links.active : links.inactive)} to='/'>
            Главная
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? links.active : links.inactive)} to='/movies'>
            Фильмы
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? links.active : links.inactive)}
            to='/saved-movies'
          >
            Сохранённые фильмы
          </NavLink>

          <Link className='header__profile-link hover' to='/profile'>
            Аккаунт
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
