import React, { useState } from "react"
import EventPopLogo from "../../public/eventpop.svg"
import InstagramLogo from "../../public/instagram.svg"
import Pwin from "../../public/sponsors/pwin.png"
import SquareDot from "../../public/sponsors/SquareDots-Logo-Final_White-1.svg"
import Synap from "../../public/sponsors/synap-logo-1.svg"
import Unformat from "../../public/sponsors/unformat-logo-transparent-1.svg"

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
        <img src={Synap.src} class="w-[45px] mr-2" />
        <img src={Unformat.src} class="w-[60px] mr-2" />
        <img src={SquareDot.src} class="w-[45px] mr-2" />
        <img src={Pwin.src} class="w-[40px] mr-2" />
      </div>
    </div>
  )
}

export default Footer