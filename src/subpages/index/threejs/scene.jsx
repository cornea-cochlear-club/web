import React, { useState, useEffect } from "react"
import { Model } from "../../../models/cochlear"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { extend } from "@react-three/fiber"
import { EffectComposer, Bloom, Noise, DepthOfField } from "@react-three/postprocessing"
import { BlendFunction } from 'postprocessing'


extend({ TextGeometry })

export default function Scene() {
  const [isHover, setHover] = useState(false)
  const handlePointerEnterCrt = () => {
    setHover(true)
  }
  const handlePointerLeaveCrt = () => setHover(false)

  const handleClickCrt = () => {
    console.log("click")
  }

  useEffect(() => {
    const topLayerInformation = document.querySelector('#information')
    topLayerInformation.addEventListener("mousemove", (event) => {
      const proportionX = event.x / window.innerWidth
      const proportionY = event.y / window.innerHeight
      console.log(proportionX)
      if (proportionX > 0.4 && proportionX < 0.6 && proportionY > 0.3 && proportionY < 0.6) {
        setHover(true)
      } else {
        setHover(false)
      }
    })
  }, [])

  return (
    <>
      <group>
        <EffectComposer>
          <Bloom
            mipmapBlur
            radius={0.7}
            luminanceThreshold={0}
            luminanceSmoothing={1.3}
          />
          <Noise opacity={0.04}/>
          {
            isHover && (
              <>
 
                <Bloom
                  radius={3.1}
                  luminanceThreshold={0}
                  luminanceSmoothing={0.3}
                />
                <Noise opacity={0.05}/>
                <DepthOfField
                  focusDistance={0} // where to focus
                  focalLength={0.02} // focal length
                  bokehScale={5} // bokeh size
                />
              </>
            )
          }
        </EffectComposer>
        <pointLight position={[0.5, 0.2, 0]} />
        <ambientLight intensity={0.15} />
        <Model
          handleClickCrt={handleClickCrt}
          handlePointerEnterCrt={handlePointerEnterCrt}
          handlePointerLeaveCrt={handlePointerLeaveCrt}
          position={[0.2, 0.2, 0]}
        />
      </group>
      
    </>
  )
}
