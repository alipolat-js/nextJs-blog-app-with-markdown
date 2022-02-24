import Link from 'next/link'
import React from 'react'
import styles from '../styles/Post.module.css'
import { URL } from '../environment/index'
import copy from 'copy-to-clipboard'


const Post = ({ post }) => {
  return (
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

          <i
            title="copy blog link to clipboard"
            className={`fa-solid fa-link ${styles.clipBoard}`} 
            onClick={(e) => {
              e.preventDefault();
              copy(`${URL}/${post.slug}`)
            }}></i>
        </div>
      </article>
    </Link>
  )
}

export default Post
