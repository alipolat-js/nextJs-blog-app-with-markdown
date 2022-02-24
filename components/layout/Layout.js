import React from 'react'
import styles from '../../styles/Layout.module.css'
import Nav from './Nav'

const Container = props => {
  return (
    <>
      <Nav />

      <div className={styles.mainContainer}>
        <div className={styles.container}>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Container