import Link from 'next/link'
import React from 'react'
import styles from '../styles/404.module.css'


const custom404 = () => {
  return (
    <div className={styles.main}>
      <p className={styles.notFound}>404</p>
      <h1 className={styles.header}>
        <span className={styles.emo}>:(</span> This page cloud not be found
            </h1>

      <Link href="http://localhost:3000/">
        <a className={styles.link}>RETURN TO HOMEPAGE</a>
      </Link>
    </div>
  )
}

export default custom404
