import Contianer from '@/components/ui/container'
import InputGlobal from '@/components/ui/input'
import React from 'react'

export default function ContactsSection() {
  return (
    <Contianer>
         <h3 class="max-w-[643px] w-full text-white text-[80px] font-normal leading-[87px] tracking-[4px]  mt-[196px] mb-[36px]">Получить консультацию </h3>
        <div className='flex'>
              <InputGlobal type={"text"} placeholder={"Ваше имя"} />
              <InputGlobal  mask="+\9\9\8-99-999-99-99" type={"tel"} placeholder={"номер телефона"} />
        </div>
    </Contianer>
  )
}
