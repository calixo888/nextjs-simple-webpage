import Layout from '../components/Layout.js'

export default function About() {
  return (
    <Layout>
      <h1>Hello!</h1>
      <p>This will be pink</p>

      <style jsx>{`
        p {
          background-color: pink;
        }
      `}</style>
    </Layout>
  )
}
