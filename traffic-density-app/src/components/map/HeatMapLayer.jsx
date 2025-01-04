'use client'

import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet.heat'
import { getCityHeatPoints } from '@/data/city-traffic-data'

export default function HeatMapLayer({ selectedTime }) {
  const map = useMap()

  useEffect(() => {
    if (!map) return

    // Get heat points for current time
    const points = getCityHeatPoints(selectedTime).map(point => [
      point.lat,
      point.lng,
      point.intensity
    ])

    // Create heat layer
    const heatLayer = L.heatLayer(points, {
      radius: 35,
      blur: 25,
      maxZoom: 10,
      max: 1.0,
      gradient: {
        0.2: '#22c55e', // green for low traffic
        0.5: '#eab308', // yellow for medium traffic
        0.8: '#ef4444'  // red for high traffic
      }
    }).addTo(map)

    return () => {
      map.removeLayer(heatLayer)
    }
  }, [selectedTime, map])

  return null
}