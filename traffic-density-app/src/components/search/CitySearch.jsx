'use client'

import { useState } from 'react'
import { Combobox } from '@headlessui/react'

export default function CitySearch({ onCitySelect }) {
  const [query, setQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState(null)

  // In production, this would come from your API
  const cities = [
    { id: 'san_francisco', name: 'San Francisco' },
    { id: 'oakland', name: 'Oakland' },
    // Add more cities
  ]

  const filteredCities = query === ''
    ? cities
    : cities.filter((city) => {
        return city.name.toLowerCase().includes(query.toLowerCase())
      })

  const handleSelect = (city) => {
    setSelectedCity(city)
    onCitySelect?.(city)
  }

  return (
    <Combobox value={selectedCity} onChange={handleSelect}>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-lg border px-4 py-2"
          displayValue={(city) => city?.name}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for a city..."
        />
        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg">
          {filteredCities.map((city) => (
            <Combobox.Option
              key={city.id}
              value={city}
              className={({ active }) =>
                `cursor-default select-none px-4 py-2 ${
                  active ? 'bg-blue-500 text-white' : 'text-gray-900'
                }`
              }
            >
              {city.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  )
}