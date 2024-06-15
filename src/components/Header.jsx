import React from 'react'
import { image1, image2, image3, image4, image5,image6,image7,image8} from "../images";

const images = [image1, image2, image3, image4, image5,image6,image7,image8];

const Header = ({ title, image, type }) => {
  return (
    <div className='w-full h-[100vh]'>
      <div className='relative w-full h-full'>
        <img src={image ?? images[Math.floor(Math.random() * images.length)]}
          alt='Hero Image'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 '>
        <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>{title}</h1>
        {
          type && (
            <p className='text-sm mt-4 text-center text-orange-500 bg-[#00000090] px-6 py-4 rounded-full '>Your Kitchen, Your Creations.
              <br className='hidden md:block' /> From classic dishes to modern delights. Elevate your cooking experience.</p>
          )
        }
      </div>
    </div>
  )
}

export default Header