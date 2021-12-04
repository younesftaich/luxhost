import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

import Image from 'next/image'
export default function Header(props) {
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <div >
            <section className="box-border relative block w-full py-6 leading-10 text-center text-black bg-white border-b border-gray-200 md:py-8">
                <div className="w-full  px-6 mx-auto leading-10 text-center md:px-8 max-w-7xl">
                    <div className="box-border flex  flex-wrap items-center justify-between -mx-4 text-black">
                        <div className="relative flex items-center w-auto px-4 leading-10 lg:flex-grow-0 lg:flex-shrink-0 lg:text-left">
                            <a href="#_" className="box-border  inline-block font-sans text-2xl font-bold text-left text-black no-underline bg-transparent cursor-pointer focus:no-underline">
                                <img src="https://ecombunny.net/assets/evy.png" className="md:max-h-10 max-h-7" />
                            </a>
                        </div>

                        <div className="hidden md:flex">
                            <div className="left-0 z-0 flex justify-start w-full px-4 mt-2 font-medium leading-10 md:mt-0 md:justify-center md:absolute md:flex-grow-0 md:text-left lg:text-center">
                                <a href="#_" className="box-border inline-block mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline">
                                    Home
                                </a>
                                <a href="#_" className="box-border inline-block mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline">
                                    Features
                                </a>
                                <a href="#_" className="box-border inline-block mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline">
                                    Pricing
                                </a>
                                <a href="#_" className="box-border inline-block mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline">
                                    About
                                </a>
                            </div>
                            <div className="relative flex items-center px-4 mt-2 font-medium leading-10 md:flex-grow-0 md:flex-shrink-0 md:mt-0 md:text-right lg:flex-grow-0 lg:flex-shrink-0">
                                <a href="#_" className="box-border inline-block h-10 px-4 mr-3 text-right text-black no-underline bg-gray-800 rounded-lg cursor-pointer md:mr-0 md:bg-transparent hover:text-black focus:no-underline">
                                    Login
                                </a>
                                <a href="#_" className="box-border inline-flex items-center h-10 px-4 text-base text-center text-gray-100 no-underline align-middle bg-gray-800 rounded-lg cursor-pointer select-none hover:bg-gray-50 hover:text-gray-900 focus:shadow-xs focus:no-underline">
                                    Sign Up
                                </a>

                            </div>

                        </div>

                        <div className="md:hidden flex">

                            <div className="relative flex items-center px-4 mt-2 font-medium leading-10 md:flex-grow-0 md:flex-shrink-0 md:mt-0 md:text-right lg:flex-grow-0 lg:flex-shrink-0">
                                <button onClick={ () => toggleNav() } className="box-border inline-block h-10 px-4 mr-3 text-right text-black no-underline bg-gray-200 rounded-lg cursor-pointer md:mr-0 md:bg-transparent hover:text-black focus:no-underline">
                                    <Icon icon="icon-park-outline:hamburger-button" color="black" width="20" height="20" />

                                </button>


                            </div>

                        </div>



                    </div>

                </div>

                <div className={toggleMenu ? 'mobile-menu text-lg md:hidden' : 'hidden'}
                >

<a href="#_" className="box-border block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline border-b-2 ">
                                    About
                                </a>
                                
<a href="#_" className="box-border border-b-2  block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline ">
                                    About
                                </a>
<a href="#_" className="box-border border-b-2  block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline ">
                                    About
                                </a>
<a href="#_" className="box-border border-b-2  block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline ">
                                    Login
                                </a>
                       <a href="#_" className="box-border inline-flex items-center h-10 px-4 text-base text-center text-black-100 no-underline align-middle bg-gray-800 rounded-lg cursor-pointer select-none hover:bg-gray-50 hover:text-black-900 focus:shadow-xs focus:no-underline mt-4">
                                    Sign Up
                                </a>
  </div>
            </section>



        </div>
    );
}