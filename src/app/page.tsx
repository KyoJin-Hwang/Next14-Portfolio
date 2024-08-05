'use client'
import Profile from '@/components/Profile/profile'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width:1099px)' })
  useEffect(() => {
    if (isMobile) {
      localStorage.setItem('isMobile', 'true')
    } else {
      localStorage.setItem('isMobile', 'false')
    }
  }, [isMobile])
  return (
    <div className="relative z-0">
      <Profile />
    </div>
  )
}
export default Home
