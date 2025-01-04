'use client'

import { useState } from 'react'
import DynamicMap from '@/components/map/DynamicMap'
import TimeSelector from '@/components/search/TimeSelector'
import TrafficLegend from '@/components/map/TrafficLegend' // Updated import path

export default function Home() {
  const [selectedTime, setSelectedTime] = useState(8) // Default to 8 AM

  return (
    <main className="min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Bay Area Traffic Density Map</h1>
        
        <div className="mb-6">
          <TimeSelector onTimeChange={setSelectedTime} />
        </div>

        <div className="relative h-[70vh] rounded-lg overflow-hidden shadow-lg">
          <DynamicMap selectedTime={selectedTime} />
          <TrafficLegend />
        </div>
      </div>
    </main>
  )
}