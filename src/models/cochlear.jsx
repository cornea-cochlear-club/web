import React, { useRef, useState, useEffect } from "react"
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useFrame, useLoader } from "@react-three/fiber"
import { useGLTF } from '@react-three/drei'

import { useSpring, animated } from "@react-spring/three"

export function Model(props) {
  const obj = useLoader(OBJLoader, "/models/cochlear.obj")
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.y -= 0.005
  })

  return (
    <animated.group
      onPointerEnter={props.handlePointerEnterCrt}
      onPointerLeave={props.handlePointerLeaveCrt}
      dispose={null}
      ref={ref}
      onClick={props.handleClickCrt}
      position={props.position}
    >
      <primitive object={obj} scale={0.2} />
    </animated.group>
  )
}
