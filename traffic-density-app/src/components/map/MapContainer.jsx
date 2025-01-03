'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import HeatMapLayer from './HeatMapLayer'
import 'leaflet/dist/leaflet.css'

// Sample traffic data directly in component
const trafficData = {
  "trafficData": [
    {
      "location": {
        "coordinates": [-122.4194, 37.7749],
        "city": "San Francisco",
        "county": "San Francisco County"
      },
      "trafficDensity": 75
    },
    {
      "location": {
        "coordinates": [-122.2712, 37.8044],
        "city": "Oakland",
        "county": "Alameda County"
      },
      "trafficDensity": 65
    },
    {
      "location": {
        "coordinates": [-122.0838, 37.3861],
        "city": "San Jose",
        "county": "Santa Clara County"
      },
      "trafficDensity": 80
    },
    {
      "location": {
        "coordinates": [-122.3321, 37.5329],
        "city": "Redwood City",
        "county": "San Mateo County"
      },
      "trafficDensity": 55
    },
    {
      "location": {
        "coordinates": [-122.0363, 37.9030],
        "city": "Walnut Creek",
        "county": "Contra Costa County"
      },
      "trafficDensity": 45
    }
  ]
}

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
        zoom={9}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <HeatMapLayer data={trafficData.trafficData} />
      </MapContainer>
    </div>
  )
}

export default Map