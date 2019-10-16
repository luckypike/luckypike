import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'

import styles from './Index.module.css'

Index.propTypes = {
  works: PropTypes.array.isRequired
}

export default function Index ({ works }) {
  return (
    <div>
      <Header />

      <div className={styles.root}>
        <h1 className={styles.h0}>
          Интеллигентные интернет-проекты
        </h1>

        <p>
          Находим баланс между функциональностью проекта и его внешней эстетикой. Функциональный дизайн
        </p>
      </div>

      <div>
        {works.map(work =>
          <div key={work.id}>
            <img src={work.image_url} />
          </div>
        )}
      </div>
    </div>
  )
}
