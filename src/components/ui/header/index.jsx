import { FaceBookIcons, TelegramIcons, TwitterIcons, YoutobeIcons } from '@/components/icons'
import Image from 'next/image'
import React from 'react'
import Contianer from '../container'

const navbar = [
    {
        id: 1,
        label:"Проекты"
    },
    {
        id: 2,
        label:"Концепция"
    },
    {
        id: 3,
        label:"Планировки"
    },
    {
        id: 4,
        label:"Локация"
    },
]
const navbar1 = [
    {
        id: 1,
        label:"О нас"
    },
    {
        id: 2,
        label:"Галерея"
    },
    {
        id: 3,
        label:"Контакты"
    },
    {
        id: 4,
        label:"+90 000-00-00"
    },
]

export default function Header() {
  return (
      <header className='bg-transparent fixed w-full z-40'>
          <Contianer className={"flex justify-between pt-[11px] "}>
            <div>
                <p class="pb-[23px] text-white text-lg font-medium ">г.Ташкент</p>
                <div class="bg-slate-800 rounded-[3px] backdrop-blur-[74px] flex gap-[20px] py-[10px] px-[15px]">
                  {
                    navbar?.map(e => (
                        <p key={e?.id} class="text-white text-lg font-medium ">{ e?.label}</p>
                    ))
                    }
                </div>
              </div>
              <div class="px-[30px] py-[10px] pb-[18px]  bg-slate-800">
                  <Image src={'/logo.svg'} width={120} height={105} />
              </div>
              <div>
                <div className='flex justify-end gap-[4px]  pb-[23px]'>
                    <div class="p-[6px] bg-neutral-900/opacity-10 rounded-[7px] backdrop-blur-[54px]">
                       <TwitterIcons/>   
                      </div>
                      <div class="p-[6px] bg-neutral-900/opacity-10 rounded-[7px] backdrop-blur-[54px]">
                       <YoutobeIcons/>   
                      </div> 
                      <div class="p-[6px] bg-neutral-900/opacity-10 rounded-[7px] backdrop-blur-[54px]">
                       <FaceBookIcons/>   
                      </div> 
                      <div class="p-[6px] bg-neutral-900/opacity-10 rounded-[7px] backdrop-blur-[54px]">
                       <TelegramIcons/>   
                    </div>   
                </div>
                <div class="bg-slate-800 rounded-[3px] backdrop-blur-[74px] flex gap-[20px] py-[10px] px-[15px]">
                  {
                    navbar1?.map(e => (
                        <p key={e?.id} class="text-white text-lg font-medium ">{ e?.label}</p>
                    ))
                    }
                </div>
              </div>
          </Contianer>
    </header>
  )
}
