import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h3 className='footer__title'>Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</h3>
        <div className='footer__info'>
          <span className='footer__year'>&#169; 2023</span>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a
                className='footer__link'
                href='https://practicum.yandex.ru/'
                target='_blank'
                rel='noreferrer'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__item'>
              <a
                className='footer__link'
                href='https://github.com/smolinartem/movies-explorer-frontend'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
