'use client'

import { useState } from 'react'

export default function TimeSelector() {
  const [time, setTime] = useState('')

  return (
    <div className="flex-1">
      <input
        type="time"
        className="w-full px-4 py-2 border rounded-lg"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
    </div>
  )
}