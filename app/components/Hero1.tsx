import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero1 = () => {
  return (
    <div>
     
           {/* main div */}
           <div className="flex justify-center items-center">
            {/* first child div of box 1  */}
  <div className="bg-[#2A254B] w-[900px] h-[470px]">



    {/* text divs of box 1  */}
    <div className='text-white p-14 '>
        <h4 className='text-3xl font-light '>The furniture brand for the <br /> future, with timeless designs</h4>
        <Link href='/ProductListing'><button className='mt-8 bg-[#F9F9F926;] px-5 py-5 pl-8 pr-8 font-extralight '>View Collection</button></Link>

        <p className='mt-36 font-thin'>A new era in eco friendly furniture with Avelon, the French luxury retail brand
        with nice fonts, tasteful colors and a beautiful way to display things digitally 
         using modern web technologies.</p>
    </div>

 </div>



 {/* second child div of image */}
  <div className="">
    <Image
      className='left-16'
      src="/images/chair.jpeg"
      alt="chair image"
      width={377}
      height={240}
    />
  </div>
</div>

       


    </div>
  )
}

export default Hero1