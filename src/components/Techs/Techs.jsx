import './Techs.css'
import { TECH_LIST } from '../../utils/config'

function Techs() {
  return (
    <section className='tech' id='tech'>
      <div className='tech__container container'>
        <h2 className='tech__title section-title'>Технологии</h2>
        <div className='tech__info'>
          <p className='tech__subtitle'>7 технологий</p>
          <p className='tech__desc'>
            На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в дипломном
            проекте.
          </p>
          <ul className='tech__list'>
            {TECH_LIST.map((item, id) => (
              <li className='tech__item' key={id}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Techs
