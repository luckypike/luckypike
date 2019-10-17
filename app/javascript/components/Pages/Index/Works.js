import React from 'react'
import PropTypes from 'prop-types'

import styles from './Works.module.css'

import Url from '!svg-react-loader?!./Works/Images/Url.svg'

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

          <div className={styles.dt}>
            <div className={styles.title}>
              {work.title}
            </div>

            <div className={styles.desc}>
              {work.desc}
            </div>

            <div className={styles.text}>
              {work.text}
            </div>

            <a href={work.url} className={styles.url}>
              <Url />
              {work.url.replace('https://', '')}
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
