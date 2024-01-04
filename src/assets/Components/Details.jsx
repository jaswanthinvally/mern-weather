import React from 'react'
import { FaSun } from "react-icons/fa";

const Details = () => {
  return (
    <div className='main m-3'>
    <div className='flex justify-around items-center'>
    <div className='weather-icon'>
    <img
    className='w-[75px]'
    src='https://cdn3.iconfinder.com/data/icons/meteocons/512/sun-symbol-512.png'
    />
    </div>
    <div className='temp'>
    <h1 className='font-bold text-4xl text-white'>19</h1>
    </div>
    <div className='all'>
    <h1 className='font-semibold text-white'>real feel</h1>
    <h1 className='font-semibold text-white'>humidity</h1>
    <h1 className='font-semibold text-white'>wind</h1>

    </div>
    </div>
    <div className='flex justify-center text-lg font-semibold text-white m-3'>
    <h1>Rise <span>|</span> set <span>|</span> High <span>|</span> Low </h1>
    </div>
    </div>
  )
}

export default Details