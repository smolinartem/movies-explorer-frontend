import { Link } from 'react-router-dom'
import './Login.css'
import Logo from '../Logo/Logo'

function Login() {
  return (
    <section className='register'>
      <div className='register__container container'>
        <Logo />
        <h2 className='register__title'>Рады видеть!</h2>
        <form className='register__form' name='register-form'>
          <fieldset className='register__fieldset'>
            <label className='register__label' htmlFor='email'>
              E-mail
            </label>
            <input
              className='register__input'
              autoComplete='off'
              type='email'
              name='email'
              id='email'
            ></input>
          </fieldset>

          <fieldset className='register__fieldset'>
            <label className='register__label' htmlFor='password'>
              Пароль
            </label>
            <input
              className='register__input'
              autoComplete='off'
              type='password'
              name='password'
              id='password'
            ></input>
          </fieldset>

          <button className='register__submit' type='submit'>
            Войти
          </button>
        </form>
        <div className='register__bottom'>
          <span className='register__question'>Ещё не зарегистрированы?</span>
          <Link className='register__link hover' to='/signup'>
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Login
