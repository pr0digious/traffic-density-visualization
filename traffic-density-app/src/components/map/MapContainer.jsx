'use client'

import { useEffect } from 'react'
import { MapContainer as LeafletMapContainer, TileLayer, useMap } from 'react-leaflet'
import HeatMapLayer from './HeatMapLayer'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Component to handle city bounds
function CityBounds({ selectedCity }) {
  const map = useMap()

  useEffect(() => {
    if (selectedCity?.coordinates) {
      const [lng, lat] = selectedCity.coordinates
      map.setView([lat, lng], 13)
    }
  }, [selectedCity, map])

  return null
}

// Main Map Component
function Map({ selectedCity, selectedTime }) {
  const defaultCenter = [37.7749, -122.4194] // San Francisco coordinates
  
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/leaflet/marker-icon-2x.png',
      iconUrl: '/leaflet/marker-icon.png',
      shadowUrl: '/leaflet/marker-shadow.png',
    })
  }, [])

  return (
    <LeafletMapContainer
      center={defaultCenter}
      zoom={12}
      className="h-full w-full"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectedCity && <CityBounds selectedCity={selectedCity} />}
      <HeatMapLayer selectedTime={selectedTime} />
    </LeafletMapContainer>
  )
}

export default Map