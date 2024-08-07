'use client'
import Profile from '@/components/Profile/profile'
import { useIsMobileStore } from '@/store/IsMobile'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width:767px)' })
  const { isMobileChange } = useIsMobileStore()
  useEffect(() => {
    if (isMobile) {
      isMobileChange(true)
    } else {
      isMobileChange(false)
    }
  }, [isMobile])
  return (
    <div className="relative z-0">
      <Profile />
    </div>
  )
}
export default Home
