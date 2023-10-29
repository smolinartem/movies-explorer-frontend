import { Link } from 'react-router-dom'
import './Register.css'
import Logo from '../Logo/Logo'

function Register() {
  return (
    <section className='register'>
      <div className='register__container container'>
        <Logo />
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form' name='register-form'>
          <fieldset className='register__fieldset'>
            <label className='register__label' htmlFor='name'>
              Имя
            </label>
            <input
              className='register__input'
              autoComplete='off'
              type='text'
              name='name'
              id='name'
            ></input>
          </fieldset>

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
            Зарегистрироваться
          </button>
        </form>
        <div className='register__bottom'>
          <span className='register__question'>Уже зарегистрированы?</span>
          <Link className='register__link hover' to='/signin'>
            Войти
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Register
