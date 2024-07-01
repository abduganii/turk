import Contianer from '@/components/ui/container'
import Image from 'next/image'
import {useState} from 'react'
import AboutUs from './ui/about-us'
import { useRouter } from 'next/router'
export default function ProductPage() {
    const [image,setImage] = useState("/a.png")
    const router = useRouter()
  return (
    <>
        <div className='w-full '>
              <Image 
                 className='w-full pl-[50px] cursor-pointer max-w-[1414px] mx-auto  pt-[182px] mb-[62px]'
                src={image} 
                width={1414} 
                height={811 }
                onMouseEnter={()=> setImage("/a-hover.png")}
                onMouseLeave={()=> setImage("/a.png")} 
                onClick={()=>router.push('/project-one')}
               /> 
           
        </div>
          <Contianer>
              <AboutUs/>
          </Contianer>
    </>
  )
}
