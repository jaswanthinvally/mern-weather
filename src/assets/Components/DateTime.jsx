import React from 'react'

const DateTime = () => {
  return (
    <div className='main-div flex flex-col justify-center'>
    <div className='time-date flex justify-center'>
    <h1 className=' font-semibold mt-3 text-white'>tuesday, 31 may 2022 <span>|</span> time 12:20</h1>
    </div>
    <div className='place flex justify-center'>
        <h1 className='font-bold text-4xl mt-4 text-white'>chennai</h1>
    </div>
    <div className='weather-now flex justify-center'>
        <h1 className='font-semibold mt-2 text-lg text-white'>foggy</h1>
    </div>
    </div>
    
  )
}

export default DateTime