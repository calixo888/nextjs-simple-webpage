import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Index</title>
      </Head>
      <h1>Index</h1>
      <Link href="/about">Hello</Link>
      <img src="/harvard_innovation_lab_logo.png" alt="" />
    </Layout>
  )
}
