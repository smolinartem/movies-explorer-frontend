import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import './Header.css'

import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import AccountLink from '../AccountLink/AccountLink'
import SideBar from '../SideBar/SideBar'
import Button from '../Button/Button'

import { useAuth } from '../../hooks/useAuth'
import { HEADER_NAV_CONFIG } from '../../utils/config'
import AuthNav from '../AuthNav/AuthNav'

function Header() {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const { isLoggedIn } = useAuth()

  const handleBurger = () => {
    setIsOpen(!isOpen)
    document.body.classList.toggle('no-scroll')
  }

  const headerNotAuthorized = (
    <>
      <Logo className='header__logo' />
      <AuthNav className='header__auth' />
    </>
  )

  const headerAuthorized = (
    <>
      <Logo className='header__logo' />
      <Navigation links={HEADER_NAV_CONFIG} className='header__nav' />
      <AccountLink className='header__account' />
      <SideBar className='header__sidebar' isOpen={isOpen} handleBurger={handleBurger} />
      <Button
        className={`header__burger ${isOpen ? 'header__burger_opened' : 'header__burger_closed'}`}
        onClick={handleBurger}
        type='button'
      />
    </>
  )

  const headerComponent = (
    <header className='header'>
      <div className='header__container container'>
        {isLoggedIn ? headerAuthorized : headerNotAuthorized}
      </div>
    </header>
  )

  switch (pathname) {
    case '/signup':
      return null

    case '/signin':
      return null

    default:
      return headerComponent
  }
}

export default Header
