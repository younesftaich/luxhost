
import React, { useEffect, useState } from 'react';


import Head from 'next/head'
import { useRouter } from 'next/router'

import { Icon } from '@iconify/react';
function pricing(props) {

  


    return (

        <div className="font-Poppins font-semibold min-h-screen text-center bg-indigo-100">
            <Head>
                <title>Order Completed
                </title>
            </Head>
            <div className=" bg-indigo-100 justify-center  mx-auto pt-8 px-4 sm:px-6 lg:px-8 pb-6">
            <div class='flex items-center justify-center'>
     <Icon className="justify-center" icon="bi:check-circle-fill" color="#4ef530" width="150" height="150" />
</div>
            <div class='flex items-center justify-center'>
            <h1 className="justify-center mt-2 text-2xl"> 
      Your order has been placed successfully </h1>
      
</div>

<div class='flex items-center justify-center'>
            <h2 className="justify-center mt-2 text-lg font-thin"> 
      The activation process takes a few minutes / hours , you'll receive an email once done .  </h2>
      
</div>

<div  onClick={() => initcheck()} class='flex cursor-pointer items-center justify-center'>
            <h2 className="justify-center mt-2 text-base"> 
      Tip : You can contact us via Whatsapp to speed up the activation process  </h2>
      
</div>

<div onClick={() => initcheck()} class='flex cursor-pointer items-center justify-center mt-5'>
     <Icon className="justify-center" icon="bi:whatsapp" color="#4ef530" width="150" height="150" />
</div>


       
       

   </div>





        </div>
    );
}

export default pricing; 