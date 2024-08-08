'use client'

import { useIsDarkStore } from '@/store/IsDark'
import RemoconButton from './remoconIcon/RemoconButton'

const Remocon = () => {
  const { isDarkChange } = useIsDarkStore()
  return (
    <div className="flex">
      <RemoconButton onClick={isDarkChange} />
    </div>
  )
}

export default Remocon
