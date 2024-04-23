import React from 'react'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Torch() {
    const light = useRef()

    useFrame((state) => {
        light.current.position.x = state.mouse.x * 10
        light.current.position.y = state.mouse.y *10
        light.current.position.z = state.mouse.y &&state.mouse.x ? 5 : 900

       
    })

    return (
        <pointLight ref={light} position={[900,900,900]} intensity={30} color="#FFF" />
    )
}

export default Torch