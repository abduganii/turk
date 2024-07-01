import Contianer from '@/components/ui/container'
import Image from 'next/image'
import {useState} from 'react'
import AboutUs from '../ui/about-us'

export default function ProductOnePage() {
  return (
    <>
        <div className='w-full '>
            <Image  
                className='w-full mb-[41px]'
                src={'/Etajlar.jpg'}
                width={1414} 
                height={811 }
            />
        </div>
          <Contianer>
              <AboutUs/>
          </Contianer>
    </>
  )
}
