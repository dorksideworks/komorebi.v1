import React from 'react'

function Hero() {
  return (
    <div class="relativepb-5 flex flex-col justify-center align-center items-center">

        <div class="bg-komorebi-light rounded-b-3xl flex flex-row relative overflow-hidden">
            <div class="basis-1/2 flex flex-col text-left pl-20 justify-center  ">
                <h2 class="text-slate-800 font-bold"> WEB ARTISAN / DIGITAL NOMAD </h2>
                <h1 class="text-slate-900 font-bold text-8xl"> Hello! I'm <br/> Adrian Casas</h1>
                <p class="text-slate-600 mt-5 pr-36">Since the beginning of my odyssey as both Digital nomad & settler nearly 8 years ago, I have performed remote and on site work for several companies. I’m naturally curious with an enduring passion to constantly improve my craft. I prefer to label myself as a problem solver rather than be defined by the variety of work I have performed. I am highly interested in the entire IT spectrum and constantly engage in everything it encompasses.</p>
            </div>
            <div class="basis-1/2">
                <img src="/ASSETS/HERO/hero-image-001.png" class="relative -bottom-24 left-20  translate-x-24 z-50"/>
                <img src="/ASSETS/HERO/hero-texture-001.png" class="absolute z-1 -bottom-56 right-0"/>
            </div>


        </div>
      
    </div>
  )
}

export default Hero
