import Contianer from '@/components/ui/container'
import Image from 'next/image'
import React from 'react'

export default function PlanForYou() {
  return (
    <Contianer className={'pt-[316px] pb-[206px]'}>
      <h3 class="w-[643px] text-white text-[80px] font-normal leading-[87px] tracking-[4px] mb-[75px]">Планировки для вас </h3>
      <div className='flex items-start gap-[140px] mt-[-278px]'>
        <Image className='max-w-[546px] mt-[278px] aspect-[0.7/1] h-[732px] w-full' src={'/Rectangle4.png'} width={ 546} height={732} />
        <Image className='inline-block  max-w-[546px] aspect-[0.7/1] h-[732px]' src={'/Rectangle5.png'} width={ 546} height={732} />
      </div>
    </Contianer>
  )
}
