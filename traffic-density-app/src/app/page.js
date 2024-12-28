import dynamic from 'next/dynamic'
import CitySearch from '@/components/search/CitySearch'
import TimeSelector from '@/components/search/TimeSelector'

// Dynamic import for Map (client component)
const MapWithNoSSR = dynamic(
  () => import('@/components/map/MapContainer'),
  { ssr: false }
)

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
          <MapWithNoSSR />
        </div>
      </div>
    </main>
  )
}