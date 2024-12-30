'use client'

import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet.heat'
import { useMap } from 'react-leaflet'

export default function HeatMapLayer({ data }) {
  const map = useMap()

  useEffect(() => {
    if (!data || !map) return

    // Convert data to format expected by leaflet.heat
    const points = data.map(point => [
      point.location.coordinates[1], // latitude
      point.location.coordinates[0], // longitude
      point.trafficDensity / 100    // intensity (normalized to 0-1)
    ])

    // Create heat layer
    const heatLayer = L.heatLayer(points, {
      radius: 25,
      blur: 15,
      maxZoom: 10,
      gradient: {
        0.4: 'blue',
        0.6: 'lime',
        0.8: 'yellow',
        1.0: 'red'
      }
    }).addTo(map)

    return () => {
      map.removeLayer(heatLayer)
    }
  }, [data, map])

  return null
}