import React from 'react'

function Header() {
  return (
    <div class="mx-auto  bg-komorebi-light p-10 flex flex-row isolate z-50 left-0 right-0 overflow-hidden items-center justify-center align-center">
        <div class="basis-1/3 flex items-center pl-14">
            <img src="/ASSETS/komorebi-logo.png" class="h-14"/>
        </div>

        <div class="basis-1/3 flex flex-row gap-10 font-bold text-komorebi-dark text-center">
            <a href="#" class="duration-200 hover:text-komorebi-lgreen"> HOME </a>
            <a href="#" class="duration-200 hover:text-komorebi-lgreen"> EXPERIENCE </a>
            <a href="#" class="duration-200 hover:text-komorebi-lgreen"> PORTFOLIO </a>
            <a href="#" class="duration-200 hover:text-komorebi-lgreen"> CASE </a>
            <a href="#" class="duration-200 hover:text-komorebi-lgreen"> CONTACT </a>
        </div>

        <div class="basis-1/3 flex flex-row gap-5 items-center justify-center align-center text-2xl  text-komorebi-dark">

            <i class="hover:text-komorebi-lgreen duration-200 lni lni-github-original"></i>
            <i class="hover:text-komorebi-lgreen duration-200 lni lni-discord-alt"></i>
            <i class="hover:text-komorebi-lgreen duration-200 lni lni-linkedin-original"></i>
        </div>
    </div>
  )
}

export default Header
