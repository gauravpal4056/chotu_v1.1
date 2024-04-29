import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from 'gsap';

function Body() {
    const dynamic = "Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated."
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
      const tl = gsap.timeline();
      tl.fromTo(
      textRef.current.children,
      { opacity: 0, y: '100%' },
      { opacity: 1, y: '0%', stagger: 0.1, duration: 1, ease: 'power2.out', delay:2 }
      );

  }, []);








    return (
        <section ref={containerRef} >
            <div  className="overflow-hidden h-screen w-screen  text-9xl  md:text-[15.5em] font-[1000] flex items-start md:items-center justify-center">
              <div ref={textRef} className='flex items-end md:gap-60 justify-center overflow-hidden mt-14'>
                <h1 className=" text-gray-600/50  ">CH</h1>
                <h1 className=" text-gray-600/50  md:hidden">O</h1>
                <h1 className=" text-gray-600/50  ">TU</h1>
              </div>
            </div>            
            <div className='overflow-hidden flex items-center justify-start h-screen w-screen p-10'>
              <motion.div 
                style={{ width: "540px" }} className='col overflow-hidden' 
                initial={{ opacity: 0, x:-100 }}
                whileInView={{ opacity: 1, x:0 }}
                transition={{ duration: 1 }}
                // viewport={{ once: false, amount: 0.6 }}
              >
                <h2 style={{ maxWidth: "440px" }}>Loop Mode</h2>
                <p style={{ maxWidth: '440px' }}>{dynamic}</p>                
                <button>Read more</button>
              </motion.div>
            </div>

            <div className='flex items-center justify-end h-[100vh] w-screen p-10'>
              <div className='col' style={{  width: "540px"}}>
                <h2 style={{ maxWidth: "440px" }}>Dynamic Mode</h2>
                  <p style={{ maxWidth: '440px' }}>{
                    dynamic.split(" ").map((letter, index) => {
                      return (
                        <motion.span
                          initial={{opacity:0, x:-100}}
                          whileInView={{opacity:1, x:0}}
                          transition={{ staggerChildren: 0.01, duration:0.5, delay:index/20 }} // Adjust the stagger duration as needed
                          viewport={{ once: true, amount: 0.6 }}
                        >
                          {letter + " "}   
                        </motion.span>
                      )
                    })
                  }</p>                
                <button>Read more</button>
              </div>
            </div>
            <div className='h-screen w-screen flex items-end p-20  justify-center '>
              <button  >Buy now</button>
            </div>
        </section>
    )
}

export default Body