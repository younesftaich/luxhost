import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import logo from './logo.png'
import Image from 'next/image'
const hosting = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <div>
            <section className="box-border relative block w-full py-6 leading-10 text-center text-black bg-white border-b border-gray-200 md:py-8">
                <div className="w-full  px-6 mx-auto leading-10 text-center md:px-8 max-w-7xl">
                    <div className="box-border flex  flex-wrap items-center justify-between -mx-4 text-black">
                        <div className="relative flex items-center w-auto px-4 leading-10 lg:flex-grow-0 lg:flex-shrink-0 lg:text-left">
                            <a href="#_" className="box-border  inline-block font-sans text-2xl font-bold text-left text-black no-underline bg-transparent cursor-pointer focus:no-underline ">
                                <Image src= {logo} width="190" height="70" />
                            </a>
                        </div>

                        <div className="hidden md:flex">
                            <div className="left-0 z-0 flex justify-start w-full px-4 mt-2 font-medium leading-10 md:mt-0 md:justify-center md:absolute md:flex-grow-0 md:text-left lg:text-center">
                                <a className="box-border inline-block mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline">
                                    Home
                                </a>
                                <a href="/about-us" className="box-border inline-block mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline">
                                    About Us
                                </a>
                                <a href="/contact" className="box-border inline-block mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline">
                                    Contact Us
                                </a>
                                <a href="/privacy-policy" className="box-border inline-block mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline">
                                    Privacy Policy
                                </a>
                                <a href="/terms-of-service" className="box-border inline-block mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline">
                                    Agreements and Terms Of Service
                                </a>
                            </div>
                            <div className="relative flex items-center px-4 mt-2 font-medium leading-10 md:flex-grow-0 md:flex-shrink-0 md:mt-0 md:text-right lg:flex-grow-0 lg:flex-shrink-0">
                                <a href="https://wa.me/447916416654" className="box-border inline-block h-10 px-4 mr-3 text-right text-black no-underline bg-gray-800 rounded-lg cursor-pointer md:mr-0 md:bg-transparent hover:text-black focus:no-underline">
                                    Live Chat
                                </a>
                                <a href="/#pricing" className="box-border inline-flex items-center h-10 px-4 text-base text-center text-gray-100 no-underline align-middle bg-gray-800 rounded-lg cursor-pointer select-none hover:bg-gray-50 hover:text-gray-900 focus:shadow-xs focus:no-underline">
                                    See Pricing
                                </a>

                            </div>

                        </div>

                        <div className="md:hidden flex">

                            <div className="relative flex items-center px-4 mt-2 font-medium leading-10 md:flex-grow-0 md:flex-shrink-0 md:mt-0 md:text-right lg:flex-grow-0 lg:flex-shrink-0">
                                <button onClick={() => toggleNav()} className="box-border inline-block h-10 px-4 mr-3 text-right text-black no-underline bg-gray-200 rounded-lg cursor-pointer md:mr-0 md:bg-transparent hover:text-black focus:no-underline">
                                    <Icon icon="icon-park-outline:hamburger-button" color="black" width="20" height="20" />

                                </button>


                            </div>

                        </div>



                    </div>

                </div>

                <div className={toggleMenu ? 'mobile-menu text-lg md:hidden' : 'hidden'}
                >

                    <a href="/" className="box-border block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline border-b-2 ">
                        Home
                    </a>

                    <a href="/about-us" className="box-border border-b-2  block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline ">
                    About Us
                    </a>
                    <a href="/contact" className="box-border border-b-2  block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline ">
                    Contact Us
                    </a>
                    <a href="/privacy-policy" className="box-border border-b-2  block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline ">
                    Privacy Policy
                    </a>
                    <a href="/terms-of-service" className="box-border border-b-2  block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline ">
                    Agreements and Terms Of Service
                    </a>
                    <a href="" className="box-border border-b-2  block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline ">
                        Contact Support
                    </a>
                    <a href="/#pricing" className="box-border inline-flex items-center h-10 px-4 text-base text-center text-gray-100 no-underline align-middle bg-gray-800 rounded-lg cursor-pointer select-none hover:bg-gray-50 hover:text-black-900 focus:shadow-xs focus:no-underline mt-4">
                        See Pricing
                    </a>
                </div>
            </section>
            
        </div>
    );
};

export default hosting;