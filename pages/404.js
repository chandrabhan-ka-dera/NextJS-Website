import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'

import Footer from '@components/Footer'
import Js from '@components/Js'

export default function Home() {
    return (
        <>
            <Meta />
            <Head>
                <title>404 Page Not Found | Chandrabhan ka dera</title>
                <meta name="description" content="" />
            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="error-wrap ptb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="error-content">
                                        <img src="/img/404.png" alt="Iamge" />
                                        <h2>Oops! Page Not Found</h2>
                                        <p>The page you are looking for might have been removed had its name changed
                                            or is temporarily unavailable.</p>
                                        <a href="https://www.chandrabhankadera.in/" className="btn style1">Back To Home</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
            <Js />
        </>
    )
}