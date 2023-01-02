import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>github search App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>github Search App</h1>
      <h2 className="title">
        
      </h2>
      <section className={utilStyles.headingMd}>
        <p>[Brief description]</p>
        <p>
          <Link href="/search">Search</Link>
        </p>
      </section>
    </Layout>
  )
}
