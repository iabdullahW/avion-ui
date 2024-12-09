import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { RiPlantLine } from "react-icons/ri";

const Hero2 = () => {
  return (
    <div className='mt-8'>
<div className='p-14'>
        <h5 className='text-3xl font-thin text-center'>What makes our brand diferent</h5>

        <div className='flex space-x-8 items-center mt-12 justify-evenly'>
            <div className='font-light'>
            <FaShippingFast className='w-6 h-6' />
                <h5 className='leading-10 text-2xl'>Next day as standard</h5>
                <p >Order before 3pm and get your order
                the next day as standard</p>
            </div>

            <div className='font-light'>
            <FaRegCheckCircle className='w-6 h-6' />
                <h5 className='leading-10 text-2xl '>Made by true artisans</h5>
                <p>Handmade crafted goods made with
                real passion and craftmanship</p>
            </div>

            <div className='font-light'>
            <IoWalletOutline className='w-6 h-6 leading-10' />
                <h5 className='leading-10 text-2xl '>Unbeatable prices</h5>
                <p className=''>For our materials and quality you won&apos;t find better 
                    prices anywhere</p>
            </div>
                <div className='font-light'>
                <RiPlantLine className='w-6 h-6' />
                <h5 className='leading-10 text-2xl '>Recycled packaging</h5>
                <p>We use 100% recycled packaging to 
                    ensure our footprint is manageable </p>
            </div>

        </div>
        </div>

    </div>
  )
}

export default Hero2