'use client'

import { useState } from 'react'

export default function CitySearch() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="flex-1">
      <input
        type="text"
        placeholder="Search for a city..."
        className="w-full px-4 py-2 border rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}