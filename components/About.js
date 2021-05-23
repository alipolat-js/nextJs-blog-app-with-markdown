import React from 'react'
import admin from '../src/admin'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.header}>Hi, I'm {admin.fullName},</h2>
      <p className={styles.content}>{admin.about}</p>
      <pre className={styles.job}>|{admin.job}</pre>
    </div>
  )
}

export default About
