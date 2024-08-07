import Image from 'next/image'
import ProfileImg from '@/assets/img/profile.jpg'
import { ProfileComponentT } from '@/types/component'

export const ProfileImageComponent = ({
  isMobile,
  showImage,
}: ProfileComponentT) => {
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
