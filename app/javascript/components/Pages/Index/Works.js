import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import AOS from 'aos'

import styles from './Works.module.css'

Works.propTypes = {
  works: PropTypes.array.isRequired
}

export default function Works ({ works }) {
  useEffect(() => {
    AOS.init({
      useClassNames: true,
      initClassName: styles.init,
      animatedClassName: styles.animated
    })
  }, [])

  return (
    <div className={styles.root}>
      {works.map(work =>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={work.url}
          key={work.id}
          className={styles.work}
          data-aos="slide-right"
          data-aos-once="true"
        >
          <div className={styles.image}>
            <div className={styles.bg} style={{ backgroundColor: work.color || '#eee' }} />
            <div className={styles.ph}>
              <div className={styles.zoom}>
                <picture>
                  <source media="(min-width: 960px)" srcSet={work.image_urls.o} />
                  <img src={work.image_urls.m} />
                </picture>
              </div>
            </div>
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

            <div className={styles.url}>
              {work.url.replace('https://', '')}
            </div>
          </div>
        </a>
      )}
    </div>
  )
}
