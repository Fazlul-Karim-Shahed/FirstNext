import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <Layout home>
      <Head>
        <title>First Next App</title>
        <meta name="description" content="Created by Fazlul Karim" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='text-center my-5 py-5'>
          <Link className='h4' href='/universities'>See all universities in Bangladesh</Link>
        </div>
      </main>
    </Layout>
  )
}
