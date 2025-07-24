import React, { useEffect, useState } from 'react'
import bgVideo from '../assets/DippyBg.mp4'

const DippyTimer = () => {
  const initialTime = 3 * 60
  const [timeLeft, setTimeLeft] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timerId

    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsRunning(false)
      clearInterval(timerId)
      console.log('Dippy Eggs are ready!!')
    }

    return () => clearInterval(timerId)
  }, [isRunning, timeLeft])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    const FormatMinutes = String(minutes).padStart(2, '0')
    const FormatSeconds = String(remainingSeconds).padStart(2, '0')
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
    <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] h-[clamp(20rem,45vh,28rem)] max-h-[500px] flex items-start justify-center overflow-hidden rounded-2xl pt-[5%]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 border-4 border-[#2d1c0e] rounded-2xl"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Timer Content */}
      <div className="relative z-10 text-center backdrop-blur-md p-[clamp(0.75rem,2vw,1.5rem)] rounded-xl">
        <div className="text-white text-[clamp(2rem,6vw,4rem)] font-bold font-pixel">
          {formatTime(timeLeft)}
        </div>

        {timeLeft === 0 && (
          <p className="mt-6 text-[clamp(1rem,3vw,1.75rem)] font-bold text-white animate-pulse">
            Eggs are ready! Enjoy!
          </p>
        )}
      </div>

      {/* Button Container */}
      <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 z-10 flex space-x-4 bg-white/10 backdrop-blur-md p-[clamp(0.5rem,1.25vw,1rem)] rounded-xl">
        <button
          onClick={handleStart}
          disabled={isRunning || timeLeft === 0}
          className={`
            px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg text-white text-[clamp(0.9rem,1.5vw,1.125rem)] font-semibold transition-transform
            ${isRunning || timeLeft === 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#F9D77E] hover:bg-[#E6B800]'}
          `}
        >
          Start
        </button>
        <button
          onClick={handleReset}
          className="px-4 sm:px-6 py-1.5 sm:py-2 bg-[#C3B091] hover:bg-[#843D2E] text-white text-[clamp(0.9rem,1.5vw,1.125rem)] font-semibold rounded-lg transition-transform"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default DippyTimer
