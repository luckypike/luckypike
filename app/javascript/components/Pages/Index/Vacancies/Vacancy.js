import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AnimateHeight from 'react-animate-height'
import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'

import styles from './Vacancy.module.css'

Vacancy.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

export default function Vacancy ({ title, text, user }) {
  const [active, setActive] = useState(false)

  return (
    <div className={classNames(styles.root, { [styles.active]: active })}>
      <div className={styles.header} onClick={() => setActive(!active)}>
        <h2>
          {title}
        </h2>

        <svg className={classNames(styles.cross, { [styles.active]: active })} viewBox="0 0 16 16" fill="none">
          <line x1="8" x2="8" y2="16" stroke="black" strokeWidth="2" />
          <line y1="8" x2="16" y2="8" stroke="black" strokeWidth="2" />
        </svg>
      </div>

      <AnimateHeight className={styles.container} duration={500} height={active ? 'auto' : 0}>
        <div className={styles.dt}>
          <div className={styles.user}>
            {user.avatar_url &&
              <div className={styles.avatar}>
                <img src={user.avatar_url} />
              </div>
            }
            <div>
              <div className={styles.name}>
                {user.title}
              </div>

              <div className={styles.position}>
                {user.position}
              </div>
            </div>
          </div>
          <div className={styles.text}>
            <ReactMarkdown source={text} />
          </div>
        </div>
      </AnimateHeight>

    </div>
  )
}
