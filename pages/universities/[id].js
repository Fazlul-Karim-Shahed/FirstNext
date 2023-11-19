import Layout from '@/components/layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

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
            <div>
                <div style={{ border: '2px black dotted', display: 'inline-block', padding:'20px', margin: '50px 0px' }}>
                    <h2>{data.name}</h2>
                    <Link href={`${data.web_pages}`}>{data.web_pages}</Link>
                    <h5>{data.country}</h5>
                </div>
            </div>
        </Layout>
    )
}
