import { Link } from 'react-router-dom'
import './Register.css'
import Logo from '../../components/Logo/Logo'
import { useState } from 'react'

function Register() {
  const [error, setError] = useState('')
  const handleSubmit = (event) => {
    event.prevent.default()
  }

  const handleInput = (event) => {
    setError(event.target.validationMessage)
  }
  return (
    <section className='register'>
      <div className='register__container container'>
        <Logo />
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form' name='register-form' onSubmit={handleSubmit}>
          <fieldset className='register__fieldset'>
            <label className='register__label' htmlFor='name'>
              Имя
            </label>
            <input
              onChange={handleInput}
              className='register__input'
              autoComplete='off'
              name='name'
              id='name'
              type='text'
              required
              minLength={2}
              maxLength={30}
            ></input>
            <span>{error}</span>
          </fieldset>

          <fieldset className='register__fieldset'>
            <label className='register__label' htmlFor='email'>
              E-mail
            </label>
            <input
              className='register__input'
              autoComplete='off'
              name='email'
              id='email'
              type='email'
              required
            ></input>
          </fieldset>

          <fieldset className='register__fieldset'>
            <label className='register__label' htmlFor='password'>
              Пароль
            </label>
            <input
              className='register__input'
              autoComplete='off'
              name='password'
              id='password'
              type='password'
              required
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
