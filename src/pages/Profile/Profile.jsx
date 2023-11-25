import './Profile.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { logout, updateUserInfo } from '../../utils/MainApi'

import { useForm } from '../../hooks/useForm'
import { useAuth } from '../../hooks/useAuth'

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'

function Profile() {
  const navigate = useNavigate()
  const { setIsLoggedIn, setCurrentUser, currentUser } = useAuth()
  const [isDisabled, setIsDisabled] = useState(true)

  const { values, errors, handleChange, isValid, resetForm } = useForm()

  useEffect(() => {
    resetForm({ name: currentUser.name, email: currentUser.email }, {}, false)
  }, [resetForm, currentUser])

  const handleEdit = () => {
    setIsDisabled(false)
  }

  const handleExit = () => {
    logout()
      .then(() => {
        setIsLoggedIn(false)
        setCurrentUser({})
        navigate('/', { replace: true })
      })
      .catch(() => console.error())
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    updateUserInfo(values)
      .then((data) => {
        setCurrentUser({ name: data.user.name, email: data.user.email })
        resetForm({ name: currentUser.name, email: currentUser.email }, {}, false)
      })
      .catch((err) => {
        resetForm({ name: currentUser.name, email: currentUser.email }, {}, false)
        console.error()
      })
      .finally(() => {
        setIsDisabled(true)
      })
  }

  return (
    <>
      <Header />
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
              <ErrorMessage />
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
                  title='Сохранить'
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
