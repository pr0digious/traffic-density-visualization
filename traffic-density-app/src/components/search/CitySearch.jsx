'use client'

import { useState, useEffect } from 'react'
import { Combobox } from '@headlessui/react'

const cities = [
  'Oakland', 'San Francisco', 'San Jose', 'Berkeley', 
  'Richmond', 'Walnut Creek', 'Sausalito', 'Napa',
  'San Mateo', 'Palo Alto', 'Santa Clara', 'Vallejo',
  'Santa Rosa'
]

export default function CitySearch({ onCitySelect }) {
  const [query, setQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState(null)

  const filteredCities = query === ''
    ? cities
    : cities.filter((city) => {
        return city.toLowerCase().includes(query.toLowerCase())
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
          displayValue={(city) => city}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for a city..."
        />
        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg">
          {filteredCities.map((city) => (
            <Combobox.Option
              key={city}
              value={city}
              className={({ active }) =>
                `cursor-default select-none px-4 py-2 ${
                  active ? 'bg-blue-500 text-white' : 'text-gray-900'
                }`
              }
            >
              {city}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  )
}