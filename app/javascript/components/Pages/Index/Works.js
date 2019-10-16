import React from 'react'
import PropTypes from 'prop-types'

import styles from './Works.module.css'

Works.propTypes = {
  works: PropTypes.array.isRequired
}

export default function Works ({ works }) {
  return (
    <div className={styles.root}>
      {works.map(work =>
        <div key={work.id} className={styles.work}>
          <div className={styles.image}>
            <img src={work.image_url} />
          </div>

          <div className={styles.titte}>
            {work.title}
          </div>

          <div className={styles.desc}>
            {work.desc}
          </div>

          <div className={styles.text}>
            {work.text}
          </div>

          <div className={styles.url}>
            {work.url}
          </div>
        </div>
      )}
    </div>
  )
}
