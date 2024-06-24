import Contianer from '@/components/ui/container'
import Image from 'next/image'
import React, { useState } from 'react'
const data = [
  {
      id: 1,
      label:"Двор"
  },
  {
      id: 2,
      label:"Hall"
  },
  {
      id: 3,
      label:"Площадки"
  },
 
]
export default function Complex() {
  const [id,setId] = useState(1)
  return (
    <div className='w-full pt-[100px] pb-[246px]' id='Complex' >
          <Contianer>
        <h3 class="w-full max-w-[650px] text-white text-5xl font-medium  uppercase leading-[58px] tracking-widest">КонЦЕПЦИЯ ЖИЛОГО КОМПЛЕКСА</h3>
        <div className='flex items-center gap-[50px] mb-[46px] mt-[52px]'>

          {
            data?.map(e => (
              <div className='flex items-center gap-[6px] cursor-pointer' key={e?.id}  onClick={()=>setId(e?.id)}>
                <div class="relative w-[52px] h-[52px]">
                {
                  id == e?.id? <>
                  <div class="w-[52px] h-[52px] left-0 top-0 absolute opacity-40 rounded-full border border-orange-200"></div>
                  <div class="w-[34px] h-[34px] left-[9px] top-[9px] absolute rounded-full border border-orange-200"></div>
                  </>:""
                }
                  <div class="w-3 h-3 left-[20px] top-[20px] absolute bg-orange-200 rounded-full"></div>
                </div>
                <div class="text-white text-[22px] font-normal ]">{ e?.label}</div>
              </div>
            ))
            }
        </div>
      </Contianer>
      
      <Image className={"w-full"} width={1900} height={400} src="/busket.jpg" />
      
      <Contianer className={"flex w-full mt-[110px]"}>
        <div className='w-full pl-[42px] border-l-[1px] border-orange-200'>
          <p class="text-orange-200 text-[64px] font-medium">8 га</p>
          <p class="text-orange-200 text-lg font-normal ">ПЛОЩАДЬ ОБЪЕКТА</p>
        </div>
        <div className='w-full pl-[42px] border-l-[1px] border-orange-200'>
          <p class="text-orange-200 text-[64px] font-medium">1</p>
          <p class="text-orange-200 text-lg font-normal ">ОЧЕРЕДИ</p>
        </div> 
        <div className='w-full pl-[42px] border-l-[1px] border-orange-200'>
          <p class="text-orange-200 text-[64px] font-medium">200</p>
          <p class="text-orange-200 text-lg font-normal ">КОЛ-ВО КВАРТИР</p>
        </div>
        <div className='w-full pl-[42px] border-l-[1px] border-orange-200'>
          <p class="text-orange-200 text-[64px] font-medium">5-7-20</p>
          <p class="text-orange-200 text-lg font-normal ">ПЛОЩАДЬ ОБЪЕКТА</p>
        </div>
      </Contianer>
    </div>
  )
}
