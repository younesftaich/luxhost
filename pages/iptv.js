import Head from 'next/head'
import Nav from './nav'
import Footer from './foot'
import YouTube from 'react-youtube';
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import logo from './logo.png'
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
    router.push('/1-month')
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
  router.push('/6-months')
}
var month12 = () => {
  router.push('/12-months')
}
  return (
    <div className="font-Poppins">

<section className="box-border relative block w-full py-6 leading-10 text-center text-black bg-white border-b border-gray-200 md:py-8">
                <div className="w-full  px-6 mx-auto leading-10 text-center md:px-8 max-w-7xl">
                    <div className="box-border flex  flex-wrap items-center justify-between -mx-4 text-black">
                        <div className="relative flex items-center w-auto px-4 leading-10 lg:flex-grow-0 lg:flex-shrink-0 lg:text-left">
                            <a href="#_" className="box-border  inline-block font-sans text-2xl font-bold text-left text-black no-underline bg-transparent cursor-pointer focus:no-underline">
                                <img src="https://ecombunny.net/assets/luxx.png" className="md:max-h-16 max-h-12" />
                            </a>
                        </div>

                        <div className="hidden md:flex">
                            <div className="left-0 z-0 flex justify-start w-full px-4 mt-2 font-medium leading-10 md:mt-0 md:justify-center md:absolute md:flex-grow-0 md:text-left lg:text-center">
                                <a  className="box-border inline-block mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline">
                                    Home
                                </a>
                                <a onClick={() => features()} className="box-border inline-block mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline">
                                    Features
                                </a>
                                <a onClick={() => reviews()} className="box-border inline-block mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline">
                                    Reviews
                                </a>
                                <a onClick={() =>   install()} className="box-border inline-block mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline">
                                    How To Install IPTV
                                </a>
                            </div>
                            <div className="relative flex items-center px-4 mt-2 font-medium leading-10 md:flex-grow-0 md:flex-shrink-0 md:mt-0 md:text-right lg:flex-grow-0 lg:flex-shrink-0">
                                <a onClick={() =>   support()} className="box-border inline-block h-10 px-4 mr-3 text-right text-black no-underline bg-gray-800 rounded-lg cursor-pointer md:mr-0 md:bg-transparent hover:text-black focus:no-underline">
                                    Contact Support
                                </a>
                                <a onClick={() =>   gotopricing()} className="box-border inline-flex items-center h-10 px-4 text-base text-center text-gray-100 no-underline align-middle bg-gray-800 rounded-lg cursor-pointer select-none hover:bg-gray-50 hover:text-gray-900 focus:shadow-xs focus:no-underline">
                                   See Pricing
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

<a  className="box-border block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline border-b-2 ">
                                    Home
                                </a>
                                
<a onClick={() =>   features()}  className="box-border border-b-2  block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline ">
                                   Features
                                </a>
<a onClick={() =>   reviews()}  className="box-border border-b-2  block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline ">
                                    Reviews
                                </a>
<a onClick={() =>   install()}  className="box-border border-b-2  block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline ">
                                    How To Install IPTV
                                </a>
<a onClick={() =>   install()} className="box-border border-b-2  block py-2 px-4   font-medium font-sans  hover:text-primary transition-colors mr-4 text-center text-black no-underline bg-transparent cursor-pointer hover:text-black focus:no-underline ">
                                    Contact Support
                                </a>
                       <a  onClick={() =>   gotopricing()} className="box-border inline-flex items-center h-10 px-4 text-base text-center text-gray-100 no-underline align-middle bg-gray-800 rounded-lg cursor-pointer select-none hover:bg-gray-50 hover:text-black-900 focus:shadow-xs focus:no-underline mt-4">
                                    See Pricing
                                </a>
  </div>
            </section>

      {/* Section 1 */}
      <section className="relative flex flex-col items-center justify-center w-full px-6 py-10 bg-white bg-cover  min-w-screen">
        <div className="flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0">
          <div className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0">
            <h1 className="relative z-20 text-5xl font-extrabold leading-none text-gray-800 xl:text-6xl sm:text-center lg:text-left">
            The Best IPTV For Any Device
            </h1>
            <p className="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left">Subscribe to our Premium IPTV service today and access more than 14K international channels with over 74K VOD updated every week.

</p>
            <div className="relative flex mt-4">
              <a  onClick={() =>   gotopricing()} className="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent shadow lg:py-4 hover:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-gray-200 md:text-lg xl:text-xl md:px-5 xl:px-10 rounded-2xl">See Pricing</a>
              <a onClick={() =>   support()}  className="relative flex items-center self-start justify-center py-2 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-gray-400 transition duration-150 ease-in-out bg-gray-100 border-transparent shadow-sm lg:py-4 md:pl-16 md:pr-5 xl:pr-10 hover:text-gray-800 focus:outline-none md:text-lg xl:text-xl rounded-2xl">
           
                <span className="text-gray-700">Contact Support</span>
              </a>
            </div>
          </div>
          <div className="relative w-full px-5  rounded-lg cursor-pointer lg:w-1/2 group xl:px-0">
            <div className=" w-full  ">
              <div className="w-full h-full ">
              <iframe class="w-full h-80 " src="https://www.youtube-nocookie.com/embed/0sSd3XGOcKo" 
         
         >
         </iframe>
              </div>
            </div>

            
       
       
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section  ref={featref} className="box-border relative block py-10 overflow-hidden leading-6 text-left bg-white">
        <div className="max-w-6xl px-4 px-16 mx-auto leading-6 text-left xl:px-12">
          <div className="box-border flex flex-col flex-wrap items-start mx-0 text-gray-900">

            <h3 className="relative w-full px-0 pb-2 m-0 font-sans text-4xl font-bold text-center xl:flex-grow-0  xl:flex-shrink-0 md:flex-grow-0 md:flex-shrink-0 lg:flex-grow-0 lg:flex-shrink-0">Important Features
for IPTV Users
            </h3>
       


      
         
         
          </div>
          <div className="grid grid-cols-3 gap-5 text-gray-900 md:grid-cols-6">
                <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
              <div className="box-border flex items-center justify-start pt-12 text-gray-900">
               
                <div className="pl-2 leading-6 ">
                  <div className="box-border pb-1 text-xl font-medium text-gray-900">
                  FULL 4K/HD/FHD Quality
                  </div>
                  <div className="box-border text-base leading-normal text-gray-700">
                  Most of our TV channels are available in HD quality and some of them are in 4K.


                  </div>
                </div>
              </div>
            </div>
                
                <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black  ">
              <div className="box-border flex items-center justify-start pt-12 text-gray-900">
                <div className="w-full leading-6 text-left">
                  <div className="box-border uppercase pb-1 text-xl font-medium text-gray-900">
                    +70K Movies and Series 
                  </div>
                  <div className="box-border text-base leading-normal text-gray-700">
                    We have the largest VOD library in the market , movies and series are available in 8 different languages . 
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
              <div className="box-border flex items-center justify-start pt-12 text-gray-900">

                <div className="w-full leading-6 text-left">
                  <div className="box-border pb-1 text-xl font-medium text-gray-900">
                  Multi-connections subscriptions

                  </div>
                  <div className="box-border text-base leading-normal text-gray-700">
                  You can choose to use for example, to connect your Living room TV and your bedroom TV and watch your favorite program at the same time (Simultaneously)
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
              <div className="box-border flex items-center justify-start pt-12 text-gray-900">
                <div className="w-full leading-6 text-left">
                  <div className="box-border pb-1 text-xl font-medium text-gray-900">
                  Amazing Customer Service
                  </div>
                  <div className="box-border text-base leading-normal text-gray-700">
                  Our customer service team is available via live chat 24/7 , We'll take care of the installation process for FREE 
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
              <div className="box-border flex items-center justify-start pt-12 text-gray-900">
                <div className="w-full leading-6 text-left">
                  <div className="box-border pb-1 text-xl font-medium text-gray-900">
                  Fast Order Delivery

                  </div>
                  <div className="box-border text-base leading-normal text-gray-700">
                  We Deliver Your Premium IPTV subscription Via Email and Whatsapp a Few minutes After Payment Is Made.


                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full col-span-3 px-4 leading-6 text-left  border-b-2 border-black ">
              <div className="box-border flex items-center justify-start pt-12 text-gray-900">
                <div className="w-full leading-6 text-left">
                  <div className="box-border pb-1 text-xl font-medium text-gray-900">
                  Safe, Secure Payment
                  </div>
                  <div className="box-border text-base leading-normal text-gray-700">
                  Secure Payments – No complicated billing processes required.


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
             {"Enjoy Now with 4K/Ultra HD Quality"}
              </h2>
              <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
              {"More Americans than ever are cutting the cable TV cord in favor of streaming services ."}
              </p>
            </div>
            <button onClick={ () => gotopricing() }  className="inline-flex uppercase items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-extralight text-base leading-none text-white no-underline bg-gray-600 border border-gray-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
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
            Live Sport and TV-shows for best friends

            </span>
          </h1>
          <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">

          With our complete and large collection of TV channels, never miss your favorite sport games and TV shows. You can be the first one to see your new episode of your favorite TV series.


          </p>
          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
        
          <button  onClick={ () => gotopricing() }  className="flex font-bold items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-600 rounded-md sm:mb-0 hover:bg-gray-700 sm:w-auto">
            GET IPTV NOW
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
          <img src="https://res.cloudinary.com/luxiptv/image/upload/v1637001858/livesport_1_1752387eaa.png" />
        </div>
      </div>
    </div>
  </div>
</section>


{/* Section 1 */}
<section  ref={priceref} className="py-8 leading-7 cursor-pointer text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
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
          1 Month Pass
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
          Extra Connection £7


          </p>
        <p className="mt-6 mb-5 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
        <span class="bg-green-500 rounded-full text-white px-3 py-1  uppercase font-medium">Includes FREE VPN</span>

        </p>
        
        <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            +12,913 Worldwide Channels
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            +11,215 Worldwide Series
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            +64,793 Worldwide Movies
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            All Sports Channels
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            All PPV Events
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Easy Installation
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Privacy Protection
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
      <div onClick={() => month12()}  className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-gray-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
        <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
          12 Months Pass
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
        Extra Connection £30


        </p>
        <p className="mt-6 mb-5 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
        <span class="bg-green-500 rounded-full text-white px-3 py-1  uppercase font-medium">Includes FREE VPN</span>

        </p>
        
        <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            +12,913 Worldwide Channels
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            +11,215 Worldwide Series
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            +64,793 Worldwide Movies
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            All Sports Channels
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            All PPV Events
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Easy Installation
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Privacy Protection
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
      <div onClick={() => month6()}  className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
        <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
          6 Monhts Pass
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
        Extra Connection £15


        </p>
        <p className="mt-6 mb-5 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
        <span class="bg-green-500 rounded-full text-white px-3 py-1  uppercase font-medium">Includes FREE VPN</span>

        </p>
        <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            +12,913 Worldwide Channels
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            +11,215 Worldwide Series
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            +64,793 Worldwide Movies
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            All Sports Channels
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            All PPV Events
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Easy Installation
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Privacy Protection
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
           <h2 class="mb-2 text-2xl font-bold text-center text-white md:text-3xl lg:text-4xl">Installation Tutorials</h2>
           <div className="relative flex flex-col mt-8 mt-16 " >
            
           <div class="relative w-full space-y-3 lg:space-y-5   lg:pr-4" >
     
           <details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">How to install iptv on Smart TV ?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get login credentials to IPTV server ( M3u Playlist Url + Xtream Codes API : Host , Username , Password ) .
                You can either use smart iptv app ( the first video ) or ibo player ( the second video )
                

</span>

<div className=" w-full  ">
              <div className="w-full h-full ">
              <iframe class="w-full h-80 " src="https://www.youtube-nocookie.com/embed/Dv_uL53bfiE"
         
         >
         </iframe>
              </div>

              <br/>
            </div>
<div className=" w-full  ">
              <div className="w-full h-full ">
              <iframe class="w-full h-80 " src="https://www.youtube-nocookie.com/embed/fR146MwMLwM"
         
         >
         </iframe>
              </div>
            </div>

</details>

            
           <details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">How to install iptv on Firestick / Fire TV ?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get login credentials to IPTV server ( M3u Playlist Url + Xtream Codes API : Host , Username , Password )

.</span>

<div className=" w-full  ">
              <div className="w-full h-full ">
              <iframe class="w-full h-80 " src="https://www.youtube-nocookie.com/embed/CaZFUA6h5Us"
         
         >
         </iframe>
              </div>
            </div>

</details>

           <details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">How to install iptv on Android Device TV, Box, Phone ... ?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get login credentials to IPTV server ( M3u Playlist Url + Xtream Codes API : Host , Username , Password )

.</span>

<div className=" w-full  ">
              <div className="w-full h-full ">
              <iframe class="w-full h-80 " src="https://www.youtube-nocookie.com/embed/hpTiYI7V7hU"
         
         >
         </iframe>
              </div>
            </div>

</details>
<details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">How to install iptv on Mag Box ?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get the portal url.

.</span>

<div className=" w-full  ">
              <div className="w-full h-full ">
              <iframe class="w-full h-80 " src="https://www.youtube-nocookie.com/embed/52yHp3QoX30"
         
         >
         </iframe>
              </div>
            </div>

</details>
<details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">How to install iptv on IOS (iPhone, iPad, Apple Tv) ?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get login credentials to IPTV server ( M3u Playlist Url + Xtream Codes API : Host , Username , Password )

.</span>

<div className=" w-full  ">
              <div className="w-full h-full ">
              <iframe class="w-full h-80 " src="https://www.youtube-nocookie.com/embed/odxB3XEv3Bw"
         
         >
         </iframe>
              </div>
            </div>

</details>
<details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">How to install iptv on Windows / Mac OS PC - Laptop ?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get login credentials to IPTV server ( M3u Playlist Url + Xtream Codes API : Host , Username , Password )

.</span>

<div className=" w-full  ">
              <div className="w-full h-full ">
              <iframe class="w-full h-80 " src="https://www.youtube-nocookie.com/embed/E16Z-FiTJSE"
         
         >
         </iframe>
              </div>
            </div>

</details>




</div>

</div>

</div>
</section>

<section ref={revref} className="flex items-center justify-center py-20 bg-white min-w-screen">
        <div className="px-16 bg-white">
          <div className="container flex flex-col items-start mx-auto lg:items-center">
     
            <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                </path>
              </svg>
              See what others are saying</h2>
            <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full" />
            <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
              <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">MELBERG H.</h4>
                    <p className="text-gray-600">Germany</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">"Was chatting to Sonia who set me up in 5 mins, all the sports, movies and 1000's of movies! Absolute no brainer to buy this IPTV"</blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">MELANIE H.</h4>
                    <p className="text-gray-600">United Kingdom</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">"Great support, best I have had in years no matter what service. EPG and everything works just as it should and it is by far the best IPTV service I have tried."</blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">JAMES L.</h4>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">"Loads of channels and VOD. Responsive customer service to get you through the set up process. Overall a strong proposition. Happy to recommend."</blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="py-12 bg-gray-600 sm:py-16 md:py-20 lg:py-24 pb-28">
           <div className="max-w-6xl px-8 mx-auto lg:px-16">
           <h2 class="mb-2 text-2xl font-bold text-center text-white md:text-3xl lg:text-4xl">Frequently Asked Questions</h2>
           <div className="relative flex flex-col mt-8 mt-16 lg:flex-row" >
            
           <div class="relative w-full space-y-3 lg:space-y-5 lg:w-1/2 lg:pr-4" >
     
         
<details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">What does the package include?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get login credentials to IPTV server with instructions for how to setup it on your device via email.

.</span></details>
<details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">What Devices You support?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">We support all kinds of devices such as Smart TVs, Firestick, MAG, Android Smart Phone, Android Boxes, Enigma, DreamBox, Vu+ (…), PC, VLC, Kodi/XBMC (…), Smart TV.


.</span></details>
<details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">How long will it take to receive my IPTV access?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">We aim to email you within 3min – 1 hour of purchase to arrange setup of your order. Please note during busy periods at evenings and weekends orders may take up to 2 hours to process.


.</span></details>

</div>
<div class="relative w-full mt-3 space-y-3 lg:mt-0 lg:space-y-5 lg:w-1/2 lg:pl-4" >
<details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">What if i don't like your IPTV service?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">We offer a 7 Days Money Back Guarantee for Any Reason


.</span></details>
<details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">What content do you supply?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">We offer a full range of WorldWide channels, movies and TV shows with Catch Up & EPG (Electronic Program Guide) features in 4K / Ultra HD / HD quality.

.</span></details>



<details class="relative px-6 py-2 overflow-hidden text-white bg-gray-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">How to setup IPTV on my device?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                
                
                </summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">It is very easy to connect IPTV. Follow the tutorials section , or chat with us our agents will help you set it up on your device .


.</span></details>




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


      <section className="w-full bg-white text-black">
  <div className="px-6 mx-auto max-w-7xl xl:px-12">
    <div className="box-border flex flex-wrap pt-20 pb-0 text-base leading-tight text-black md:pb-12">
      <div className="flex-initial w-1/2 px-2 pb-12 leading-tight md:w-1/4">
        <div className="box-border text-base text-black">
        <img src="https://ecombunny.net/assets/luxx.png" className="md:max-h-10 max-h-7" />

          <ul className="p-0 m-0 mt-4 text-base leading-tight list-none">
            <li className="box-border py-2 text-sm font-normal text-left text-black md:text-base md:mb-1">
              <div href="#_" className="text-base leading-tight no-underline bg-transparent  ">Subscribe to our Premium IPTV service today and access more than 14K international channels with over 74K VOD updated every week.

</div>
            </li>
        
         
         
        
          </ul>
        </div>
      </div>
      <div width="6,3" className="flex-initial w-1/2 px-2 pb-12 leading-tight md:w-1/4">
        <div className="box-border text-base text-black">
          <h2 className="mb-8 font-sans text-xl font-bold tracking-wide text-black md:text-2xl">
            Links
          </h2>
          <ul className="p-0 m-0 text-base leading-tight list-none">
            <li className="box-border py-2 text-sm font-normal text-left text-black md:text-base md:mb-1">
              <a  onClick={() => features()} className="text-base leading-tight no-underline bg-transparent cursor-pointer hover:text-gray-400">Features</a>
            </li>
            <li className="box-border py-2 text-sm font-normal text-left text-black md:text-base md:mb-1">
              <a onClick={() => reviews()} className="text-base leading-tight no-underline bg-transparent cursor-pointer hover:text-gray-400">Reviews</a>
            </li>
            <li className="box-border py-2 text-sm font-normal text-left text-black md:text-base md:mb-1">
              <a onClick={() => features()} className="text-base leading-tight no-underline bg-transparent cursor-pointer hover:text-gray-400">How To Install IPTV</a>
            </li>
            <li className="box-border py-2 text-sm font-normal text-left text-black md:text-base md:mb-1">
              <a onClick={() => gotopricing()} className="text-base leading-tight no-underline bg-transparent cursor-pointer hover:text-gray-400">Buy Premium IPTV</a>
            </li>
            <li className="box-border py-2 text-sm font-normal text-left text-black md:text-base md:mb-1">
              <a onClick={() => support()} className="text-base leading-tight no-underline bg-transparent cursor-pointer hover:text-gray-400">Request Trial</a>
            </li>
      
          </ul>
        </div>
      </div>
      <div width="6,3" className="flex-initial w-1/2 px-2 pb-12 leading-tight md:w-1/4">
        <div className="box-border text-base text-black">
          <h2 className="mb-8 font-sans text-xl font-bold tracking-wide text-black md:text-2xl">
            Installation Tutorials
          </h2>
          <ul className="p-0 m-0 text-base leading-tight list-none">
            <li className="box-border py-2 text-sm font-normal text-left text-black md:text-base md:mb-1">
              <a onClick={() => install()} className="text-base leading-tight no-underline bg-transparent cursor-pointer hover:text-gray-400">How to install iptv on Smart TV</a>
            </li>
            <li className="box-border py-2 text-sm font-normal text-left text-black md:text-base md:mb-1">
              <a onClick={() => install()}  className="text-base leading-tight no-underline bg-transparent cursor-pointer hover:text-gray-400">How to install iptv on Firestick / Fire TV</a>
            </li>
            <li className="box-border py-2 text-sm font-normal text-left text-black md:text-base md:mb-1">
              <a onClick={() => install()}  className="text-base leading-tight no-underline bg-transparent cursor-pointer hover:text-gray-400">How to install iptv on Android Device TV, Box, Phone</a>
            </li>
            <li className="box-border py-2 text-sm font-normal text-left text-black md:text-base md:mb-1">
              <a onClick={() => install()}  className="text-base leading-tight no-underline bg-transparent cursor-pointer hover:text-gray-400">How to install iptv on Mag Box</a>
            </li>
            <li className="box-border py-2 text-sm font-normal text-left text-black md:text-base md:mb-1">
              <a onClick={() => install()}  className="text-base leading-tight no-underline bg-transparent cursor-pointer hover:text-gray-400">How to install iptv on IOS (iPhone, iPad, Apple Tv)</a>
            </li>
            <li className="box-border py-2 text-sm font-normal text-left text-black md:text-base md:mb-1">
              <a onClick={() => install()}  className="text-base leading-tight no-underline bg-transparent cursor-pointer hover:text-gray-400">How to install iptv on Windows / Mac OS PC - Laptop</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-initial w-1/2 px-2 pb-12 leading-tight md:w-1/4">
        <div className="box-border text-base text-black">
          <h2 className="mb-8 font-sans text-xl font-bold tracking-wide text-black md:text-2xl">
            Technical Support
          </h2>
          <ul className="p-0 m-0 text-base leading-tight list-none">
            <li className="box-border py-2 text-sm font-normal text-left text-black md:text-base md:mb-1">
              <a onClick={() => support()} className="text-base leading-tight no-underline bg-transparent cursor-pointer hover:text-gray-400">Contact Us - Whatsapp</a>
            </li>
      
          </ul>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-between w-full py-12 text-xs leading-none text-black border-t border-gray-800 lg:flex-row">
      <div className="flex self-start flex-grow-0 flex-shrink-0 w-full leading-none lg:w-auto">
        <span className="inline-flex justify-center w-full mt-4 space-x-5 sm:ml-auto sm:mt-0">
          <a onClick={() =>   support()} className="text-gray-400 hover:text-gray-200">
            <span className="sr-only">Facebook</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a onClick={() =>   support()} className="text-gray-400 hover:text-gray-200">
            <span className="sr-only">Instagram</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a onClick={() =>   support()} className="text-gray-400 hover:text-gray-200">
            <span className="sr-only">Twitter</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
      
        
        </span>
      </div>
      <ul className="flex my-6 text-sm text-black list-none lg:flex-grow-0 lg:flex-shrink-0 lg:my-0">
        <li className="box-border block font-semibold text-left">
          <a onClick={() =>   support()} className="pr-5 mr-5 text-black no-underline bg-transparent border-r border-gray-700 cursor-pointer">Terms of service</a>
        </li>
        <li  className="box-border block font-semibold text-left">
          <a onClick={() =>   support()} className="pr-5 mr-5 text-black no-underline bg-transparent  border-gray-700 cursor-pointer">Privacy policy</a>
        </li>
    
    
      </ul>
      <p className="block m-0 text-base font-semibold text-black">
        Copyright © 2021 Luxury IPTV
      </p>
    </div>
  </div>
</section>


    </div>


  )
}
