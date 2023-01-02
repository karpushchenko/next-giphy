import Head from 'next/head'
import Layout from '../components/layout';

export default function SearchPage() {

    return (
    <Layout>
        <Head>
            <title>Search</title>
        </Head>
        <h1>Search page</h1>
        <li className='list-none'>
        <span
            className={`block px-3 py-2 rounded-md ${true ? 'bg-sky-500 text-white' : 'bg-slate-50'}`}
        >
            Hello everybody
        </span>
        </li>
    </Layout>
    );
}
  