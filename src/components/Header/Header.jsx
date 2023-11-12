import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './Header.css'
import Logo from '../Logo/Logo'
import AccountLink from '../AccountLink/AccountLink'
import SideBar from '../SideBar/SideBar'
import Navigation from '../Navigation/Navigation'
import { HEADER_NAV_CONFIG } from '../../utils/config'

function Header() {
  const { pathname, state } = useLocation()

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsLoggedIn(state)
  }, [state])

  const handleBurger = () => {
    setIsOpen(!isOpen)
    document.body.classList.toggle('no-scroll')
  }

  const headerNotAuthorized = (
    <>
      <Logo className='header__logo' />
      <nav className='header__auth'>
        <Link className='header__signup hover' to='/signup'>
          Регистрация
        </Link>
        <Link className='header__signin hover' to='/signin'>
          Войти
        </Link>
      </nav>
    </>
  )

  const headerAuthorized = (
    <>
      <Logo className='header__logo' />
      <Navigation links={HEADER_NAV_CONFIG} className='header__nav' />
      <AccountLink className='header__account' />
      <SideBar className='header__sidebar' isOpen={isOpen} handleBurger={handleBurger} />
      <button
        className={`header__burger ${isOpen ? 'header__burger_opened' : 'header__burger_closed'}`}
        onClick={handleBurger}
      />
    </>
  )

  return pathname === '/signup' || pathname === '/signin' ? null : (
    <header className='header'>
      <div className='header__container container'>{isLoggedIn ? headerAuthorized : headerNotAuthorized}</div>
    </header>
  )
}

export default Header
