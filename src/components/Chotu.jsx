
import React, { useLayoutEffect, useRef, useEffect, useState, forwardRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'
import { Vector3, Color, Euler } from 'three'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three'


export const Chotu= forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./models/chotu-transformed.glb')
  const [mouseIn, setMouseIn] =  useState(true)
  const [face, setFace] =  useState(null)

  // const ref = useRef()
  const scroll = useScroll();
  const tl = useRef()

  gsap.registerPlugin(ScrollTrigger);

  // const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/videoTexture.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  // useEffect(() => void video.play(), [video])

  const videoTextures = useRef([
    new THREE.VideoTexture(document.createElement('video')),
    new THREE.VideoTexture(document.createElement('video')),
    new THREE.VideoTexture(document.createElement('video')),
  ]);
  const videos = useRef([null, null, null]);

  useEffect(() => {
    videos.current[0] = videoTextures.current[0].image;
    videos.current[0].src = '/leftFace.mp4';
    videos.current[0].crossOrigin = 'Anonymous';
    videos.current[0].loop = true;
    videos.current[0].muted = true;
    videos.current[0].play();

    videos.current[1] = videoTextures.current[1].image;
    videos.current[1].src = '/centerFace.mp4';
    videos.current[1].crossOrigin = 'Anonymous';
    videos.current[1].loop = true;
    videos.current[1].muted = true;
    videos.current[1].play();

    videos.current[2] = videoTextures.current[2].image;
    videos.current[2].src = '/rightFace.mp4';
    videos.current[2].crossOrigin = 'Anonymous';
    videos.current[2].loop = true;
    videos.current[2].muted = true;
    videos.current[2].play();

    setFace(videoTextures.current[1]);

  //   videoTextures.current.forEach(texture => {
  //     // texture.center.set(0.5, 0.5);
  //     // texture.rotation = Math.PI ;
  //     const marginFactor = -0.1; // Adjust this value to determine the margin as a percentage of the texture size
  //     texture.repeat.set(1 - marginFactor * 2, 1 - marginFactor * 2); // Reduce the texture's repeat to create padding
  //     texture.offset.set(marginFactor, marginFactor);
  // });

    return () => {
      videos.current.forEach(video => video.pause());
    };
  }, []);

  const handleMouseMove = (event) => {
    const xPosition = event.clientX / window.innerWidth;

    if (xPosition < 0.33) {
      setFace(videoTextures.current[0]); // Left face
    } else if (xPosition < 0.66) {
      setFace(videoTextures.current[1]); // Center face
    } else {
      setFace(videoTextures.current[2]); // Right face
    }
  };

  useEffect(() => {
    const handleMouseLeave = () => {
      setMouseIn(false);
    };
  
    const handleMouseEnter = () => {
      setMouseIn(true);
    };
  
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);

    gsap.to(ref.current.rotation, { duration: 1, x: 0, y: 0, z: 0 , ease: 'power1.inOut'});

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);

    };
  },[])
 


  useFrame((state, delta)=>{
    tl.current.seek(scroll.offset*tl.current.duration())
  },[])


  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8)
    ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7 - 1.7;
  })



  useFrame(({ mouse }) => {
    if (ref.current && !window.matchMedia('(max-width: 768px)').matches && mouseIn) {
      const target = new Vector3(mouse.x * 5, mouse.y * 5, +8);
      const lookAtPoint = new Vector3(mouse.x, mouse.y, 0.9);
      const targetEuler = new Euler().setFromVector3(lookAtPoint.sub(ref.current.position).normalize());
      gsap.to(ref.current.rotation, { duration: 1, x: -targetEuler.y + 0.6, y: targetEuler.x, z: 0 });
    }
  });

  useLayoutEffect(() =>{
    if(!mouseIn){
      gsap.to(ref.current.rotation, { duration: 1, x: 0, y: 0, z: 0 , ease: 'power1.inOut'});
    }
  
  },[mouseIn])
  useLayoutEffect(()=> {
    tl.current = gsap.timeline({defaults: {duration:2, ease: 'power1.inOut'}})
    // gsap.from(ref.current.scale, { x: 0.06, y: 0.06, z: 0.06,  duration: 1, delay: 1.5, ease: 'power2.out' })
    // gsap.from(ref.current.position, { y: -1.6,  duration: 1, delay: 1.5, ease: 'power2.out' })
    // gsap.from(ref.current.rotation, { x:0,  duration: 1, delay: 1.5, ease: 'power2.out' })
    tl.current
      .to(ref.current.position, {x: 1}, 2)
      .to(ref.current.scale, { x: 0.06, y: 0.06, z: 0.06 }, 2)
      .to(ref.current.position, {x: -2}, 6)
      .to(ref.current.position, {x: 0}, 11)
      .to(ref.current.position, {x: 0}, 13)
      .to(ref.current.position, {x: 0}, 16)
      .to(ref.current.position, {x: 0}, 20)  
      .to(ref.current.scale, { x: 0.04, y: 0.04, z: 0.04 }, 20);
  }, []);

  return (
    <>
      <group ref={ref} {...props}  position={[0, -1.4, 0]} dispose={null}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh toneMapped={false} receiveShadow castShadow geometry={nodes.Simple_Assembly_2_1.geometry} material={materials['Glass_(Solid)_White_#1']} >
            {face&&<meshBasicMaterial map={face} />}
          </mesh>
          <mesh receiveShadow castShadow geometry={nodes.Simple_Assembly_2_2.geometry} material={materials['Hard_Rough_Plastic_Blue_#1']} />

      
        </group>
      </group>
    </>
    
  )
})

useGLTF.preload('./models/chotu-transformed.glb')
