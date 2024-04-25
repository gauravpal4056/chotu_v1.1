import React from 'react'

function Nav() {
  return (
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
  )
}

export default Nav