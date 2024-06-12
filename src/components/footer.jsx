import React, { useState } from "react"
import EventPopLogo from "../../public/eventpop.svg"
import InstagramLogo from "../../public/instagram.svg"
import Pwin from "../../public/sponsors/pwin.png"
import SquareDot from "../../public/sponsors/SquareDots-Logo-Final_White-1.svg"
import Synap from "../../public/sponsors/synap-logo-1.svg"
import Unformat from "../../public/sponsors/unformat-logo-transparent-1.svg"
import Cleverse from "../../public/sponsors/cleverse.png"
import DigitalBoyz from "../../public/sponsors/dgboyz.png"

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

      <div class="flex space-x-6">
        {/* sponsor logos */}
        <img src={Synap.src} class="w-[45px]" />
        <img src={Unformat.src} class="w-[60px]" />
        <img src={SquareDot.src} class="w-[45px]" />
        <img src={Pwin.src} class="w-[40px]" />
        <div class="flex space-x-2">
          <img src={Cleverse.src} class="w-[80px] object-contain" />
          <img src={DigitalBoyz.src} class="w-[100px] object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Footer