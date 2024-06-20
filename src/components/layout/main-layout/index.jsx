import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import { GetMe } from '@/serive/global'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

export default function MainLayout({ children }) {
  const { data: user } = useQuery(['user'], () => GetMe())
  return (
      <>
      <Header user={user} />
         {children}
        <Footer/>
    </>
  )
}
