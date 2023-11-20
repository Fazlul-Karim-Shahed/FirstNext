import Layout from '@/components/layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Card } from 'reactstrap'

// export const getStaticPaths = async () => {

//     return {
//         paths: [],
//         fallback: false
//     }
// }

export const getServerSideProps = async ({ params }) => {

    let data = await fetch('http://universities.hipolabs.com/search?country=Bangladesh')
    let x = await data.json()

    return {
        props: {
            data: x[params.id]
        }
    }
}

export default function Details({ data }) {

    console.log(data)
    if(data === undefined) return ''

    return (
        <Layout >

            <Head>
                <title>{data.name}</title>
            </Head>
            <div className='text-center mt-5 p-5'>
                <Card className='my-5 p-5 d-inline-block shadow-lg'>
                    <div>
                        <h2>{data.name}</h2>
                        <h5><Link className="d-block mt-4" href={`${data.web_pages}`}>{data.web_pages}</Link></h5>
                        <h5 className='mt-4'>{data.country}</h5>
                    </div>
                </Card>
            </div>
        </Layout>
    )
}
