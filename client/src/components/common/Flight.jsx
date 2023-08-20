import React from 'react'
import {FaArrowRightLong} from 'react-icons/fa6'

const Flight = ({flight}) => {
  return (
    <div className='w-[90%] min-h-[180px] flex flex-col space-y-4'>
        <div className='flex space-x-3'>
        <div>{flight.from_airportName}</div>
        <div><FaArrowRightLong /></div>
        <div>{flight.to_airportName}</div>
        </div>

        <div className='text-xxl '>{flight.price}₺</div>
        <div className='text-sm'>{flight.flight_duration}</div>


    </div>
  )
}

export default Flight