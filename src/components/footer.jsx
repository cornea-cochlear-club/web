import React, { useState } from "react"
import EventPopLogo from "../../public/eventpop.svg"
import PinIcon from "../../public/pin.svg"
import InstagramLogo from "../../public/instagram.svg"

const Footer = () => {
  return (
    <div class="flex w-full justify-between px-4 mb-4 fixed bottom-0">
      <div class="flex space-x-2 justify-center items-center">
        <img src={InstagramLogo.src} class="w-[20px]" />
        <a
          href="https://www.instagram.com/corneacochlearclub/"
          target="_blank"
        >
          Cornea Cochlear Club
        </a>
      </div>

      <div class="flex space-x-12">
        {/* sponsor logos */}
        <img src={EventPopLogo.src} class="w-[40px] mr-2" />
        <img src={EventPopLogo.src} class="w-[40px] mr-2" />
        <img src={EventPopLogo.src} class="w-[40px] mr-2" />
      </div>
    </div>
  )
}

export default Footer