import Layout from '@/components/layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Card, CardLink, CardTitle } from 'reactstrap'

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

      <h2 className='text-center my-5'>University Lists in Bangladesh</h2>

      <div className="row m-0">
        {data.map(({ name }, index) => (
          <div className="col-md-4 p-3">
            <Link className='text-decoration-none' href={`/universities/${index}`}>
              <Card className='shadow-sm p-3 text-center'>
                <CardTitle>{name}</CardTitle>
              </Card>
            </Link>
          </div>
        ))
        }
      </div>

    </Layout>
  )
}
