'use client'

import dynamic from 'next/dynamic'

// Dynamic import for Map
const MapWithNoSSR = dynamic(
  () => import('@/components/map/MapContainer'),
  { ssr: false }
)

export default function DynamicMap() {
  return <MapWithNoSSR />
}