'use client'
import Remocon from '@/components/remocon/Remocon'

import { useIsDarkStore } from '@/store/IsDark'
import { useIsMobileStore } from '@/store/IsMobile'

import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width:767px)' })
  const { isMobileChange } = useIsMobileStore()
  const { isDark } = useIsDarkStore()
  useEffect(() => {
    if (isMobile) {
      isMobileChange(true)
    } else {
      isMobileChange(false)
    }
  }, [isMobile])

  return (
    <div className={`relative z-0 ${isDark ? 'dark-mode' : 'white-mode'}`}>
      s{' '}
      <div className="fixed w-full flex justify-end bottom-[1rem] px-4 z-20">
        <Remocon />
      </div>
    </div>
  )
}
export default Home
