import { createRoot } from "react-dom/client"
import Scene from "../subpages/index/threejs/scene"
import { Canvas } from "@react-three/fiber"

export const render = () =>
  createRoot(document.getElementById("root")).render(
    <>
      <Canvas>
        <Scene />
      </Canvas>
      <div className="absolute inset-0">
        <div className="flex flex-col relative w-full h-full items-center">
          <p className="flex text-white  font-display text-2xl">Cornea Cochlear Club</p>
          <p className="">present</p>
          <div className="flex flex-col justify-center items-center">
            <p className="relative flex font-mono mt-2">Live-Coding Audio/Visual</p>
            <div className="flex justify-center items-center my-4">
              <p className="relative flex text-white font-display text-[6rem]">Cybernaut Party</p>
              <p className="absolute  text-[#00ff00] font-mono text-[5rem] inline-block scale-y-[2]">CYBERNAUT PARTY</p>
            </div>
            <p className="relative flex text-[#00ff00] font-mono -top-[1rem] scale-x-[1.8] scale-y-[2.9]">THE STREET FINDS ITS OWN USES FOR THINGS</p>
            <ol className="flex flex-col justify-center items-center space-y-2 font-mono mt-4 text-[#ff006a] leading-tight text-xl">
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
              <li>Karnpapon Boonput (Former "The ███████", BKK)</li>
            </ol>

            <div>
              {/* sponsor logos */}
            </div>
          </div>
        </div>
        </div>
    </>
  )
