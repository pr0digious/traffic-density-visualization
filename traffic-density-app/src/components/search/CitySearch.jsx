'use client'

import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { cityTrafficData } from '@/data/city-traffic-data'

export default function CitySearch({ onCitySelect }) {
  const [query, setQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState(null)

  // Convert city data into a searchable array
  const cities = Object.entries(cityTrafficData).map(([id, city]) => ({
    id,
    name: city.name,
    county: city.county,
    coordinates: city.coordinates
  }))

  const filteredCities = query === ''
    ? cities
    : cities.filter((city) => {
        return city.name.toLowerCase().includes(query.toLowerCase()) ||
               city.county.toLowerCase().includes(query.toLowerCase())
      })

  const handleSelect = (city) => {
    setSelectedCity(city)
    // Pass the full city data to the parent
    const fullCityData = cityTrafficData[city.id]
    onCitySelect?.(fullCityData)
  }

  return (
    <div className="relative"> {/* Added relative positioning */}
      <Combobox value={selectedCity} onChange={handleSelect}>
        <div className="relative mt-1">
          <Combobox.Input
            className="w-full rounded-lg border px-4 py-2"
            displayValue={(city) => city?.name}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for a city..."
          />
          <Combobox.Options 
            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[9999]"
          >
            {filteredCities.map((city) => (
              <Combobox.Option
                key={city.id}
                value={city}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 ${
                    active ? 'bg-blue-500 text-white' : 'text-gray-900'
                  }`
                }
              >
                {({ selected, active }) => (
                  <>
                    <div className="flex flex-col">
                      <span className={`${selected ? 'font-semibold' : 'font-normal'}`}>
                        {city.name}
                      </span>
                      <span className={`text-sm ${
                        active ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {city.county}
                      </span>
                    </div>
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  )
}