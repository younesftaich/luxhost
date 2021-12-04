import React from 'react';
import wp from './iso2.png'
import Image from 'next/image'
import Navv from './hosting-nav'
import security from './support.png'
import Foot from './hosting-foot'
import Head from 'next/head'

const website = () => {
    return (
        <div>
              <Head >
<title>Datacenters | Luxury Hosting UK</title>
                   </Head>
            <Navv />
            <section className="relative flex flex-col items-center justify-center w-full px-6 py-10 bg-white bg-cover  min-w-screen">
                <div className="flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0">
                    <div className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0">
                        <h1 className="relative z-20 text-5xl font-extrabold leading-none text-gray-800 xl:text-6xl sm:text-center lg:text-left">
                        Datacenters
                        </h1>
                        <p className="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left">
                        Stable and reliable network of Datacenters geographically selected to provide fast connectivity and unmatched availability!



                        </p>
                 
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


            <section  className="box-border relative block py-10 overflow-hidden leading-6 text-left bg-white">
                <div className="max-w-6xl px-4 px-16 mx-auto leading-6 text-left xl:px-12">
                    <div className="box-border flex flex-col flex-wrap items-start mx-0 text-gray-900">

                        <h3 className="relative w-full px-0 pb-2 m-0 font-sans text-4xl font-bold text-center xl:flex-grow-0  xl:flex-shrink-0 md:flex-grow-0 md:flex-shrink-0 lg:flex-grow-0 lg:flex-shrink-0">
                        Service Launch Pads available in our Data Centers!


                        </h3>






                    </div>
                    <div className="grid grid-cols-3 gap-5 text-gray-900 md:grid-cols-6">
                        <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
                            <div className="box-border flex items-center justify-start pt-12 text-gray-900">

                                <div className="pl-2 leading-6 ">
                                    <div className="box-border pb-1 text-xl font-medium text-gray-900">
                                    Cloud SSD Based Platform
                                    </div>
                                    <div className="box-border text-base leading-normal text-gray-700">
                                    All our Cloud-based Services are built on top of the latest, industry-standard hardware components so that we can ensure that every website will no longer have to suffer the consequences of maintaining the regular Bare Metal machines.




                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black  ">
                            <div className="box-border flex items-center justify-start pt-12 text-gray-900">
                                <div className="w-full leading-6 text-left">
                                    <div className="box-border uppercase pb-1 text-xl font-medium text-gray-900">
                                    KVM® virtualization

                                    </div>
                                    <div className="box-border text-base leading-normal text-gray-700">
                                    Luxury Hosting UK utilizes KVM® virtualization in order to provide up to 99.9% uptime for all customers' websites and to ensure that there will be no data loss due to failures in the hardware components.


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
                            <div className="box-border flex items-center justify-start pt-12 text-gray-900">

                                <div className="w-full leading-6 text-left">
                                    <div className="box-border pb-1 text-xl font-medium text-gray-900">
                                    The Cloud infrastructure


                                    </div>
                                    <div className="box-border text-base leading-normal text-gray-700">
                                    The Cloud infrastructure allows for each component to be replaced when the time comes in a way that it does not affect any of the hosted websites. This is achieved thanks to redundant Storage Replication built to allow the hot-swap of SSD Storage, RAM, or CPU units without the need for the whole system going down.

</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
                            <div className="box-border flex items-center justify-start pt-12 text-gray-900">
                                <div className="w-full leading-6 text-left">
                                    <div className="box-border pb-1 text-xl font-medium text-gray-900">
                                    Unmatched Network performance                                    </div>
                                    <div className="box-border text-base leading-normal text-gray-700">
                                    The internal layer, also known as a local network, is used for the local communication needs of our servers. That layer allows for multiple servers in the same data center to share basically 0 latency when communicating with one another. 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
                            <div className="box-border flex items-center justify-start pt-12 text-gray-900">
                                <div className="w-full leading-6 text-left">
                                    <div className="box-border pb-1 text-xl font-medium text-gray-900">
                                    High-Speed Connectivity                                    </div>
                                    <div className="box-border text-base leading-normal text-gray-700">
                                    To be able to utilize the stability and speed that our infrastructure offers, we maintain a high speed, redundant network that connects visitors to the websites hosted on our services with very low latency.




                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
                            <div className="box-border flex items-center justify-start pt-12 text-gray-900">
                                <div className="w-full leading-6 text-left">
                                    <div className="box-border pb-1 text-xl font-medium text-gray-900">
                                    Server Setup architecture                                </div>
                                    <div className="box-border text-base leading-normal text-gray-700">
                                    The External Layer resembles a high-speed remote network connecting all the websites with their visitors.






                                    </div>
                                </div>
                            </div>
                        </div>


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
                                    We don't stop when others go back!


                                    </span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">

                                No matter if our customers would like to have some complex Server Setup architecture such as Load Balancers or they need some third-party service installed on their Web Hosting Plan, we are always taking the extra mile.

Knowledge is power, that is why during the communication with our Technical Support Team, our customers will find a detailed, explanatory type of replies so everyone can better understand and learn about our Services!







                                </p>
                                <div className="relative flex flex-col sm:flex-row sm:space-x-4">

                                    <a href="/#pricing" className="flex font-bold items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-600 rounded-md sm:mb-0 hover:bg-gray-700 sm:w-auto">
                                        ORDER NOW
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                                    </a>

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

            <Foot />

        </div>
    );
};

export default website;