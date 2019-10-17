import React from 'react'

import styles from './Footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.root}>
      <div className={styles.contacts}>
        +7 (831) 283-55-06
        <br />
        we@luckypike.com
      </div>

      <div className={styles.address}>
        Большая Печёрская 26, офис 907,
        <br />
        Нижний Новгород, 603155
      </div>

      <div className={styles.calc} />
    </footer>
  )
}
