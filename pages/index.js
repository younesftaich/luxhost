
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import Hosting from './hosting'
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

<Hosting />
    </div>


  )
}
