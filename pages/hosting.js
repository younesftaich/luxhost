import Head from 'next/head'
import Image from 'next/image'
import Nav from './nav'
import Foot from './hosting-foot'
import YouTube from 'react-youtube';
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import logo from './logo.png'
import wp from './wp.png'
import security from './security.png'
import Navv from './hosting-nav'
export default function Home() {

    const router = useRouter()

    const featref = React.createRef();
    const revref = React.createRef();
    const instref = React.createRef();
    const priceref = React.createRef();


    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    var month1 = () => {
        router.push('/1-month-hosting')
    }
    var support = () => {
        router.push('https://wa.me/447916416654')
    }
    var gotopricing = () => {
        priceref.current.scrollIntoView({ behavior: "smooth", block: "start" });

    }
    var features = () => {
        featref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    var reviews = () => {
        revref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    var install = () => {
        instref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    var month6 = () => {
        router.push('/6-months-hosting')
    }
    var month12 = () => {
        router.push('/12-months-hosting')
    }
    return (
        <div className="font-Poppins">
            <Head >
<title>Luxury Hosting UK | Wordpress Web Hosting </title>
                </Head>

            <Navv />

            {/* Section 1 */}
            <section className="relative flex flex-col items-center justify-center w-full px-6 py-10 bg-white bg-cover  min-w-screen">
                <div className="flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0">
                    <div className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0">
                        <h1 className="relative z-20 text-5xl font-extrabold leading-none text-gray-800 xl:text-6xl sm:text-center lg:text-left">
                        WordPress Shared Hosting
                        </h1>
                        <p className="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left">Cloud SSD Technology With Low Number Of Clients Per Server For 99.9% Uptime, And Dedicated WordPress Server Solutions With Regular Updates And Continuous Security Patches

                        </p>
                        <div className="relative flex mt-4">
                            <a onClick={() => gotopricing()} className="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent shadow lg:py-4 hover:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-gray-200 md:text-lg xl:text-xl md:px-5 xl:px-10 rounded-2xl">See Pricing</a>
                            <a onClick={() => support()} className="relative flex items-center self-start justify-center py-2 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-gray-400 transition duration-150 ease-in-out bg-gray-100 border-transparent shadow-sm lg:py-4 md:pl-16 md:pr-5 xl:pr-10 hover:text-gray-800 focus:outline-none md:text-lg xl:text-xl rounded-2xl">

                                <span className="text-gray-700">Contact Support</span>
                            </a>
                        </div>
                    </div>
                    <div className="relative w-full px-5  rounded-lg  lg:w-1/2 group xl:px-0">
                        <div className=" w-full  ">
                            <div className="w-full h-full ">
                                <Image class="w-full h-80 " src={wp}

                                />
                            </div>
                        </div>




                    </div>
                </div>
            </section>

            {/* Section 1 */}
            <section ref={featref} className="box-border relative block py-10 overflow-hidden leading-6 text-left bg-white">
                <div className="max-w-6xl px-4 px-16 mx-auto leading-6 text-left xl:px-12">
                    <div className="box-border flex flex-col flex-wrap items-start mx-0 text-gray-900">

                        <h3 className="relative w-full px-0 pb-2 m-0 font-sans text-4xl font-bold text-center xl:flex-grow-0  xl:flex-shrink-0 md:flex-grow-0 md:flex-shrink-0 lg:flex-grow-0 lg:flex-shrink-0">Managed WordPress Hosting

                        </h3>






                    </div>
                    <div className="grid grid-cols-3 gap-5 text-gray-900 md:grid-cols-6">
                        <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
                            <div className="box-border flex items-center justify-start pt-12 text-gray-900">

                                <div className="pl-2 leading-6 ">
                                    <div className="box-border pb-1 text-xl font-medium text-gray-900">
                                    Low number of Clients per server

                                    </div>
                                    <div className="box-border text-base leading-normal text-gray-700">We maintain a lower number of clients per server than anyone else! This allows for low server load and optimal website performance!



                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black  ">
                            <div className="box-border flex items-center justify-start pt-12 text-gray-900">
                                <div className="w-full leading-6 text-left">
                                    <div className="box-border uppercase pb-1 text-xl font-medium text-gray-900">
                                    Cloud SSD Technology for 99.9% Uptime

                                    </div>
                                    <div className="box-border text-base leading-normal text-gray-700">
                                    Cloud-powered Shared hosting servers for optimal uptime and no hardware failures! SSD powered Storage for fastest read/write times!

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
                            <div className="box-border flex items-center justify-start pt-12 text-gray-900">

                                <div className="w-full leading-6 text-left">
                                    <div className="box-border pb-1 text-xl font-medium text-gray-900">24x7 Technical Support


                                    </div>
                                    <div className="box-border text-base leading-normal text-gray-700">
                                    Human-powered technical support service for fast and secure website transfer, template or module installations, and any website-related issues!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
                            <div className="box-border flex items-center justify-start pt-12 text-gray-900">
                                <div className="w-full leading-6 text-left">
                                    <div className="box-border pb-1 text-xl font-medium text-gray-900">
                                    Latest cPanel
                                    </div>
                                    <div className="box-border text-base leading-normal text-gray-700">
                                    What is a web hosting service without a wheel to steer it in the right direction? Over the years, cPanel became an industry standard when it comes to reliable, native, and easy to use web hosting control panel! We provide it for free with every Web Hosting service that we offer!


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
                            <div className="box-border flex items-center justify-start pt-12 text-gray-900">
                                <div className="w-full leading-6 text-left">
                                    <div className="box-border pb-1 text-xl font-medium text-gray-900">
                                    LiteSpeed Web Server
                                    </div>
                                    <div className="box-border text-base leading-normal text-gray-700">
                                    LiteSpeed is a drop-in replacement for Apache, which outperforms it at least ten times without sacrificing any of the most important aspects of a web server - Scalability, Security, and Performance. Thanks to its architecture, LiteSpeed provides complete HTTP/2 over QUIC Support, which makes it one of the first to implement HTTP/3.



                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
                            <div className="box-border flex items-center justify-start pt-12 text-gray-900">
                                <div className="w-full leading-6 text-left">
                                    <div className="box-border pb-1 text-xl font-medium text-gray-900">
                                    Fast Patching
                                    </div>
                                    <div className="box-border text-base leading-normal text-gray-700">
                                    We will patch any security vulnerability on a server level as soon as it gets reported!


                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="py-8 leading-7 text-gray-900 bg-gray-50 sm:py-12 md:py-16 lg:py-24">
                <div className="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
                    <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
                        <div className="box-border flex-1 text-center border-solid sm:text-left">
                            <h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
                                {"Like out features? "}
                            </h2>
                            <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
                                {"We will take care for everything your WordPress website needs"}
                            </p>
                        </div>
                        <button onClick={() => gotopricing()} className="inline-flex uppercase items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-extralight text-base leading-none text-white no-underline bg-gray-600 border border-gray-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
                            Subscribe Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <line x1={5} y1={12} x2={19} y2={12} />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <section className="px-2 py-7 bg-white md:px-0">
                <div className="container items-center w-full px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">

                                    <span className="block text-gray-600 xl:inline">
                                    High-Speed Connectivity and unmatched Network performance

                                    </span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">

                                To be able to utilize the stability and speed that our infrastructure offers, we maintain a high speed, redundant network that connects visitors to the websites hosted on our services with very low latency.

                                <br/>
<br/>
The internal layer, also known as a local network, is used for the local communication needs of our servers. That layer allows for multiple servers in the same data center to share basically 0 latency when communicating with one another. This is particularly useful when our customers require load balancing or remote SQL solutions, available only on our Cloud SSD VPS and Dedicated Servers Hosting Plans.



                                </p>
                                <div className="relative flex flex-col sm:flex-row sm:space-x-4">

                                    <button onClick={() => gotopricing()} className="flex font-bold items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-600 rounded-md sm:mb-0 hover:bg-gray-700 sm:w-auto">
                                        ORDER NOW
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                                    </button>

                                    <a href="https://wa.me/447916416654" className="flex font-bold items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-600 rounded-md sm:mb-0 hover:bg-gray-700 sm:w-auto">
                                        CONTACT SUPPORT
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                                    </a>


                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <Image src = {security} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section 1 */}
            <section ref={priceref} className="py-8 leading-7 cursor-pointer text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
                <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
                    <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
                        <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                            Fair, simple pricing for all.

                        </h2>

                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
                        {/* Price 1 */}
                        <div onClick={() => month1()} className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border-2 border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                                1 Month Web Hosting
                            </h3>
                            <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                                <p className="box-border m-0 text-3xl text-red-700 line-through  leading-none border-solid p-2">
                                    £10
                                </p>
                                <p className="box-border m-0 text-6xl text-green-500 font-semibold leading-none border-solid">
                                    £10
                                </p>



                            </div>
                            <p className=" mt-2 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
                                Extra Vps £7


                            </p>
                            <p className="mt-6 mb-5 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
                                <span class="bg-green-500 rounded-full text-white px-3 py-1  uppercase font-medium">Includes FREE SSL</span>

                            </p>

                            <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                   Domain Registration
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    WordPress Installation
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                   WordPress Optimization
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
WordPress Performance Boost
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
30 GB SSD Storage                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    4 Cores CPU

                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    CloudFlare Support
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    24/7 Support
                                </li>
                            </ul>
                            <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-gray-600 no-underline bg-transparent border border-gray-600 rounded-md cursor-pointer hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-base md:text-lg">
                                Select Plan
                            </button>
                        </div>
                        {/* Price 2 */}
                        <div onClick={() => month12()} className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-gray-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
                            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                                12 Months Web Hosting
                            </h3>
                            <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                                <p className="box-border m-0 text-3xl text-red-700 line-through  leading-none border-solid p-2">
                                    £70
                                </p>
                                <p className="box-border m-0 text-6xl text-green-500 font-semibold leading-none border-solid">
                                    £40
                                </p>
                            </div>

                            <p className=" mt-2 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
                                Extra Vps £30


                            </p>
                            <p className="mt-6 mb-5 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
                                <span class="bg-green-500 rounded-full text-white px-3 py-1  uppercase font-medium">Includes FREE SSL</span>

                            </p>

                            <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                   Domain Registration
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    WordPress Installation
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                   WordPress Optimization
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
WordPress Performance Boost
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
30 GB SSD Storage                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    4 Cores CPU

                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    CloudFlare Support
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    24/7 Support
                                </li>
                            </ul>
                            <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-gray-600 border rounded-md cursor-pointer hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-base md:text-lg">
                                Select Plan
                            </button>
                        </div>
                        {/* Price 3 */}
                        <div onClick={() => month6()} className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                                6 Months Web Hosting
                            </h3>
                            <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                                <p className="box-border m-0 text-3xl text-red-700 line-through  leading-none border-solid p-2">
                                    £50
                                </p>
                                <p className="box-border m-0 text-6xl text-green-500 font-semibold leading-none border-solid">
                                    £25
                                </p>
                            </div>
                            <p className=" mt-2 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
                                Extra Vps £15


                            </p>
                            <p className="mt-6 mb-5 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
                                <span class="bg-green-500 rounded-full text-white px-3 py-1  uppercase font-medium">Includes FREE SSL</span>

                            </p>
                            <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                   Domain Registration
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    WordPress Installation
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                   WordPress Optimization
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
WordPress Performance Boost
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
30 GB SSD Storage                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    4 Cores CPU

                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    CloudFlare Support
                                </li>
                                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    24/7 Support
                                </li>
                            </ul>
                            <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-gray-600 no-underline bg-transparent border border-gray-600 rounded-md cursor-pointer hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-base md:text-lg">
                                Select Plan
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section ref={instref} class="py-12 bg-gray-600 sm:py-16 md:py-20 lg:py-24 pb-28">
                <div className="max-w-6xl px-8 mx-auto lg:px-16">
                    <h2 class="mb-2 text-2xl font-bold text-center text-white md:text-3xl lg:text-4xl">Frequently Asked Questions (FAQ)
</h2>
                    <div className="relative flex flex-col mt-8 mt-16 " >

                        <div class="relative w-full space-y-3 lg:space-y-5   lg:pr-4" >

                            <details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">What is WordPress Hosting?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">WordPress Hosting is a specially created service, aiming to provide fast, secure, and stable hosting service for WordPress based websites.




                                </span>

                            

                            </details>


                            <details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">Is the WordPress Hosting service Cloud Based?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">Yes! Our WordPress web hosting plans are powered by state of the art Cloud Platform virtualized with the KVM® virtualization technology. This type of technology is Kernel-based, meaning that the resources of the Cloud are equally distributed across all the virtual machines running on top. This assures NO resource overselling so that every web hosting server can utilize 100% dedicated resources.



                                    </span>

                             

                            </details>

                            <details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">What are the Storage Units of the WordPress Hosting plans?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">All storage units are native SSD based except for the backups, which are stored remotely on a block storage service, which is HDD based. This means that all the files and databases of our customers' WordPress websites can take advantage of the fast Read/Write speed granted by the SSD Storage. Furthermore, the Storage Array of our Cloud technology is utilizing RAID 10 configuration for optimal data integrity and even faster requests processing!



                                    </span>

                          

                            </details>
                            <details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">Will my WordPress website be optimized for loading speed on your WordPress Hosting plans?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">Yes! Our WordPress Hosting is optimized by default, and only deploying your website on our service should optimize its loading speed, however further optimizations ARE possible! Our Technical Support team will gladly review your website and find the best approach to optimize its loading speed even further!

</span>

                         
                         

                            </details>
                            <details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">Do you backup the Database of my WordPress website?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">Yes! We perform full account backups, meaning that all the files, folders, emails, email accounts, databases, and even website optimizations are fully backed up on a daily basis!



                                    </span>

                                

                            </details>
                            <details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">Will my WordPress website be secured on your WordPress Hosting service?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">Nobody can give a concrete answer to that question and stating that some internet resource is 100% secure cannot possibly be true. However, relying on the experience of our Technical Staff as well as our System Administration team, we developed security solutions that cover nearly 99% of the Internet attacks these days. Furthermore, our Security Specialists are following time-tested protocols, which will immediately report a vulnerability in WordPress when such is detected and will try to patch it on a server level!



                                    </span>

                       

                            </details>




                        </div>

                    </div>

                </div>
            </section>

            


        

            <section className="py-8 leading-7 text-gray-900 bg-gray-50 sm:py-12 md:py-16 lg:py-24">
                <div className="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
                    <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
                        <div className="box-border flex-1 text-center border-solid sm:text-left">
                            <h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
                                Got A Question ?
                            </h2>
                            <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
                                Contact Our Customer Service
                            </p>
                        </div>
                        <a href="https://wa.me/447916416654" className="inline-flex uppercase items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-extralight text-base leading-none text-white no-underline bg-gray-600 border border-gray-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
                            24/7 SUPPORT
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <line x1={5} y1={12} x2={19} y2={12} />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>


            <Foot />


        </div>


    )
}
