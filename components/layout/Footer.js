import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Footer.module.css'
import admin from '../../src/admin'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="https://www.alipolat.tech">
        <a target="_blank">
          <span className={styles.footerElement}><i>Design 	&amp; Developed by {admin.fullName}</i></span>
        </a>
      </Link>

      <Link href="https://github.com/alipolat-js/nextJs-blog-app-with-markdown">
        <a target="_blank" className={styles.footerElement}>
          <i className="fa-brands fa-github"></i> View code of this project
        </a>
      </Link>

      <div className={styles.socialMediaGroup}>
        <Link href={admin.githubAccount}>
          <a className={styles.socialLink} target="blank">
            <i className="fab fa-github"></i>
          </a>
        </Link>

        <Link href={admin.twitterAccount}>
          <a className={styles.socialLink} target="blank">
            <i className="fab fa-twitter"></i>
          </a>
        </Link>

        <Link href={admin.linkedinAccount}>
          <a className={styles.socialLink} target="blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer