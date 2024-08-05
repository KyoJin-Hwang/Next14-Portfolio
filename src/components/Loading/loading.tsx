'use client'

import { useEffect, useState } from 'react'

const Loading = () => {
  const [percent, setPercent] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      if (percent < 100) {
        setPercent((el) => el + 1)
      }
    }, 50)
  }, [percent])
  return (
    <div
      className={`absolute top-0 w-full h-screen flex z-10 transition-all duration-[1.8s] ${percent === 100 ? 'invisible' : 'visible'}`}
    >
      <div className="absolute top-10 border-2  border-black">
        <span>{percent}</span>
      </div>
      <div
        className={`${percent === 100 ? `animate-left` : ``} bg-red-500 w-full`}
      ></div>
      <div
        className={`${
          percent === 100 ? `animate-right` : ''
        } bg-blue-500 w-full`}
      ></div>
    </div>
  )
}

export default Loading
