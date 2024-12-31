import DynamicMap from '@/components/map/DynamicMap'
import CitySearch from '@/components/search/CitySearch'
import TimeSelector from '@/components/search/TimeSelector'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container py-4">
        <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          Bay Area Traffic Density
        </h1>
        
        <div className="search-container my-4">
          <CitySearch/>
          <TimeSelector />
        </div>

        <div className="map-container rounded-lg bg-white shadow-lg overflow-hidden">
          <DynamicMap />
        </div>
      </div>
    </main>
  )
}