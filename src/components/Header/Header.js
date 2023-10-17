import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation'

function Header() {
  return (
    <header className='header'>
      <Link to='/' className='header__link'>
        <img className='header__logo' src={logo} alt='Website logo' />
      </Link>
      <Navigation />
      <Link className='header__profile' to='/profile'>
        Аккаунт
      </Link>
      {/*       <nav className='header__auth'>
        <Link className='header__signup' to='/signup'>
          Регистрация
        </Link>
        <Link className='header__signin' to='/signin'>
          Войти
        </Link>
      </nav> */}
    </header>
  )
}

export default Header
