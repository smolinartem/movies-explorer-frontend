import './AuthNav.css'

import { Link } from 'react-router-dom'

function AuthNav({ className }) {
  return (
    <nav className={`auth-nav ${className || ''}`}>
      <Link className='auth-nav__signup hover' to='/signup'>
        Регистрация
      </Link>
      <Link className='auth-nav__signin hover' to='/signin'>
        Войти
      </Link>
    </nav>
  )
}

export default AuthNav
