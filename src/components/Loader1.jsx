import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import gsap from 'gsap';
import { useProgress } from '@react-three/drei';
function Loader1() {
    const ref= useRef()
    const {progress} = useProgress()
    useEffect(() => {
            if(progress==100 ){
                gsap.to(ref.current, {
                    duration: 1, // Animation duration in seconds
                    opacity: 0, // Slide out to the right
                    ease: "power2.out",
                    onComplete:() => {ref.current.style.display = 'none'} // Easing function for smooth animation
                })
            }
    }, [progress]);

    const styles={
        display: 'flex' ,
        
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height:'100%',
        width:'100%',
        font:'9em',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:'1'
    }
    return (
        <>
            <div ref={ref} id="loader" style={styles}  className='bg-[#f7f7f7] ' >
                <img className="invert h-20  "  src="/loader.png"/>
                <h1 className='text-gray-500 absolute right-1 font-bold italic text-5xl bottom-1'>{Math.round(progress * 10) / 10}%</h1>
            </div>
        </>
    )
}

export default Loader1