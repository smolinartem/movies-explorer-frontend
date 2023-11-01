import './Techs.css'

function Techs() {
  return (
    <section className='tech' id='tech'>
      <div className='tech__container container'>
        <h2 className='tech__title section-title'>Технологии</h2>
        <div className='tech__info'>
          <p className='tech__subtitle'>7 технологий</p>
          <p className='tech__desc'>
            На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном
            проекте.
          </p>
          <ul className='tech__list'>
            <li className='tech__item'>HTML</li>
            <li className='tech__item'>CSS</li>
            <li className='tech__item'>JS</li>
            <li className='tech__item'>React</li>
            <li className='tech__item'>Git</li>
            <li className='tech__item'>Express.js</li>
            <li className='tech__item'>mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Techs
