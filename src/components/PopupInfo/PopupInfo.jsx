import { useEffect } from 'react'
import './PopupInfo.css'
import successImg from '../../images/auth-success.svg'

function PopupInfo({ isOpen, handleClose }) {
  useEffect(() => {
    if (!isOpen) return

    const handleOverlay = (event) => {
      if (event.target.classList.contains('popup_opened')) {
        handleClose()
      }
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleOverlay)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleOverlay)
    }
  }, [isOpen, handleClose])

  return (
    <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button
          onClick={handleClose}
          className='popup__close hover'
          type='button'
          aria-label='Кнопка закрыть.'
        />
        <img className='popup__img' src={successImg} alt='Зелёная галочка.' />
        <h2 className='popup__title'>Данные успешно изменены</h2>
      </div>
    </section>
  )
}

export default PopupInfo
