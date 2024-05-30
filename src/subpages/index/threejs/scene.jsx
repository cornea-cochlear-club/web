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
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        </EffectComposer>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model
          handleClickCrt={handleClickCrt}
          handlePointerEnterCrt={handlePointerEnterCrt}
          handlePointerLeaveCrt={handlePointerLeaveCrt}
        />
      </group>
    </>
  )
}
