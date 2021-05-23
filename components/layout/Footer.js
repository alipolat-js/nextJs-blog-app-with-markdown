import React from 'react'
import styles from '../../styles/Footer.module.css'
import admin from '../../src/admin'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href={admin.githubAccount}>
        <span className={styles.footerElement}><i>by {admin.fullName} | {admin.job}</i></span>
      </Link>

      <span className={styles.footerElement}>NextJS Blog with Markdown</span>

      <span className={styles.footerElement}>2021</span>
    </footer>
  )
}

export default Footer
