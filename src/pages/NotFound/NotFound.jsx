import './NotFound.css'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <section className='not-found'>
      <div className='not-found__container container'>
        <h2 className='not-found__title'>404</h2>
        <span className='not-found__text'>Страница не найдена</span>
        <button className='not-found__back' onClick={handleBack}>
          Назад
        </button>
      </div>
    </section>
  )
}

export default NotFound
