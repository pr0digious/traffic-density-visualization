'use client'

import { useState } from 'react'
import { format } from 'date-fns'

export default function TimeSelector({ onTimeChange }) {
  const [selectedTime, setSelectedTime] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)

  const handleTimeChange = (time) => {
    setSelectedTime(time)
    onTimeChange?.(time)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      // Start time animation
      startTimeAnimation()
    }
  }

  const startTimeAnimation = () => {
    // Implement time animation logic here
  }

  return (
    <div className="flex items-center space-x-4">
      <input
        type="time"
        className="rounded-lg border px-4 py-2"
        value={selectedTime}
        onChange={(e) => handleTimeChange(e.target.value)}
      />
      <button
        onClick={handlePlayPause}
        className="rounded-lg bg-blue-500 px-4 py-2 text-white"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}