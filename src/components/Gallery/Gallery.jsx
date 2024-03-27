import React from 'react'
import shoe from "../../assets/shoe.jpeg"
import item from"../../assets/item.jpeg"
import woman from"../../assets/woman.jpeg"
import man from"../../assets/man.jpeg"
import oil from"../../assets/oil.jpeg"

const Gallery = () => {
  return (
    <>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto flex flex-wrap">
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2 hover:translate-y-4 hover:skew-x-3 transition duration-500">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={shoe}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={woman}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={item}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2 hover:translate-y-4 hover:skew-x-3 transition duration-500">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={man}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={oil}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={woman}/>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Gallery