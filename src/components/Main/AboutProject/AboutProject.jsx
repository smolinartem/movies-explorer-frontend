import './AboutProject.css'

function AboutProject() {
  return (
    <section className='about-project'>
      <div className='about-project__container container'>
        <h2 className='about-project__title section-title'>О проекте</h2>
        <div className='about-project__info'>
          <article className='about-project__article'>
            <h3 className='about-project__subtitle'>Дипломный проект включал 5&nbsp;этапов</h3>
            <p className='about-project__desc'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности
              и&nbsp;финальные доработки.
            </p>
          </article>
          <article className='about-project__article'>
            <h3 className='about-project__subtitle'>
              На&nbsp;выполнение диплома ушло 5&nbsp;недель
            </h3>
            <p className='about-project__desc'>
              У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать,
              чтобы успешно защититься.
            </p>
          </article>
        </div>
        <div className='about-project__periods'>
          <div className='about-project__stage about-project__stage_back'>
            <span className='about-project__time about-project__time_color_green'>1 неделя</span>
            <span className='about-project__tech'>Back-end</span>
          </div>
          <div className='about-project__stage about-project__stage_front'>
            <span className='about-project__time about-project__time_color_grey'>4 недели</span>
            <span className='about-project__tech'>Front-end</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProject
