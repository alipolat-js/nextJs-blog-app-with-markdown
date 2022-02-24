import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Nav.module.css'
import admin from '../../src/admin'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div>
          <Link href="/">
            <a className={styles.navbarBrand}>NextBlog</a>
          </Link>
        </div>

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
      </div>
    </nav>
  )
}

export default Nav