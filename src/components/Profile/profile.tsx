'use client'
import Image from 'next/image'
import ProfileImg from '@/assets/img/profile.jpg'

import { useEffect, useState } from 'react'

import './profile.css'
import { useIsMobileStore } from '@/store/IsMobile'
interface ProfileComponentT {
  isMobile: boolean
  showImage?: boolean
}
const ProfileImageComponent = ({ isMobile, showImage }: ProfileComponentT) => {
  return (
    <Image
      src={ProfileImg}
      alt="프로필이미지"
      className={`transition-all delay-100 duration-[350ms] 
    ${
      isMobile
        ? showImage
          ? 'absolute top-0 left-[50%]  translate-y-[0px] translate-x-[-50%] mt-6'
          : 'absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] mt-0'
        : showImage
          ? 'absolute top-0 left-0  translate-y-[0px] translate-x-[0px] mt-6'
          : 'absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] mt-0'
    } 
  w-[300px] h-[400px] rounded-2xl mx-auto object-cover drop-shadow-[0px_0px_1rem_#ffffff]`}
    />
  )
}
const ProfileTextBoxComponent = ({
  isMobile,
  showImage,
}: ProfileComponentT) => {
  return <div></div>
}
const Profile = () => {
  const [profileBool, setProfilebool] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const isMobile = useIsMobileStore((state) => state.isMobile)
  useEffect(() => {
    if (profileBool) {
      const timer = setTimeout(() => {
        setShowImage(true)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setShowImage(false)
    }
  }, [profileBool])

  return (
    <div className={`profile relative h-screen max-w-[1100px] mx-auto`}>
      <div
        className={`w-[300px] h-[400px] gap-3 border-[#202632] border-2 border-solid 
bg-[#fff] rounded-2xl flex-center flex-col drop-shadow-[0px_0px_1rem_#ffffff] cursor-pointer 
${
  !profileBool
    ? 'z-10 visible opacity-100 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'
    : 'h-0 z-0 invisible opacity-0 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] rotate-[25deg]'
} 
'transition-all delay-300 duration-700`}
        onClick={() => setProfilebool(true)}
      >
        <p className="font-extrabold text-3xl -tracking-tighter">KyoJin</p>
        <p className="font-extrabold text-3xl -tracking-tighter">Resume</p>
      </div>
      <div>
        <ProfileImageComponent isMobile={isMobile} showImage={showImage} />
        <ProfileTextBoxComponent isMobile={isMobile} showImage={showImage} />
      </div>
    </div>
  )
}

export default Profile
