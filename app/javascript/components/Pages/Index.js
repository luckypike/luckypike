import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import Works from './Index/Works'
import Services from './Index/Services'
import Vacancies from './Index/Vacancies'
import Footer from '../Footer'

import styles from './Index.module.css'

Index.propTypes = {
  works: PropTypes.array.isRequired,
  vacancies: PropTypes.array.isRequired
}

export default function Index ({ works, vacancies }) {
  return (
    <div>
      <Header />

      <div className={styles.root}>
        <div className={styles.intro}>
          <h1 className={styles.h0}>
            Интеллигентные интернет-проекты
          </h1>

          <p>
            Находим баланс между функциональностью проекта и его внешней эстетикой. Помогаем бренду общаться и обрести узнаваемый имидж в цифровой среде
          </p>
        </div>

        <div className={styles.works}>
          <Works works={works} />
        </div>

        <div className={styles.services}>
          <Services />
        </div>

        <div className={styles.vacancies}>
          <Vacancies vacancies={vacancies} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
