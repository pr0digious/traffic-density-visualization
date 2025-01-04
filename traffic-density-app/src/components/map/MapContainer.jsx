'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import HeatMapLayer from './HeatMapLayer'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map({ selectedTime }) {
  // Center on the Bay Area
  const defaultCenter = [37.8715, -122.2730]
  const defaultZoom = 10

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/leaflet/marker-icon-2x.png',
      iconUrl: '/leaflet/marker-icon.png',
      shadowUrl: '/leaflet/marker-shadow.png',
    })
  }, [])

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      className="h-full w-full"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HeatMapLayer selectedTime={selectedTime} />
    </MapContainer>
  )
}