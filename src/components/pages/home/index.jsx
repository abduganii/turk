import Image from 'next/image'
import React from 'react'
import Complex from './ui/complex'
import LifeCompalex from './ui/lifeincomplex'
import Plan from './ui/plan'
import PlanForYou from './ui/planforyou'
import HomeSity from './ui/sity'

export default function HomePage() {
  return (
    <div>
      <Image src={"/Group1.png"} className="w-full" width={2900} height={800} />
      <HomeSity/>
      <Complex />
      <Plan/>
      <PlanForYou />
      <LifeCompalex/>
    </div>
  )
}
