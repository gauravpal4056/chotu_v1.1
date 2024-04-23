import React from 'react'
import { useState, useEffect } from 'react'
import gsap from 'gsap';
function Loader() {

    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            gsap.to("#loader", {
                duration: 1, // Animation duration in seconds
                opacity: 0, // Slide out to the right
                ease: "power2.out", // Easing function for smooth animation
                onComplete:  () => setShowLoader(false)// Call hideLoader() after animation completes
            });
           
        }, 900); // Set the duration of the loader in milliseconds (2 seconds)
        return () => clearTimeout(timer);
    }, []);

    const styles={
        display: showLoader ? 'flex' : 'none',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height:'100%',
        width:'100%',
        font:'9em',
        color:'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div id="loader" style={styles}  className='bg-white' >
            <img className="invert scale-50"  src="/loader.png"/>

        </div>
    )
}

export default Loader