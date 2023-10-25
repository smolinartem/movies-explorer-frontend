import './Profile.css'
import { useState } from 'react'

function Profile() {
  const [name, setName] = useState('Артём')
  const [email, setEmail] = useState('artem@yandex.ru')
  const [isDisabled, setIsDisabled] = useState(true)

  const handleEdit = () => {
    setIsDisabled(!isDisabled)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
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
          <button
            className='profile__edit'
            type={isDisabled ? 'submit' : 'button'}
            onClick={handleEdit}
          >
            {isDisabled ? 'Редактировать' : 'Сохранить'}
          </button>
        </form>

        <button className='profile__exit' type='button'>
          Выйти из аккаунта
        </button>
      </div>
    </section>
  )
}

export default Profile
