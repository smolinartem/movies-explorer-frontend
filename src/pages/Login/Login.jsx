import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import Logo from '../../components/Logo/Logo'
import { useAuth } from '../../hooks/useAuth'
import { useForm } from '../../hooks/useForm'

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Button from '../../components/Button/Button'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const { values, errors, handleChange, isValid, setValues, setIsValid } = useForm()

  const handleSubmit = (event) => {
    event.preventDefault()

    login()
    navigate('/', { replace: true })

    setValues({})
    setIsValid(false)
  }

  return (
    <section className='authorization' aria-label='Section login'>
      <div className='authorization__container container'>
        <Logo />
        <h2 className='authorization__title'>Рады видеть!</h2>
        <form className='authorization__form' name='login-form' onSubmit={handleSubmit} noValidate>
          <fieldset className='authorization__fieldset'>
            <label className='authorization__label' htmlFor='email'>
              E-mail
            </label>
            <input
              value={values.email || ''}
              onChange={handleChange}
              className={`authorization__input ${
                errors.email ? 'authorization__input_invalid' : ''
              }`}
              autoComplete='off'
              placeholder='email'
              type='email'
              name='email'
              id='email'
              required
            />
            <span className='authorization__error'>{errors.email || ''}</span>
          </fieldset>

          <fieldset className='authorization__fieldset'>
            <label className='authorization__label' htmlFor='password'>
              Пароль
            </label>
            <input
              value={values.password || ''}
              onChange={handleChange}
              className={`authorization__input ${
                errors.password ? 'authorization__input_invalid' : ''
              }`}
              autoComplete='off'
              placeholder='password'
              name='password'
              id='password'
              type='password'
              required
            />
            <span className='authorization__error'>{errors.password || ''}</span>
          </fieldset>

          <ErrorMessage />

          <Button
            className={`authorization__submit ${isValid ? 'hover' : 'submit-disabled'}`}
            type='submit'
            title='Войти'
            disabled={!isValid}
          />
        </form>
        <div className='authorization__bottom'>
          <span className='authorization__question'>Ещё не зарегистрированы?</span>
          <Link className='authorization__link hover' to='/signup'>
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Login
