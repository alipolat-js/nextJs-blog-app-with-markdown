import Link from 'next/link'
import React from 'react'
import styles from '../styles/404.module.css'


const custom404 = () => {
  return (
    <div className={styles.main}>
      <p className={styles.notFound}>404</p>
      <h1 className={styles.header}>This page cloud not be found</h1>
      <Link href="/">
        <a className={styles.link}>RETURN TO HOMEPAGE</a>
      </Link>
    </div>
  )
}

export default custom404
