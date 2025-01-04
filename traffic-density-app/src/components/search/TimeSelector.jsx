'use client'

import { useState } from 'react'

export default function TimeSelector({ onTimeChange }) {
  const [time, setTime] = useState(8) // Default to 8 AM

  const handleChange = (e) => {
    const newTime = parseInt(e.target.value)
    setTime(newTime)
    onTimeChange?.(newTime)
  }

  const formatTime = (hour) => {
    const period = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour > 12 ? hour - 12 : hour
    return `${displayHour}:00 ${period}`
  }

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>4:00 AM</span>
        <span>10:00 PM</span>
      </div>
      <input
        type="range"
        min="4"
        max="22"
        value={time}
        onChange={handleChange}
        className="w-full"
      />
      <div className="text-center font-medium">
        Current Time: {formatTime(time)}
      </div>
    </div>
  )
}