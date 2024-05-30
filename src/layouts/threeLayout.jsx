import { createRoot } from "react-dom/client"
import Scene from "../subpages/index/threejs/scene"
import { Canvas } from "@react-three/fiber"
import EventPopLogo from "../../public/eventpop.svg"
import PinIcon from "../../public/pin.svg"

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

            <p className="text-2xl font-mono text-[#00ff00]">[7 June 2024, 19:00 onward]</p>

            <ol className="grid grid-cols-3 gap-4 my-12 w-1/2 text-center font-mono mt-4 text-[#ff006a] leading-tight text-xl">
              <li>kastakila (NYC)</li>
              <li>Reckoner (NYC)</li>
              <li>emptyflash (NYC)</li>
              <li>Renick Bell (HCMC)</li>
              <li>Le-Bac-Tan (HCMC)</li>
              <li>inmintcondition (BKK)</li>
              <li>Varut_O (BKK)</li>
              <li>Palindroma (BKK, RU)</li>
              <li>WrappedByte (BKK)</li>
              <li>CRSRCRSR (BKK)</li>
              <li>Karnpapon Boonput (BKK)</li>
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
          <div className="flex space-x-4 justify-center items-center">
            <img src={PinIcon.src} className="w-[20px]"/>
            <a href="https://www.google.com/maps?sca_esv=9ef43ef143c24271&output=search&q=unformat+studio&source=lnms&entry=mc&ved=1t:200715&ictx=111" target="_blank">Unformat Studio, Lat Phrao, BKK, Thailand</a>
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
