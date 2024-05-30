import React, { useState } from "react"
import { Model } from "../../../models/cochlear"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { extend } from "@react-three/fiber"
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing"

extend({ TextGeometry })

export default function Scene() {

  const handleClickCrt = () => {
    console.log("click")
  }

  const [isHover, setHover] = useState(false)
  const handlePointerEnterCrt = () => setHover(true)
  const handlePointerLeaveCrt = () => setHover(false)

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
