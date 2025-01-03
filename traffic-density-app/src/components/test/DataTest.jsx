'use client'

import trafficData from '@/data/trafficData.json'

export default function DataTest() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Traffic Data Test</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-[500px]">
        {JSON.stringify(trafficData, null, 2)}
      </pre>
    </div>
  )
}