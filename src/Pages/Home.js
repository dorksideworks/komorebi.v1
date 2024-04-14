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

    document.addEventListener("mousemove", function(e) {
      follower.current.style.top = e.pageY - (follower.current.clientHeight /2) +"px";
      follower.current.style.left = e.pageX - (follower.current.clientWidth/2) + "px";
      
    })
  });

  return (
    <div class=" bg-komorebi-dark">
      <div class="z-50 relative block">
        <Header />
        <Hero/>
        <Experience/>
        <Port />
        <Contact />
        <Footer />
        
      </div>
      <div ref={follower} class="z-1 follower mix-blend-overlay z-1  duration-100 absolute blur-3xl bg-komorebi-lgreen absolute"></div>

    </div>
  )
}

export default Home
