import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Register.css'

import Logo from '../../components/Logo/Logo'
import { useAuth } from '../../hooks/useAuth'
import { useForm } from '../../hooks/useForm'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Button from '../../components/Button/Button'

import { register, login } from '../../utils/MainApi'

function Register() {
  const navigate = useNavigate()
  const { values, errors, handleChange, isValid } = useForm()
  const { setCurrentUser, setIsLoggedIn, errMessage, setErrMessage, isLoading, setIsLoading } =
    useAuth()

  useEffect(() => {
    return () => {
      setErrMessage('') //очищаю стейт ошибок при размонтировании компонента
    }
  }, [setErrMessage])

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    register(values)
      .then((data) => {
        login({ email: values.email, password: values.password })
          .then((data) => {
            setIsLoggedIn(true)
            setCurrentUser({ name: data.user.name, email: data.user.email })

            window.localStorage.setItem('logged', true)
            navigate('/movies', { replace: true })
          })
          .catch(() => console.error())
      })
      .catch((err) => {
        if (err === 409) {
          setErrMessage('Пользователь с таким email уже существует.')
        } else if (err === 500) {
          setErrMessage('При регистрации пользователя произошла ошибка.')
        }
        console.error()
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <section className='authorization' aria-label='Section register'>
      <div className='authorization__container container'>
        <Logo />
        <h2 className='authorization__title'>Добро пожаловать!</h2>
        <form
          className='authorization__form'
          name='register-form'
          onSubmit={handleSubmit}
          noValidate
        >
          <fieldset className='authorization__fieldset'>
            <label className='authorization__label' htmlFor='name'>
              Имя
            </label>
            <input
              value={values.name || ''}
              onChange={handleChange}
              className={`authorization__input ${
                errors.name ? 'authorization__input_invalid' : ''
              }`}
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
              className={`authorization__input ${
                errors.email ? 'authorization__input_invalid' : ''
              }`}
              autoComplete='off'
              placeholder='email'
              name='email'
              id='email'
              type='email'
              pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
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

          <ErrorMessage message={errMessage} />

          <Button
            className={`authorization__submit ${isValid ? 'hover' : 'submit-disabled'}`}
            type='submit'
            title={isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
            disabled={!isValid}
          />
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
