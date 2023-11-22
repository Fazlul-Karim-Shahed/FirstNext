import React from 'react'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'


export default function Layout({ children, home }) {
    return (
        <div className=''>
            <Header />
            <div>
                {/* {!home && <><Link href='/'><button className='btn btn-success btn-sm'>Back to home</button></Link></>} */}
            </div>
            {children}

            <Footer />
        </div>
    )
}


