import React from 'react'
import PropTypes from 'prop-types'
import { YMInitializer } from 'react-yandex-metrika'

import styles from './Footer.module.css'

Footer.propTypes = {
  env: PropTypes.string.isRequired
}

export default function Footer ({ env }) {
  return (
    <footer className={styles.root}>
      <div className={styles.contacts}>
        +7 (831) 283-55-06
        <br />
        <a href="mailto:we@luckypike.com">we@luckypike.com</a>
      </div>

      <div className={styles.address}>
        Большая Печёрская 26, офис 907,
        <br />
        Нижний Новгород, 603155
      </div>

      <div className={styles.calc} />

      {env === 'production' &&
        <YMInitializer
          accounts={[30698398]}
          version="2"
          options={{
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
          }}
        />
      }
    </footer>
  )
}
