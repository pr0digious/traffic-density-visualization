'use client'

import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(
  () => import('./MapContainer'),
  { ssr: false }
)

export default function DynamicMap({ selectedCity, selectedTime }) {
  return <MapWithNoSSR selectedCity={selectedCity} selectedTime={selectedTime} />
}