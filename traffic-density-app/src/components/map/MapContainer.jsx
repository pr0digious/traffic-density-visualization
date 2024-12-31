'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import HeatMapLayer from './HeatMapLayer'
import 'leaflet/dist/leaflet.css'

// Add sample data at the top of the file
const sampleData = [
  {
    location: {
      coordinates: [-122.4194, 37.7749]  // San Francisco
    },
    trafficDensity: 75
  },
  {
    location: {
      coordinates: [-122.2712, 37.8044]  // Oakland
    },
    trafficDensity: 60
  },
  {
    location: {
      coordinates: [-122.0838, 37.3861]  // San Jose
    },
    trafficDensity: 85
  }
]

const Map = () => {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/leaflet/marker-icon-2x.png',
      iconUrl: '/leaflet/marker-icon.png',
      shadowUrl: '/leaflet/marker-shadow.png',
    })
  }, [])

  return (
    <div className="h-[70vh] w-full">
      <MapContainer
        center={[37.7749, -122.4194]}
        zoom={10}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <HeatMapLayer data={sampleData} />
      </MapContainer>
    </div>
  )
}

export default Map