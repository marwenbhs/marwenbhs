import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="41.226.11.54" />
        <p className="description">
          THIS IS  <code>MARWEN</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
