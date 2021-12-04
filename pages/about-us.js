import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Head from 'next/head'

import Navv from './hosting-nav'
import Foot from './hosting-foot'
const contact = () => {
    

    
    return (
        <div>
            {/* Section 1 */}

            <Head >
<title>About Us | Luxury Hosting UK</title>
                   </Head>
            <Navv />


<div  className= {"py-10 bg-white md:py-16" }>
  <div className="px-10 mx-auto max-w-7xl md:px-16">
 
<h1 className="text-2xl font-bold text-center"> About Luxury Hosting UK!
</h1>
<br/>
    <div class='flex items-center justify-center'>
   
</div>
            <div class=' justify-center'>
            <h1 className="justify-center mt-2 text-2xl"> 
            Luxury Hosting UK is an independently funded and privately owned Web Hosting Company with the freedom to create and introduce innovative ideas. As a product of a visionary team assembled with one sole purpose - to provide fast, secure, and reliable Web Hosting Service, we are ready to begin our voyage into the vastness of the Web Hosting universe!


       </h1>
       <br/>
       <h1 className="justify-center mt-2 font-bold text-2xl"> 
       Transparency

       </h1>
       <br/>
       <br/>

       <p className="justify-center mt-2  text-2xl">
       When it comes to the relationship with our customers or the attitude of our employees, we are all about transparency.
<br/>
No matter how harsh the truth is, sometimes, we believe that everyone should be aware of what the status of our services and company in general is. That is why we are always open to questions related to the General Company Structure, our Services Status, and basically everything that bothers the curiosity of our customers!


       </p>
       <br/>
       <h1 className="justify-center mt-2 font-bold text-2xl"> 
       Innovation

       </h1>
       <br/>
       <br/>

       <p className="justify-center mt-2  text-2xl">
       The Web Hosting Service evolves every day, mainly due to the demand for new or improved services. At the same time, the majority of Web Hosting Providers are relying on the same service types since those are based on a proven setup of their infrastructure.

<br/>
Following that model not only stimulates 0 service evolution but also forces the customers to use outdated and morally old services since those are being trended.

<br/>
Here at Luxury Hosting UK, the innovations are fully tolerated and even stimulated. We do not dump our ideas, and we are not scared to invest if the product will lead to progress and better services. That is why we constantly test and implement new improvements to our Infrastructure, Services, and even approaches to our customers!



       </p>


       <br/>
       <h1 className="justify-center mt-2 font-bold text-2xl"> 
       Tolerance

       </h1>
       <br/>
       <br/>

       <p className="justify-center mt-2  text-2xl">
       Luxury Hosting UK is one of the companies with the lowest levels of unhappy abusive users. This is purely because we have a very soft policy when a customer violates our rules. Typically when there is an abusive customer, other Hosting Companies will suspend the abusive Web Hosting Account immediately without actually explaining what the reason for this action is.

<br/>
This is not the case with us. We will always try to first communicate with our customers informing them about the occurred incident, and only if they take no action to resolve it, we will be forced to use the Suspend option. Of course, our grace periods are as tolerating as optional to ensure that every customer will suffer the lowest downtime possible.



       </p>



       <br/>
       <h1 className="justify-center mt-2 font-bold text-2xl"> 
       Spread of Wisdom


       </h1>
       <br/>
       <br/>

       <p className="justify-center mt-2  text-2xl">
       The things we learn are the things that steer our way in the right direction. Following this simple yet important rule, we constantly share our experience with our customers in the form of useful guides, tutorials, and blog posts.

<br/>
No matter if there is a new technology we would like to introduce or if we describe unknown aspects of already existing - we will always spread the wisdom that we gain throughout our journey!



       </p>


      
</div>
  </div>
</div>

            <Foot />
        </div>
    );
};

export default contact;