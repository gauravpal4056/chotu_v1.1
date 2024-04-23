import { ScrollControls, Scroll, RoundedBox ,ContactShadows, Environment, Float ,Sparkles, Backdrop , Plane} from "@react-three/drei"
import {Chotu} from "./components/Chotu"
import {useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber'
import { useLayoutEffect } from "react";
import Torch from "./components/Torch";
import Loader from "./components/Loader";

function App() {

  const triggerElement = useRef(null);
  const moth = useRef(null);

  // Initialize ScrollTrigger when the component mounts
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#8a8a8a"/></svg>'
        )}'), auto`
  }, [])

  useLayoutEffect(() => {
    if (isMounted) {
      // Ensure ScrollTrigger is available
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        console.log(moth.current);
        // Create a GSAP timeline for the animation
        // gsap.to(moth.current.scale, {
        //   scrollTrigger: {
        //     trigger: triggerElement.current,
        //     start: 'top center',
        //     end: 'bottom center',
        //     scrub: true,
        //   },
        //   x: 1.5,
        //   y: 1.5,
        //   z: 1.5,
        // });
      }
    }
  }, [isMounted]);

  useEffect(() => {
    console.log(triggerElement);
    console.log(moth.current);
    // Ensure ScrollTrigger is available
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Create a GSAP timeline for the animation
      // gsap.to(moth.current.scale, {
      //     scrollTrigger: {
      //       trigger: triggerElement.current,
      //       start: 'top center',
      //       end: 'bottom center',
      //       scrub: true,
      //     },
      //     x: 1.5, // Example animation (scale trigger element)
      //     y: 1.5,
      //     z: 1.5, // Example animation (scale trigger element)
      //   });
    }
  }, [moth.current]);



  return (
    <>
    
    <Canvas 
      shadows
      style={{position:'fixed', }}
    >
      <color attach="background" args={['#d0d0d0']} />
      <ambientLight intensity={0.4} />
      <Torch />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />      
      <Environment  preset="city"   blur={1} />
      <ContactShadows resolution={256} position={[0, -2, 0]} opacity={0.3} scale={8} blur={4} far={3} />
      <ScrollControls pages={6} damping={0.1}> 
      
        <Chotu ref={moth} castShadow scale={0.04} />

        <Scroll>
        </Scroll>
        <Scroll html style={{width:'100%'}}>
            <header className="z-30  w-full py-5 sm:px-10 px-5 flex justify-between items-center">
              <div className="flex w-full screen-max-width">
              <img width="32" height="32" src="https://img.icons8.com/led/32/naruto-sign.png" alt="naruto-sign"/>
                <div className="flex flex-1 justify-center max-sm:hidden">
                  
                  <div key={1} className="px-5 text-sm cursor-pointer text-gray-500 hover:text-black   transition-all">
                  Life goes on and on
                </div>
        
                </div>
        
                {/* <div class="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                  <button class="bg-slate-500 px-2 py-1 hover:bg-black rounded-lg text-white">Buy now </button>
                </div> */}
              </div>
            </header>
            <div className="h-screen w-screen text-[15.5em] font-[1000] flex items-center gap-60 justify-center">
              <h1 className=" text-gray-600/50 -z-10">CH</h1>
              <h1 className=" text-gray-600/50 -z-10">TU</h1>
            </div>            
            <div className='flex items-center justify-start h-screen w-screen p-10'>
              <div className='col' style={{  width: "540px"}}>
                <h2 style={{ maxWidth: "440px" }}>Loop Mode</h2>
                <p style={{ maxWidth: '440px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>                
                <button>Read more</button>
              </div>
            </div>

            <div className='flex items-center justify-end h-screen w-screen p-10'>
              <div className='col' style={{  width: "540px"}}>
                <h2 style={{ maxWidth: "440px" }}>Dynamic Mode</h2>
                <p style={{ maxWidth: '440px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>                
                <button>Read more</button>
              </div>
            </div>
            
            <h2 style={{ position: 'absolute', top: '350vh', left: '50%', transform: `translate(-50%,-50%)` }}>Cutting-Edge of IOT</h2>              

            <button style={{ position: 'absolute', top: `590vh`,left: '50%', transform: `translate(-50%,-50%)` }}>Buy now</button>
        </Scroll>
      </ScrollControls>
      </Canvas>
    </>
  )
}

export default App
