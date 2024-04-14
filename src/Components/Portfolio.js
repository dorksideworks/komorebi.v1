import React from 'react'

function Portfolio() {
  return (
    <div class=" py-20 flex flex-col items-center z-50">
        <h1 class="text-white text-6xl font-bold"> Portfolio </h1>

        <p class="mt-5 mb-20 text-white text-center w-1/2 text-gray-400"> Welcome to my portfolio, a curated collection of my creative endeavors in graphic design, branding, and web development. A diverse range of projects that showcase my passion for design and my commitment to delivering impactful solutions for clients across various industries.</p>
        
        <div class="flex flex-row gap-10">

          <div class="portfolio-card group basis-1/2 bg-komorebi-dark-2 overflow-hidden relative flex flex-col align-items-end justify-end  min-height-40 flex flex-col text-left rounded-2xl min-h-52 ">
            <img class="card-img-1 duration-500 absolute left-5 grayscale " src="/ASSETS/PORTFOLIO/GO-SITE-v1.png"/>
            <img class="card-img-2 duration-500 absolute right-5 grayscale " src="/ASSETS/PORTFOLIO/GO-SITE-v1.png"/>
            
            <div class="relative bottom-0 p-10 card-desc -bottom-1/2 duration-500 group-hover:bottom-0"> 

              <h1 class="text-komorebi-lgreen font-bold text-3xl flex flex-row align-center items-center gap-2"> GO Global Website <img class="inline w-5" src="/ASSETS/PORTFOLIO/up-right-arrow.png"/></h1>
              <p class="mt-2 text-gray-400 ">GO GLOBAL, a visionary company specializing in Global digital solutions, entrusted me with the task of creating a dynamic online presence to showcase their diverse range of products and services.</p>

              <div class="flex flex-row flex-wrap gap-2 mt-5 text-sm font-bold">
                <div class="py-2 px-5 bg-komorebi-dgreen text-komorebi-lgreen rounded-full float-left"> ReactJS </div>
                <div class="py-2 px-5 bg-komorebi-dgreen text-komorebi-lgreen rounded-full float-left"> NodeJS </div>
                <div class="py-2 px-5 bg-komorebi-dgreen text-komorebi-lgreen rounded-full float-left"> Javascript </div>
                <div class="py-2 px-5 bg-komorebi-dgreen text-komorebi-lgreen rounded-full float-left"> Figma </div>
              </div>
            </div>
          </div>

          <div class="portfolio-card group basis-1/2 bg-komorebi-dark-2 overflow-hidden relative flex flex-col align-items-end justify-end  min-height-40 flex flex-col text-left rounded-2xl min-h-52">

            <img class="card-img-1 duration-500 absolute left-5 grayscale " src="/ASSETS/PORTFOLIO/GO-SITE-v1.png"/>
            <img class="card-img-2 duration-500 absolute right-5 grayscale " src="/ASSETS/PORTFOLIO/GO-SITE-v1.png"/>

            <div class="relative bottom-0 p-10 card-desc -bottom-1/2 duration-500 group-hover:bottom-0"> 
              <h1 class="text-komorebi-lgreen font-bold text-3xl flex flex-row align-center items-center gap-2"> GO Global Website <img class="inline w-5" src="/ASSETS/PORTFOLIO/up-right-arrow.png"/></h1>
              <p class="mt-2 text-gray-400 ">GO GLOBAL, a visionary company specializing in Global digital solutions, entrusted me with the task of creating a dynamic online presence to showcase their diverse range of products and services.</p>

              <div class="flex flex-row flex-wrap gap-2 mt-5 text-sm font-bold">
                <div class="py-2 px-5 bg-komorebi-dgreen text-komorebi-lgreen rounded-full float-left"> ReactJS </div>
                <div class="py-2 px-5 bg-komorebi-dgreen text-komorebi-lgreen rounded-full float-left"> NodeJS </div>
                <div class="py-2 px-5 bg-komorebi-dgreen text-komorebi-lgreen rounded-full float-left"> Javascript </div>
                <div class="py-2 px-5 bg-komorebi-dgreen text-komorebi-lgreen rounded-full float-left"> Figma </div>
              </div>
            </div>

       
          </div>

        </div>


    </div>
  )
}

export default Portfolio
