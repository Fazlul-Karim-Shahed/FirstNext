import React from 'react'
import Link from 'next/link'
import Header from './Header'


export default function Layout({ children, home }) {
    return (
        <div className=''>
            <Header />
            {!home && <><Link href='/'><button className='btn btn-success btn-sm'>Back to home</button></Link></>}
            {children}
        </div>
    )
}


