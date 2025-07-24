import React from 'react'
import Menu from './menu'
import Welcome from './Welcome'

const Home = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center gap-10 px-4 py-10 text-2xl sm:text-3xl md:text-4xl'>
      <div className='w-full max-w-[600px] aspect-[1/1.618] rounded-2xl flex items-center justify-center'>
        <Welcome />
      </div>
    </div>
  )
}

export default Home
