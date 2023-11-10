import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import Logo from '../../components/Logo/Logo'

import { useForm } from '../../hooks/useForm'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

function Register() {
  const navigate = useNavigate()
  const { values, setValues, errors, handleChange, isValid, setIsValid } = useForm()

  const handleSubmit = (event) => {
    event.preventDefault()

    navigate('/signin', { replace: true, state: values.email })

    setValues({})
    setIsValid(false)
  }

  return (
    <section className='authorization' aria-label='Section register'>
      <div className='authorization__container container'>
        <Logo />
        <h2 className='authorization__title'>Добро пожаловать!</h2>
        <form className='authorization__form' name='register-form' onSubmit={handleSubmit} noValidate>
          <fieldset className='authorization__fieldset'>
            <label className='authorization__label' htmlFor='name'>
              Имя
            </label>
            <input
              value={values.name || ''}
              onChange={handleChange}
              className={`authorization__input ${errors.name ? 'authorization__input_invalid' : ''}`}
              autoComplete='off'
              placeholder='name'
              name='name'
              id='name'
              type='text'
              required
              minLength={2}
              maxLength={30}
            />
            <span className='authorization__error'>{errors.name || ''}</span>
          </fieldset>

          <fieldset className='authorization__fieldset'>
            <label className='authorization__label' htmlFor='email'>
              E-mail
            </label>
            <input
              value={values.email || ''}
              onChange={handleChange}
              className={`authorization__input ${errors.email ? 'authorization__input_invalid' : ''}`}
              autoComplete='off'
              placeholder='email'
              name='email'
              id='email'
              type='email'
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
              className={`authorization__input ${errors.password ? 'authorization__input_invalid' : ''}`}
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

          <button
            disabled={!isValid}
            className={
              !isValid
                ? 'authorization__submit authorization__submit_disabled'
                : 'authorization__submit hover'
            }
            type='submit'
          >
            Зарегистрироваться
          </button>
        </form>
        <div className='authorization__bottom'>
          <span className='authorization__question'>Уже зарегистрированы?</span>
          <Link className='authorization__link hover' to='/signin'>
            Войти
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Register
