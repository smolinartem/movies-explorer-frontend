import './AboutMe.css'
import avatar from '../../../images/avatar.jpg'

function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__container container'>
        <h2 className='about-me__title section-title'>Студент</h2>
        <div className='about-me__info'>
          <div className='about-me__text'>
            <p className='about-me__name'>Артём</p>
            <p className='about-me__job'>Фронтенд-разработчик, 29&nbsp;лет</p>
            <p className='about-me__desc'>
              Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ.
              У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь
              бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ
              Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься
              фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
            <a
              className='about-me__link hover'
              href='https://github.com/smolinartem'
              target='_blank'
              rel='noreferrer'
              alt='github link'
            >
              Github
            </a>
          </div>
          <div className='about-me__avatar'>
            <img className='about-me__img' src={avatar} alt='avatar' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
