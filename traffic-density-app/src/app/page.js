'use client'

import { useState } from 'react'
import DynamicMap from '@/components/map/DynamicMap'
import CitySearch from '@/components/search/CitySearch'
import TimeSelector from '@/components/search/TimeSelector'
import TrafficLegend from '@/components/map/TrafficLegend'

export default function Home() {
  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedTime, setSelectedTime] = useState(8)

  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold mb-6">
          Bay Area Traffic Density Map
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <CitySearch onCitySelect={setSelectedCity} />
          <TimeSelector onTimeChange={setSelectedTime} />
        </div>

        <div className="relative h-[70vh] rounded-lg overflow-hidden shadow-lg">
          <DynamicMap 
            selectedCity={selectedCity} 
            selectedTime={selectedTime} 
          />
          <TrafficLegend />
        </div>
      </div>
    </main>
  )
}