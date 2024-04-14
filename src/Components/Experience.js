import React from 'react'
import experience from '../Data/experience.json';

function Experience() {
  return (
    <div class="flex flex-row relative py-20">
        <div class="flex flex-row w-2/3 mx-auto left-0 right-0 gap-20 relative">
            <div class="basis-1/3 text-left">
                <h1 class="text-6xl font-bold text-komorebi-light"> Experience </h1>
                <p class="text-gray-500 text-xl mt-5"> Embark on a journey through my professional career, where each role has been a stepping stone towards growth and expertise. From early experiences to present accomplishments, I've cultivated a rich tapestry of skills and achievements. </p>
                <img src="/ASSETS/crystal-001.png"/>
                <img class="absolute blur-lg -top-3/4 isolate -left-1/2" src="/ASSETS/crystal-001.png"/>
            </div>
            <div class="basis-2/3 text-left flex flex-col gap-10">
                {
                 experience.map(function (object, i ) {

                    return (
                        <div class="rounded-xl flex flex-row">
                            <div class="date basis-1/3 text=right">
                                
                                <h2 class="font-bold text-komorebi-light text-right pr-10"> {object.timeline} </h2>

                            </div>
                            <div class="date basis-2/3 text-komorebi-light">
                                <h2 class="font-bold text-lg"> <span class="text-komorebi-lgreen"> {object.current_position.split('•', 1)} </span> • { object.current_position.split("•",2)} </h2>
                                
                                {object.past_position.map(function(pos, p) {
                                    
                                    return (<h2 class="text-lg text-gray-500"> {pos} </h2> )
                                })}
                            
        
                                <p class="my-3">{object.description}</p>
        
                                <ul class="list-none flex flex-row gap-2 mt-5 flex-wrap">
                                    {
                                        object.stack.map(function(obj, x) {
                                            return <li class="bg-komorebi-dgreen text-komorebi-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  {obj} </li>
                                            
                                        })
                                    }
                                </ul>
        
                            </div>
                        </div>
                    )
                 })   
                }

                {/* <div class="rounded-xl flex flex-row">
                    <div class="date basis-1/3">
                        <h2 class="font-bold text-komorebi-light text-right pr-10"> 2023 - PRESENT </h2>
                    </div>
                    <div class="date basis-2/3 text-komorebi-light">
                        <h2 class="font-bold text-lg"> <span class="text-komorebi-lgreen"> Web Developer </span> • Slim Mekni Marketing Services </h2>
                        <h2 class="text-lg text-gray-500"> Video Editor <br/> Graphics Designer </h2>

                        <p class="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus aliquet diam vitae hendrerit. Nunc interdum mauris et commodo cursus. In et velit in velit malesuada rhoncus. Vivamus in neque diam. Pellentesque sagittis, nunc in tempor pulvinar, tellus ex malesuada ex, ut posuere ligula arcu quis nunc.</p>

                        <ul class="list-none flex flex-row gap-2 mt-5 flex-wrap">
                            <li class="bg-komorebi-dgreen text-komorebi-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  NodeJS </li>
                            <li class="bg-komorebi-dgreen text-komorebi-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  Javascript </li>
                            <li class="bg-komorebi-dgreen text-komorebi-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  HTML & SASS </li>
                            <li class="bg-komorebi-dgreen text-komorebi-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  ReactJS </li>
                            <li class="bg-komorebi-dgreen text-komorebi-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  Photoshop </li>
                            <li class="bg-komorebi-dgreen text-komorebi-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  Illustrator </li>
                            <li class="bg-komorebi-dgreen text-komorebi-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  After Effects </li>
                            <li class="bg-komorebi-dgreen text-komorebi-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  Premiere </li>
                        </ul>

                    </div>
                </div> */}


            </div>
        
        </div>
    </div>
  )
}

export default Experience
