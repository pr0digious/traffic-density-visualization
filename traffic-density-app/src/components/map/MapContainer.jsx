'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import HeatMapLayer from './HeatMapLayer'
import 'leaflet/dist/leaflet.css'

const Map = ({ trafficData }) => {
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
        <HeatMapLayer data={trafficData} />
      </MapContainer>
    </div>
  )
}

export default Map