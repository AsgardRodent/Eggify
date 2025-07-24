import React, { useEffect, useState } from 'react'
import bgVideo from "../assets/RunnyEggBg.mp4"

const RunnyTimer = () => {

    const initialTime = 6 * 60

    const [timeLeft , setTimeLeft] = useState(initialTime)

    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let timerId;

        if (isRunning && timeLeft > 0){
            timerId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1) 
            }, 1000);
        }
        else if(timeLeft ===  0){
            setIsRunning(false)
            clearInterval(timerId)
            console.log("Runny Yolks All Aboard !!!!")
        }

        return () => clearInterval(timerId)
    },[isRunning, timeLeft])

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const FormatMinutes = String(minutes).padStart(2, "0");
        const FormatSeconds = String(remainingSeconds).padStart(2, "0");
        return `${FormatMinutes} : ${FormatSeconds}`
    }

    const handleStart = () => {
        setIsRunning(true)
    }

    const handleReset = () => {
        setIsRunning(false)
        setTimeLeft(initialTime)
    }

  return (
<div className="relative w-[90%] h-[400px] flex items-start justify-center overflow-hidden rounded-xl pt-8">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0 border-4 rounded-xl border-[#2d1c0e]"
  >
    <source src={bgVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Timer Content */}
  <div className="relative z-10 text-center backdrop-blur-md p-4 rounded-xl">
    <div className="text-7xl text-black">
      {formatTime(timeLeft)}
    </div>

    {timeLeft === 0 && (
      <p className="mt-6 text-2xl font-bold text-black animate-pulse">
        Eggs are ready! Enjoy!
      </p>
    )}
  </div>

  {/* Button Container Positioned Bottom-Center */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-4 bg-white/10 backdrop-blur-md p-2 rounded-xl">
    <button
      onClick={handleStart}
      disabled={isRunning || timeLeft === 0}
      className={`
        px-6 py-2 rounded-lg text-white text-lg font-semibold transition-transform
        ${isRunning || timeLeft === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#F9D77E] hover:bg-[#E6B800]'}
      `}
    >
      Start
    </button>
    <button
      onClick={handleReset}
      className="px-6 py-2 bg-[#C3B091] hover:bg-[#843D2E] text-white text-lg font-semibold rounded-lg transition-transform"
    >
      Reset
    </button>
  </div>
</div>
  )
}

export default RunnyTimer
