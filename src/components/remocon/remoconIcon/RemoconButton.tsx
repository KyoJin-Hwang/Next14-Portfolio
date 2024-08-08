import React from 'react'

interface RemoconButtonProps {
  onClick: () => void
}

const RemoconButton: React.FC<RemoconButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Remocon Button</button>
}

export default RemoconButton
