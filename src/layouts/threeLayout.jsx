import { createRoot } from "react-dom/client"
import Scene from "../subpages/index/threejs/scene"
import { Canvas } from "@react-three/fiber"
import EventPopLogo from "../../public/eventpop.svg"
import PinIcon from "../../public/pin.svg"
import InstagramLogo from "../../public/instagram.svg"

export const render = () =>
  createRoot(document.getElementById("root")).render(
    <>
      <Canvas>
        <Scene />
      </Canvas>
      <div className="absolute inset-0 flex flex-col h-[calc(100%_-_64px)]">
        <div className="flex flex-col relative w-full items-center flex-grow">
          <p className="flex text-white  font-display text-2xl">
            Cornea Cochlear Club
          </p>
          <p className="">presents</p>
          <div className="flex flex-col justify-center items-center">
            <p className="relative flex font-mono mt-2">
              Live-Coding Audio/Visual
            </p>
            <div className="flex justify-center items-center my-4">
              <p className="relative flex text-white font-display text-[6rem]">
                Cybernaut Party
              </p>
              <p className="absolute  text-[#00ff00] font-mono text-[5rem] inline-block scale-y-[2]">
                CYBERNAUT PARTY
              </p>
            </div>
            <p className="relative flex text-[#00ff00] font-mono -top-[1rem] scale-x-[1.8] scale-y-[2.9]">
              THE STREET FINDS ITS OWN USES FOR THINGS
            </p>

            <div className="flex flex-col justify-center items-center leading-tight mt-4 text-2xl">
              <p className="font-mono"> 7 June 2024, 19:00 onward </p>
              <div className="flex space-x-2 justify-center items-center mt-2">
                <img src={PinIcon.src} className="w-[20px]" />
                <a
                  href="https://www.google.com/maps?sca_esv=9ef43ef143c24271&output=search&q=unformat+studio&source=lnms&entry=mc&ved=1t:200715&ictx=111"
                  target="_blank"
                >
                  Unformat Studio BKK, Thailand
                </a>
              </div>
            </div>

            <ol className="grid grid-cols-3 gap-4 my-12 w-full text-center font-mono mt-4 text-[#ff006a] leading-tight text-xl">
              <a href="https://www.instagram.com/kastakila_" target="_blank" className="hover:text-white">kastakila (NYC)</a>
              <a href="https://www.instagram.com/reckonermusic" target="_blank" className="hover:text-white">Reckoner (NYC)</a>
              <a href="https://www.instagram.com/emptyflash_" target="_blank" className="hover:text-white">emptyflash (NYC)</a>
              <a href="https://www.instagram.com/renickbell" target="_blank" className="hover:text-white">Renick Bell (HCMC)</a>
              <a href="https://www.instagram.com/lebactan" target="_blank" className="hover:text-white">Le-Bac-Tan (HCMC)</a>
              <a href="https://www.instagram.com/in.mintcondition_" target="_blank" className="hover:text-white">inmintcondition (BKK)</a>
              <a href="https://www.instagram.com/varut_o" target="_blank" className="hover:text-white">Varut_O (BKK)</a>
              <a href="https://www.instagram.com/roma_or_am_i" target="_blank" className="hover:text-white">Palindroma (BKK, RU)</a>
              <a href="https://www.instagram.com/giang_ws" target="_blank" className="hover:text-white">WrappedByte (BKK)</a>
              <a href="https://www.instagram.com/crsrcrsrrr" target="_blank" className="hover:text-white">CRSRCRSR (BKK)</a>
              <a href="https://www.instagram.com/msyves" target="_blank" className="hover:text-white">Msyves (BKK)</a>
              <a href="https://www.instagram.com/karnpapon" target="_blank" className="hover:text-white">Karnpapon Boonput (BKK)</a>
            </ol>

            <a
              type="button"
              href="https://www.eventpop.me/e/36130/cybernaut-party"
              target="_blank"
              className="text-gray-900 bg-[#00ff00] hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg p-2 pr-3 text-center text-xl inline-flex items-center  me-2 mb-2"
            >
              <img src={EventPopLogo.src} className="w-[30px] mr-2" />
              Get The Ticket
            </a>
          </div>
        </div>

        <div className="flex w-full justify-between px-4 mb-4">
          <div className="flex space-x-2 justify-center items-center">
            <img src={InstagramLogo.src} className="w-[20px]" />
            <a
              href="https://www.instagram.com/corneacochlearclub/"
              target="_blank"
            >
              Cornea Cochlear Club
            </a>
          </div>

          <div className="flex space-x-12">
            {/* sponsor logos */}
            <img src={EventPopLogo.src} className="w-[40px] mr-2" />
            <img src={EventPopLogo.src} className="w-[40px] mr-2" />
            <img src={EventPopLogo.src} className="w-[40px] mr-2" />
          </div>
        </div>
      </div>
    </>
  )
