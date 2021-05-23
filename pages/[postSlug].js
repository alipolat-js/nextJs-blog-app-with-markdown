import Head from 'next/head'
import Layout from '../components/layout/Layout'
import styles from "../styles/PostDetailes.module.css"
import React from 'react'
import admin from '../src/admin'
import { URL } from '../environment/index'
import getPosts from '../src/getPosts'
import ReactMarkdown from 'react-markdown'
import copy from 'copy-to-clipboard'

const PostPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="author" content={admin.fullName} />
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.metaKeys} />
        <meta name="date" content={post.date} />
      </Head>

      <Layout>
        <article className={styles.postCard}>
          <div className={styles.titleArea}>
            <h1>{post.title}</h1>
          </div>
          <div className={styles.contentArea}>
            
            <ReactMarkdown children={post.content}/>

          </div>

          <p className={styles.author}><i>by {admin.fullName} | {admin.job}</i></p>

          <div className={styles.infoArea}>

            <p className={styles.date}>{post.date}</p>

            <div className={styles.imagingArea}>
            <i class={`fas fa-clipboard ${styles.clipBoard}`} onClick={() => {
              copy(`${URL}/${post.slug}`)
            }}></i>
              <i class="fas fa-eye"></i>
              <span className={styles.imaging}>{post.imaging}</span>
            </div>

          </div>

        </article>
      </Layout>
    </>
  )
}

export default PostPage

export async function getServerSideProps(context) {
  const res = await fetch(`${URL}/api/post/${context.params.postSlug}`)

  const post = await res.json()
  
  const allPosts = await getPosts();

  const postSrc = allPosts.find(post => post.slug == context.params.postSlug);
  postSrc.imaging++;
  //If we were using a database, the top 2 rows would increase the item of the imaging in the database.
  
  if (!post.postID) {
    return {
      notFound: true,
    }
  }
  return {
    props: { post },
  }
}