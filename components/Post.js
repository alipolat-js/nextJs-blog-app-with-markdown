import Link from 'next/link'
import React from 'react'
import styles from '../styles/Post.module.css'
import {URL} from '../environment/index'
import copy from 'copy-to-clipboard'


const Post = ({ post }) => {
  return (
    <>
      <Link href={`${URL}/${post.slug}`}>
        <article className={styles.postCard}>
          <div className={styles.titleArea}>
            <h3>{post.title}</h3>
          </div>

          <div className={styles.descriptionArea}>
            <p>{post.description}</p>
          </div>

          <div className={styles.infoArea}>

            <p className={styles.date}>{post.date}</p>

            <div className={styles.infoRight}>
            <i class={`fas fa-clipboard ${styles.clipBoard}`} onClick={(e) => {
              e.preventDefault();
              copy(`${URL}/${post.slug}`)
            }}></i>
              <i class="fas fa-eye"></i>
              <span className={styles.imaging}>{post.imaging}</span>
            </div>

          </div>

        </article>
      </Link>
    </>
  )
}

export default Post
