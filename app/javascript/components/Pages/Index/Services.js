import React from 'react'

import styles from './Services.module.css'

export default function Services () {
  return (
    <div className={styles.root}>
      <div>
        <h1>
          Экспертиза
        </h1>

        <p>
          Мы работаем на стыке дизайна, коммуникаций и технологий. Владеем смежными компетенциями. Понимаем маркетинг, разбираемся в бизнес модели и дополняем бренд. Разговариваем и мыслим языком графического дизайна.  Используем опыт в этих областях для создания продукта предвосхищающего ожидания вашей целевой аудитории.
        </p>
      </div>

      <div>
        <h2>
          Стратегия
        </h2>

        <p>
          The first people you’ll meet are our business, UX and technology experts. Together you'll discuss ideas and opportunities, and then we'll deliver blueprints for the best solution.
        </p>
      </div>

      <div>
        <h2>
          Дизайн
        </h2>

        <p>
          Каждый элемент сайта был представлен в форме, максимально способствующей восприятию информации, избегающей двусмысленностей, многословности, текстового и графического шума.
        </p>
      </div>

      <div>
        <h2>
          Разработка
        </h2>

        <p>
          Our code crafters are included in the project from the very beginning. They create progressive solutions placed on the right platforms to enhance the user experience.
        </p>
      </div>
    </div>
  )
}
