import React from 'react'

function portfolio() {
  return (
    <div class="bg-komorebi-dark py-20 flex flex-col items-center">
        <h1 class="text-white text-6xl font-bold"> Portfolio </h1>

        <p class="mt-5 mb-20 text-white text-center w-1/2 text-gray-400"> Welcome to my portfolio, a curated collection of my creative endeavors in graphic design, branding, and web development. A diverse range of projects that showcase my passion for design and my commitment to delivering impactful solutions for clients across various industries.</p>
        
        <div class="flex flex-row">

          <div class="portfolio-card basis-1/2 bg-komorebi-dark-2 overflow-hidden relative flex flex-col align-items-end justify-end  min-height-40 flex flex-col text-left rounded-2xl min-h-52 group">
            <img class="w-1/2 card-img-1 absolute left-5" src="/ASSETS/PORTFOLIO/GO-SITE-v1.png"/>
            <img class="w-1/2 card-img-2 absolute right-5" src="/ASSETS/PORTFOLIO/GO-SITE-v1.png"/>
            
            <div class="relative bottom-0 p-10 card-desc -bottom-1/2 duration-500  group-hover:bottom-0">
              <h1 class="text-white font-bold text-3xl"> GO GLOBAL</h1>
              <p class="mt-5 text-white ">GO GLOBAL, a visionary company specializing in Global digital solutions, entrusted me with the task of creating a dynamic online presence to showcase their diverse range of products and services.</p>
            </div>
          </div>

        </div>


    </div>
  )
}

export default portfolio
