import Layout from '@/components/layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export const getStaticProps = async () => {

  let data = await fetch('http://universities.hipolabs.com/search?country=Bangladesh')
  let x = await data.json()

  return {
    props: {
      data: x
    }
  }


}

export default function AllUni({ data }) {


  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>

      <h1>University Lists</h1>

      {data.map(({ name }, index) => (
        <div>
          <h4><Link href={`/universities/${index}`}>{name}</Link></h4>

        </div>
      ))
      }

    </Layout>
  )
}
