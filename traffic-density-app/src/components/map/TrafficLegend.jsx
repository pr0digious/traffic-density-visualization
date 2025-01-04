export default function TrafficLegend() {
    return (
      <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-lg z-[1000]">
        <h3 className="font-semibold mb-2">Traffic Density</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
            <span>Light Traffic (0-20 cars per mile)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
            <span>Moderate Traffic (21-44 cars per mile)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
            <span>Heavy Traffic (45 cars per mile)</span>
          </div>
        </div>
      </div>
    )
  }