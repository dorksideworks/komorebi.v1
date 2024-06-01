import React, {useEffect, useRef} from 'react'

import Hero from '../Components/Hero';
import Experience from '../Components/Experience';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Port from '../Components/Portfolio';
import Header from '../Components/Header';


function Home() {

  var follower = useRef(null);

  useEffect(() => {

    // document.addEventListener("mousemove", function(e) {
    //   follower.current.style.top = e.pageY - (follower.current.clientHeight /2) +"px";
    //   follower.current.style.left = e.pageX - (follower.current.clientWidth/2) + "px";
      
    // })
  });

  return (
    <div class="z-20 relative block">
      
      <Hero/>
      <Experience/>
      <Port />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default Home
