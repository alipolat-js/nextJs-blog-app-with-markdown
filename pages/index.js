import { URL } from '../environment'
import Head from 'next/head'
import admin from '../src/admin'
import About from '../components/About'
import Footer from '../components/layout/Footer'
import Layout from '../components/layout/Layout'
import PostArea from '../components/PostArea'

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
        <Footer />
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${URL}/api/posts`)
  const posts = await res.json()

  return { props: { posts } }
}