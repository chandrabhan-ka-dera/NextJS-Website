import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

import { fetchAPI } from "../lib/api"

import Link from "next/link";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";


const Home = () => {
    return (
        <>
            <Meta />
            <Head>
                <title>Chandrabhan ka dera</title>
                <meta name="description" content="" />
            </Head>


            <Js />
        </>
    )
}

export default Home