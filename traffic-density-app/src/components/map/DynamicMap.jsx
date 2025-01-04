'use client'

import dynamic from 'next/dynamic'

// Properly configure the dynamic import
const MapContainer = dynamic(
  () => import('./MapContainer'),
  { 
    ssr: false,
    loading: () => <div className="h-full w-full flex items-center justify-center bg-gray-100">Loading map...</div>
  }
)

export default function DynamicMap({ selectedCity, selectedTime }) {
  return <MapContainer selectedCity={selectedCity} selectedTime={selectedTime} />
}