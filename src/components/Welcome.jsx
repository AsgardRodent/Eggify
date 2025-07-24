import React, { useState } from 'react'
import Egg from '../assets/RelaxedEgg.png'
import ButtonBg from '../assets/pixel_button_yellow.svg'
import Menu from './menu'

const Welcome = () => {
  const [showHome, setShowHome] = useState(true)

  return (
    <div className="w-full h-[650px] bg-[#264941] rounded-2xl flex flex-col items-center justify-center p-4 sm:p-6 border-8 border-[#4d2d06]">
      {showHome ? (
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <div className="text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            <h1>Eggcellent Mornings</h1>
            <h1>Start Here</h1>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src={Egg} alt="Relaxed Egg" className="w-[80%] max-h-[75%] object-contain" />
          </div>
          <div className="w-full flex items-center justify-center mt-4">
            <div className="relative w-[40%] aspect-[3/1] hover:scale-95 duration-150">
              <img
                src={ButtonBg}
                alt="Start Button"
                className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
              />
              <button
                className="w-full h-full flex items-center justify-center font-pixel text-black z-10 relative"
                onClick={() => {
                  setShowHome(false)
                }}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Menu />
      )}
    </div>
  )
}

export default Welcome
