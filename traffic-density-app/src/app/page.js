'use client'

import { useState } from 'react'
import DynamicMap from '@/components/map/DynamicMap'
import CitySearch from '@/components/search/CitySearch'
import TimeSelector from '@/components/search/TimeSelector'
import TrafficLegend from '@/components/map/TrafficLegend'


export default function Home() {
  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedTime, setSelectedTime] = useState(8) // Default to 8 AM

  const handleCitySelect = (city) => {
    setSelectedCity(city)
  }

  const handleTimeChange = (time) => {
    setSelectedTime(time)
  }

  return (
    <main className="min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Bay Area Traffic Density</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <CitySearch onCitySelect={handleCitySelect} />
          <TimeSelector onTimeChange={handleTimeChange} />
        </div>

        <div className="relative h-[70vh] rounded-lg overflow-hidden shadow-lg">
          <DynamicMap 
            selectedCity={selectedCity}
            selectedTime={selectedTime}
          />
          <TrafficLegend />
        </div>
        <h1 className="text-2xl font-bold mb-4">Traffic Data Tester</h1>
      </div>
    </main>
  )
}