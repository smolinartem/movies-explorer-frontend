import './Profile.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate()
  const [name, setName] = useState('Артём')
  const [email, setEmail] = useState('artem@yandex.ru')
  const [isDisabled, setIsDisabled] = useState(true)

  const handleEdit = () => {
    setIsDisabled(!isDisabled)
  }

  const handleExit = () => {
    navigate('/signin', { replace: true })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsDisabled(!isDisabled)
    console.log(name, email)
  }

  return (
    <section className='profile'>
      <div className='profile__container container'>
        <h2 className='profile__title'>Привет, Артём!</h2>

        <form className='profile__form' onSubmit={handleSubmit}>
          <fieldset className='profile__field profile__field_name'>
            <label className='profile__label'>Имя</label>
            <input
              className='profile__input'
              autoComplete='off'
              disabled={isDisabled}
              type='text'
              name='name'
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </fieldset>
          <fieldset className='profile__field profile__field_email'>
            <label className='profile__label'>E-mail</label>
            <input
              className='profile__input'
              autoComplete='off'
              disabled={isDisabled}
              type='text'
              name='email'
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </fieldset>

          {isDisabled ? (
            <div className='profile__bottom'>
              <button className='profile__edit' type='button' onClick={handleEdit}>
                Редактировать
              </button>
              <button className='profile__exit' type='button' onClick={handleExit}>
                Выйти из аккаунта
              </button>
            </div>
          ) : (
            <button className='profile__submit' type='submit'>
              Сохранить
            </button>
          )}
        </form>
      </div>
    </section>
  )
}

export default Profile
