'use client'
import React, {useState} from 'react'
import {getNextIndex} from '@/lib/utils'
import Icon from '@/components/Icon'

import {
  ChevronRight,
  ChevronLeft
} from 'lucide-react'

type Content = {
  image:any,
  alt:any
}

type ImageSwipeProps = {
  content: Content[]
}

export default function ImageSwipe({content}:ImageSwipeProps) {

    const images = content.map(item => item.image);
    const alts = content.map(item => item.alt);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const next = getNextIndex(currentIndex, images.length)

    return (
        <div className='relative mx-0 sm:mx-6 md:mx-20 lg:mx-0'>
            <div className='h-full w-full'>
                <button className="z-20 absolute -left-6 top-0 bottom-0 text-4xl text-neutral-300" onClick={prevSlide}>
                    <ChevronLeft className='w-10 h-10'/>
                </button>

                <div className='relative mx-3'>
                    <div className='flex flex-col  origin-center -rotate-3 shadow-xl rounded-3xl'>
                      <img className='w-full h-[250px] md:h-[300px] lg:h-[400px] 2xl:h-[450px] object-cover rounded-t-3xl' src={images[next]}/>
                      <div className='md:h-15 bg-[--clr-base]/75 rounded-b-3xl px-5 py-2 text-xs md:text-sm'>
                        {alts[next]}
                      </div>
                    </div>
                    {images.map((image:any, index:number) => (
                    <div key={index} className='absolute top-0 bottom-0 left-0 right-0'>
                        {index === currentIndex &&
                        <div className='flex flex-col origin-center rotate-3 shadow-xl rounded-3xl'>
                          <img className='w-full h-[250px] md:h-[300px] lg:h-[400px] 2xl:h-[450px] object-cover rounded-t-3xl' src={images[index]}/>
                          <p className='md:h-15 bg-[--clr-base] border border-[--clr-grey-light] rounded-b-3xl px-5 py-2 text-sm'>
                            {alts[index]}
                          </p>
                        </div>
                        }
                    </div>
                    ))}
                </div>
                
                <button className="z-20 absolute -right-6 top-0 bottom-0 text-4xl text-neutral-300" onClick={nextSlide}>
                    <ChevronRight className='w-10 h-10'/>
                </button>
            </div>
        </div>
    )
}
