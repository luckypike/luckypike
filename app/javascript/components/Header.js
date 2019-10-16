import React from 'react'

import styles from './Header.module.css'

import Logo from '!svg-react-loader?!../images/logo.svg'

export default function Header () {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <Logo />
      </div>
    </header>
  )
}
