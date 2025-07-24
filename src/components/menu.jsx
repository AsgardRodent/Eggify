import React, { useState, useEffect } from 'react'
import DippyTimer from './DippyTimer'
import HardTimer from './HardTimer'
import RunnyTimer from './RunnyTimer'
import SoftTimer from './SoftTimer'
import DippyEgg from '../assets/DippyEgg.png'
import RunnyEgg from '../assets/RunnyEgg.png'
import SoftEgg from "../assets/SoftEgg.png"
import HardEgg from "../assets/HardEgg.png"
import ButtonBg from '../assets/pixel_button_yellow.svg'

const Choices = ["Dippy Eggs", "Runny Yolks", "Soft-Boiled Eggs", "Hard-Boiled Eggs"]

const Menu = () => {
  const [selectedEgg, setSelectedEgg] = useState(null)
  const [eggTitle, setEggTitle] = useState(null)

  useEffect(() => {
    if (selectedEgg !== null) setEggTitle(Choices[selectedEgg])
  }, [selectedEgg])

  return (
    <div className="w-full max-w-[560px] px-4 sm:px-6 flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl sm:text-3xl mb-4 font-light text-center">
        {eggTitle || "Select Your Egg"}
      </h1>

      {selectedEgg === null ? (
        <div className="grid grid-cols-2 gap-4">
          {[DippyEgg, RunnyEgg, SoftEgg, HardEgg].map((img, i) => (
            <div
              key={i}
              className="aspect-square w-32 sm:w-40 md:w-48 lg:w-52 border-8 border-[#2d1c0e] bg-[#37210c] rounded-3xl flex flex-col items-center justify-center hover:scale-105 hover:brightness-110 transition-all duration-150"
              onClick={() => setSelectedEgg(i)}
            >
              <img src={img} alt={Choices[i]} className="w-[70%] h-auto object-contain" />
              <h1 className="text-sm sm:text-base md:text-lg text-white text-center mt-2">
                {Choices[i].split(" ")[0]}<br />
                {Choices[i].split(" ").slice(1).join(" ")}
              </h1>
            </div>
          ))}
        </div>
      ) : (
        <>
          {selectedEgg === 0 && <DippyTimer />}
          {selectedEgg === 1 && <RunnyTimer />}
          {selectedEgg === 2 && <SoftTimer />}
          {selectedEgg === 3 && <HardTimer />}
          <div className="w-full flex items-center justify-center mt-4">
            <div className="relative w-40 h-14 sm:w-48 sm:h-16 hover:scale-95 duration-150">
              <img
                src={ButtonBg}
                alt="Back Button"
                className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
              />
              <button
                className="w-full h-full flex items-center justify-center font-pixel text-black z-10 relative"
                onClick={() => {
                  setSelectedEgg(null)
                  setEggTitle(null)
                }}
              >
                Back
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Menu
