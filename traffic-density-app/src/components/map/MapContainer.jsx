'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet'
import trafficData from '@/data/trafficData.json'
import 'leaflet/dist/leaflet.css'

// Helper function to determine color based on traffic density
const getTrafficColor = (density) => {
  if (density < 20) return '#22c55e' // green for light traffic
  if (density < 45) return '#eab308' // yellow for moderate traffic
  return '#ef4444' // red for heavy traffic
}

// Component to handle city bounds
function CityBounds({ selectedCity }) {
  const map = useMap()

  useEffect(() => {
    if (selectedCity && trafficData.cities[selectedCity.id]) {
      const cityData = trafficData.cities[selectedCity.id]
      const { bounds } = cityData
      map.fitBounds([
        [bounds.sw[0], bounds.sw[1]],
        [bounds.ne[0], bounds.ne[1]]
      ])
    }
  }, [selectedCity, map])

  return null
}

// Component to render road segments with traffic data
function RoadSegments({ selectedCity, selectedTime }) {
  if (!selectedCity || !trafficData.cities[selectedCity.id]) return null

  const cityData = trafficData.cities[selectedCity.id]

  return cityData.mainRoads.map(road => (
    road.segments.map((segment, index) => {
      // Get traffic density for selected hour
      const density = segment.trafficByHour[selectedTime]
      
      return (
        <Polyline
          key={`${road.id}-${index}`}
          positions={segment.coordinates}
          pathOptions={{
            color: getTrafficColor(density),
            weight: 5,
            opacity: 0.8
          }}
          eventHandlers={{
            mouseover: (e) => {
              const layer = e.target
              layer.setStyle({
                weight: 7,
                opacity: 1
              })
            },
            mouseout: (e) => {
              const layer = e.target
              layer.setStyle({
                weight: 5,
                opacity: 0.8
              })
            },
            click: () => {
              // You could add an info popup here
              console.log(`${road.name}: ${density} cars/mile`)
            }
          }}
        />
      )
    })
  ))
}

export default function Map({ selectedCity, selectedTime }) {
  // Default center (San Francisco)
  const defaultCenter = [37.7749, -122.4194]
  
  return (
    <MapContainer
      center={defaultCenter}
      zoom={12}
      className="h-full w-full"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectedCity && (
        <>
          <CityBounds selectedCity={selectedCity} />
          <RoadSegments 
            selectedCity={selectedCity} 
            selectedTime={selectedTime} 
          />
        </>
      )}
    </MapContainer>
  )
}