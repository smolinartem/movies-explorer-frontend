import './Profile.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useForm } from '../../hooks/useForm'

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

function Profile() {
  const navigate = useNavigate()

  const { values, errors, handleChange, isValid, resetForm } = useForm()
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    resetForm({ name: 'Artem', email: 'artem@yandex.ru' }, {}, true)
  }, [resetForm])

  const handleEdit = () => {
    setIsDisabled(false)
  }

  const handleExit = () => {
    navigate('/', { replace: true, state: false })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsDisabled(true)
  }

  return (
    <section className='profile' aria-label='Section profile'>
      <div className='profile__container container'>
        <h2 className='profile__title'>Привет, Артём!</h2>

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
                <button className='profile__edit' type='button' onClick={handleEdit}>
                  Редактировать
                </button>
                <button className='profile__exit' type='button' onClick={handleExit}>
                  Выйти из аккаунта
                </button>
              </>
            ) : (
              <button
                disabled={!isValid}
                className={`profile__submit ${isValid ? 'hover' : 'profile__submit_disabled'}`}
                type='submit'
              >
                Сохранить
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Profile
