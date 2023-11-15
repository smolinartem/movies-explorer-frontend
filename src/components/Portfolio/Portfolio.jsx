import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <a
              className='portfolio__link hover'
              href='https://github.com/smolinartem/how-to-learn'
              target='_blank'
              rel='noreferrer'
            >
              <span className='portfolio__site'>Статичный сайт</span>
              <span className='portfolio__arrow'>&#8599;</span>
            </a>
          </li>
          <li className='portfolio__item'>
            <a
              className='portfolio__link hover'
              href='https://github.com/smolinartem/russian-travel'
              target='_blank'
              rel='noreferrer'
            >
              <span className='portfolio__site'>Адаптивный сайт</span>
              <span className='portfolio__arrow'>&#8599;</span>
            </a>
          </li>
          <li className='portfolio__item'>
            <a
              className='portfolio__link hover'
              href='https://github.com/smolinartem/mesto-react'
              target='_blank'
              rel='noreferrer'
            >
              <span className='portfolio__site'>Одностраничное приложение</span>
              <span className='portfolio__arrow'>&#8599;</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
