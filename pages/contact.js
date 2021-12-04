import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Head from 'next/head'

import Navv from './hosting-nav'
import Foot from './hosting-foot'
const contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      let data = {
          name,
          email,
          message
      }
  
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
          if (res.status === 200) {
              setSubmitted(true) 
              setName('')
              setEmail('')
              setMessage('')
          }
      })
    }

    
    return (
        <div>
            {/* Section 1 */}
            <Head >
<title>Contact Us | Luxury Hosting UK</title>
                   </Head>
            <Navv />
<div  className= {submitted ? "hidden" : "py-10 bg-white md:py-16"}>
  <div className="px-10 mx-auto max-w-7xl md:px-16">
    <div className="max-w-3xl mx-auto mb-10 md:mb-16">
      <p className="text-xs font-bold text-blue-500 uppercase">Contact Us</p>
      <h2 className="mt-1 text-2xl font-bold text-left text-gray-800 lg:text-3xl md:mt-2">Need to ask us a question?</h2>
      <p className="max-w-screen-md mx-auto mt-4 text-left text-gray-500 md:text-lg md:mt-6">
        Fill out the form below and we'll do some research on our end and get back to you within 24-48 hours.
      </p>
    </div>
    <form className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
      <div>
        <label htmlFor="full-name" className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base">Full name</label>
        <input  onChange={(e)=>{setName(e.target.value)}} name="full-name" className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300" />
      </div>
    
     
      <div className="sm:col-span-2">
        <label htmlFor="email" className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base">Email</label>
        <input onChange={(e)=>{setEmail(e.target.value)}} name="email" className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300" />
      </div>
    
      <div className="sm:col-span-2">
        <label htmlFor="message" className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base">Message</label>
        <textarea   onChange={(e)=>{setMessage(e.target.value)}} name="message" className="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300" defaultValue={""} />
      </div>
      <div className="flex items-center justify-between sm:col-span-2">
        <button onClick={(e)=>{handleSubmit(e)}} className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-blue-600 rounded-md outline-none hover:bg-blue-500 active:bg-blue-700 ring-blue-300 md:text-base">Send Message</button>
      </div>
    </form>
    <p className="max-w-3xl mx-auto mt-5 text-xs text-gray-400">
      Please allow up to 24-48 hour response during the weekdays.
    </p>
  </div>
</div>

<div  className= {submitted ? "py-10 bg-white md:py-16" : "hidden"}>
  <div className="px-10 mx-auto max-w-7xl md:px-16">
 

    <div class='flex items-center justify-center'>
     <Icon className="justify-center" icon="bi:check-circle-fill" color="#4ef530" width="150" height="150" />
</div>
            <div class='flex items-center justify-center'>
            <h1 className="justify-center mt-2 text-2xl"> 
      Your message was sent successfully , we'll respond in the next few hours . </h1>
      
</div>
  </div>
</div>

            <Foot />
        </div>
    );
};

export default contact;