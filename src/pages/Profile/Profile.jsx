import './Profile.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { logout, updateUserInfo } from '../../utils/MainApi'

import { useForm } from '../../hooks/useForm'
import { useAuth } from '../../hooks/useAuth'

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import PopupInfo from '../../components/PopupInfo/PopupInfo'

function Profile() {
  const navigate = useNavigate()
  const {
    setIsLoggedIn,
    setCurrentUser,
    currentUser,
    errMessage,
    setErrMessage,
    isLoading,
    setIsLoading,
  } = useAuth()
  const [isDisabled, setIsDisabled] = useState(true)
  const [popupIsOpen, setPopupIsOpen] = useState(false)

  const { values, errors, handleChange, isValid, resetForm, setIsValid } = useForm()

  useEffect(() => {
    return () => {
      setErrMessage('') //очищаю стейт ошибок при размонтировании компонента
    }
  }, [setErrMessage])

  useEffect(() => {
    resetForm({ name: currentUser.name, email: currentUser.email }, {}, false)
  }, [resetForm, currentUser])

  useEffect(() => {
    if (values.email === currentUser.email && values.name === currentUser.name) {
      setIsValid(false)
    }
  }, [values, currentUser, setIsValid])

  const handleEdit = () => {
    setIsDisabled(false)
  }

  const handlePopupClose = () => {
    setPopupIsOpen(false)
  }

  const handleExit = () => {
    logout()
      .then(() => {
        setIsLoggedIn(false)
        setCurrentUser({})

        window.localStorage.removeItem('logged')
        navigate('/', { replace: true })
      })
      .catch(() => console.error())
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setIsLoading(true)
    updateUserInfo(values)
      .then((data) => {
        setCurrentUser({ name: data.user.name, email: data.user.email })
        resetForm({ name: currentUser.name, email: currentUser.email }, {}, false)
        setErrMessage('')
        setPopupIsOpen(true)
      })
      .catch((err) => {
        if (err === 409) {
          setErrMessage('Пользователь с таким email уже существует.')
        } else if (err === 500) {
          setErrMessage('При обновлении профиля произошла ошибка.')
        }

        resetForm({ name: currentUser.name, email: currentUser.email }, {}, false)
        console.error()
      })
      .finally(() => {
        setIsDisabled(true)
        setIsLoading(false)
      })
  }

  return (
    <>
      <Header />
      <PopupInfo isOpen={popupIsOpen} handleClose={handlePopupClose} />
      <section className='profile' aria-label='Section profile'>
        <div className='profile__container container'>
          <h2 className='profile__title'>Привет, {currentUser.name}!</h2>

          <form className='profile__form' onSubmit={handleSubmit} noValidate>
            <span className='profile__error'>{errors.name || ''}</span>
            <fieldset className='profile__field profile__field_name'>
              <label className='profile__label'>Имя</label>
              <input
                className={`profile__input ${errors.name ? 'profile__input_invalid' : ''}`}
                autoComplete='off'
                disabled={isDisabled}
                placeholder='Имя'
                type='text'
                name='name'
                id='name'
                required
                minLength={2}
                maxLength={30}
                value={values.name || ''}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset className='profile__field profile__field_email'>
              <label className='profile__label'>E-mail</label>
              <input
                className={`profile__input ${errors.email ? 'profile__input_invalid' : ''}`}
                autoComplete='off'
                disabled={isDisabled}
                placeholder='email'
                type='email'
                name='email'
                id='email'
                required
                value={values.email || ''}
                onChange={handleChange}
              />
            </fieldset>
            <span className='profile__error'>{errors.email || ''}</span>

            <div className='profile__bottom'>
              <ErrorMessage message={errMessage} />
              {isDisabled ? (
                <>
                  <Button
                    className='profile__edit'
                    title='Редактировать'
                    type='button'
                    onClick={handleEdit}
                  />
                  <Button
                    className='profile__exit'
                    title='Выйти из аккаунта'
                    type='button'
                    onClick={handleExit}
                  />
                </>
              ) : (
                <Button
                  className={`profile__submit ${isValid ? 'hover' : 'submit-disabled'}`}
                  title={isLoading ? 'Сохранение...' : 'Сохранить'}
                  type='submit'
                  disabled={!isValid}
                />
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Profile
