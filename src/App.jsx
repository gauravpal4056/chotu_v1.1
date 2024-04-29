import { ScrollControls, Scroll ,ContactShadows, Environment, Loader } from "@react-three/drei"
import {Chotu} from "./components/Chotu"
import {useEffect, useRef,useState  } from 'react'

import { Canvas, } from '@react-three/fiber'
import Torch from "./components/Torch";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Loader1 from './components/Loader1.jsx' 
import { Suspense } from "react";
import { LoadingManager } from "three";
function App() {

  const moth = useRef(null);
  const loadingManager = new LoadingManager();
  loadingManager.onProgress = (url, loaded, total)=> {
    console.log("loading");
  }

  useEffect(() => {
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#8a8a8a"/></svg>'
        )}'), auto`
  }, [])

  return (
      <>
        <Loader1 />
        <Suspense fallback={null}>
          <Canvas 
          shadows
          style={{position:'fixed', }}
          >
            <color attach="background" args={['#d0d0d0']} />
            <ambientLight intensity={0.4} />
            {/* <Torch /> */}
            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />      
            <Environment  preset="city"   blur={1} />
            <ContactShadows resolution={256} position={[0, -2, 0]} opacity={0.3} scale={8} blur={4} far={3} />
            <ScrollControls pages={4.2} damping={0.1}> 
              <Chotu ref={moth} castShadow scale={0.04} />
              <Scroll>
              </Scroll>
              <Scroll html style={{width:'100%', height:'100%'}}>
                <Nav />
                <Body />
              </Scroll>
            </ScrollControls>
          </Canvas>
        </Suspense>
      </>
    )
}

export default App
