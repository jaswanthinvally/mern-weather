import React from 'react'
import {IoSearchCircle} from 'react-icons/io5' 
const Search = () => {
  return (
    <div className='flex flex-row justify-center items-center mt-3'>
        <div className='flex align-middle items-center me-3'>
         <input className=' border-solid border-2 border-purple-700 h-[45px] w-[300px] pe-3 rounded-xl me-1 '/>
         <IoSearchCircle size={30}/>
        </div>
        <div className='flex gap-2'>
        <p className='font-bold text-xl text-white'>C</p>
        <p className=' text-xl text-white'>|</p>
        <p className='font-bold text-xl text-white'>F</p>
        </div>

    </div>
  )
}

export default Search