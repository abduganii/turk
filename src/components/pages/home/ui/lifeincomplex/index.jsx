import Contianer from '@/components/ui/container'
import Image from 'next/image'
import { useState } from 'react'

const data = [
    {
        id:1,
        text:"Garden"
    },
    {
        id:2,
        text:"Gym"
    },
    {
        id:3,
        text:"Park"
    },
    {
        id:4,
        text:"Swimming Pool"
    },
    {
        id:5,
        text:"Parking Zone"
    }
]

export default function LifeCompalex() {
    const [id,setId] = useState(1)
    return (
      <>
            
    <Contianer >
        <h3 class="max-w-[643px] w-full text-white text-[80px] font-normal leading-[87px] tracking-[4px] mb-[75px]">Жизнь в комплексе </h3>
        <div className='flex gap-[40px]'>
            {
            data?.map(e => (
                <p key={e?.id} onClick={() => setId(e?.id)} class={`${id  == e?.id? "opacity-1" :"opacity-50" } cursor-pointer text-white text-[22px] font-extrabold  uppercase`}>{ e?.text}</p>
            ))
            }
                
        </div>
             
    </Contianer>
    <div  className='w-full mt-[32px]'>
        <Image src='/Rectangle6.png' width={1900} height={ 400} />
    </div>
      </>

  )
}
