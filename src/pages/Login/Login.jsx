import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import Logo from '../../components/Logo/Logo'
import { useAuth } from '../../hooks/useAuth'
import { useForm } from '../../hooks/useForm'

import { login } from '../../utils/MainApi'

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Button from '../../components/Button/Button'

function Login() {
  const navigate = useNavigate()
  const { setIsLoggedIn, setCurrentUser, errMessage, setErrMessage, isLoading, setIsLoading } =
    useAuth()
  const { values, errors, handleChange, isValid } = useForm()

  useEffect(() => {
    return () => {
      setErrMessage('') //очищаю стейт ошибок при размонтировании компонента
    }
  }, [setErrMessage])

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsLoading(true)
    login(values)
      .then((data) => {
        setIsLoggedIn(true)
        setCurrentUser({ name: data.user.name, email: data.user.email })

        window.localStorage.setItem('logged', true)
        navigate('/movies', { replace: true })
      })
      .catch((err) => {
        console.log(err)
        if (err === 401) {
          setErrMessage('Вы ввели неправильный логин или пароль.')
        } else if (err === 500) {
          setErrMessage('При авторизации пользователя произошла ошибка.')
        }
        console.error()
      })
      .finally(() => {
        setIsLoading(false)
      })
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
              pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
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

          <ErrorMessage message={errMessage} />

          <Button
            className={`authorization__submit ${isValid ? 'hover' : 'submit-disabled'}`}
            type='submit'
            title={isLoading ? 'Вход...' : 'Войти'}
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
