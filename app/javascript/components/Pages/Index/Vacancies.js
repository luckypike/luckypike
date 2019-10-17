import React from 'react'
import PropTypes from 'prop-types'

import Vacancy from './Vacancies/Vacancy'

import styles from './Vacancies.module.css'

Vacancies.propTypes = {
  vacancies: PropTypes.array.isRequired
}

export default function Vacancies ({ vacancies }) {
  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <h1>Вакансии</h1>
        <p>
          Lucky Pike — небольшая компания, но именно это позволяет нам лично участвовать в каждом проекте, предлагая весьма творческий, практический и персональный сервис
        </p>
      </div>

      <div className={styles.vacancies}>
        {vacancies.map(vacancy =>
          <Vacancy key={vacancy.id} {...vacancy} />
        )}
      </div>
    </div>
  )
}
