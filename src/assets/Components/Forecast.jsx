import React from 'react'

const Forecast = (props) => {
    return (
        <div>
            <div className='ms-3'>
                <h1 className='font-semibold text-xl text-white'>{props.time}</h1>
                <hr className='' />
                <div className='flex justify-around m-3'>
                    <img
                        className='w-[75px]'
                        src='https://cdn3.iconfinder.com/data/icons/meteocons/512/sun-symbol-512.png'
                    />
                    <img
                        className='w-[75px]'
                        src='https://cdn3.iconfinder.com/data/icons/meteocons/512/sun-symbol-512.png'
                    />
                    <img
                        className='w-[75px]'
                        src='https://cdn3.iconfinder.com/data/icons/meteocons/512/sun-symbol-512.png'
                    />
                    <img
                        className='w-[75px]'
                        src='https://cdn3.iconfinder.com/data/icons/meteocons/512/sun-symbol-512.png'
                    />
                    <img
                        className='w-[75px]'
                        src='https://cdn3.iconfinder.com/data/icons/meteocons/512/sun-symbol-512.png'
                    />
                </div>
            </div>
        </div>
    )
}

export default Forecast