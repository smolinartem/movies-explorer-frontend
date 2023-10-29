import './Header.css'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

function Header() {
  return (
    <header className='header'>
      <div className='header__container container'>
        <Logo />
        <Navigation />
        <Link className='header__profile hover' to='/profile'>
          Аккаунт
        </Link>
        <nav className='header__auth'>
          <Link className='header__signup hover' to='/signup'>
            Регистрация
          </Link>
          <Link className='header__signin hover' to='/signin'>
            Войти
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
