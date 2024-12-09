import Image from 'next/image'
import React from 'react'

const Ceramics = () => {
  return (
   <div>
        <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          <h1 className="text-2xl font-semibold">New Ceramics</h1>

          {/* Product Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="w-full h-auto">
              <Image
                src="/images/chair.jpeg"
                height={600}
                width={600}
                alt="chair"
                className="w-full h-[70%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 text-sm">The Dendy Chair</p>
                <p className="text-sm">$250</p>
              </div>
            </div>

            <div className="w-full h-auto">
              <Image
                src="/images/card2.jpeg"
                height={250}
                width={250}
                alt="vase"
                className="w-full h-[70%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 text-sm">Rustic VaseSet</p>
                <p className="text-sm">$155</p>
              </div>
            </div>
            <div className="w-full h-auto">
              <Image
                src="/images/card3.jpeg"
                height={600}
                width={600}
                alt="silky vase"
                className="w-full h-[70%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 text-sm">The Silky Vase</p>
                <p className="text-sm">$125</p>
              </div>
            </div>
            <div className="w-full h-auto">
              <Image
                src="/images/card4.jpeg"
                height={600}
                width={600}
                alt="lamp"
                className="w-full h-[70%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 text-sm">The Lucky Lamp</p>
                <p className="text-sm">$399</p>
              </div>
            </div>
          </div>

          {/* View Collection Button */}
          <div className=" flex justify-center items-center">
            <button className="bg-[#F9F9F9] py-3 px-5 rounded-[5px] text-[#2A254B]">
              View collection
            </button>
          </div>
        </div>
    </div>
  )
}

export default Ceramics;
