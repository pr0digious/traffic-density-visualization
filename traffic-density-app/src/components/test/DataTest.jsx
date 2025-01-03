'use client'

import { useState } from 'react'
import trafficData from '@/data/trafficData.json'

export default function DataTester() {
  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedTime, setSelectedTime] = useState(8)

  const cities = Object.entries(trafficData.cities).map(([id, cityData]) => ({
    id,
    name: cityData.name
  }))

  const handleCityChange = (e) => {
    const cityId = e.target.value
    const cityData = trafficData.cities[cityId]
    setSelectedCity(cityData ? { id: cityId, ...cityData } : null)
  }

  const handleTimeChange = (e) => {
    setSelectedTime(parseInt(e.target.value))
  }

  return (
    <div className="p-4 space-y-4">
      <div>
        <h3 className="font-bold">Select City:</h3>
        <select onChange={handleCityChange} className="border p-2 rounded">
          <option value="">Select a city...</option>
          {cities.map(city => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="font-bold">Select Time:</h3>
        <input
          type="range"
          min="4"
          max="22"
          value={selectedTime}
          onChange={handleTimeChange}
          className="w-full"
        />
        <span>{selectedTime}:00</span>
      </div>

      {selectedCity && (
        <div>
          <h3 className="font-bold">Selected City Data:</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-[300px]">
            {JSON.stringify({
              name: selectedCity.name,
              county: selectedCity.county,
              trafficAtSelectedTime: selectedCity.mainRoads.map(road => ({
                roadName: road.name,
                traffic: road.segments[0].trafficByHour[selectedTime]
              }))
            }, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}