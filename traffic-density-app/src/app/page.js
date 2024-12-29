import CitySearch from '@/components/search/CitySearch'
import TimeSelector from '@/components/search/TimeSelector'
import DynamicMap from '@/components/map/DynamicMap'

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <div className="container mx-auto space-y-4">
        <h1 className="text-3xl font-bold">Bay Area Traffic Density</h1>
        
        <div className="flex space-x-4 mb-4">
          <CitySearch />
          <TimeSelector />
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <DynamicMap />
        </div>
      </div>
    </main>
  )
}