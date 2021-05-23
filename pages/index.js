import Head from 'next/head'
import About from '../components/About'
import Layout from '../components/layout/Layout'
import PostArea from '../components/PostArea'
import admin from '../src/admin'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>NextJS Blog</title>
        <meta name="author" content={admin.fullName} />
        <meta name="description" content="Nextjs Blog App without DataBase" />
      </Head>

      <Layout>
        <About />
        <PostArea posts={posts} />
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/posts`)
  const posts = await res.json()

  return { props: { posts } }
}