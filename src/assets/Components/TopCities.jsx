import React from 'react';
import Search from './Search';
import '../Components/main.css'
import DateTime from './DateTime';

const cities = [
    {
        id: 1,
        city: 'Chennai',
    },
    {
        id: 2,
        city: 'Madurai',
    },
    {
        id: 3,
        city: 'Kovai',
    },
    {
        id: 4,
        city: 'Bengaluru',
    },
];

const TopCities = () => {
    return (
        <div>
            <div className='flex justify-around  bg-purple-700 rounded-3xl p-2'>
            {cities.map((city) => (
                <button className='btn-hover text-white m-2' key={city.id}>{city.city}</button>
            ))}
             </div>
        </div>

    );
};

export default TopCities;
