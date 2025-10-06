import { useRef, useEffect, useState, useCallback } from 'react'
import { useKV } from '@github/spark/hooks'

interface TravelPin {
  id: string
  lat: number
  lng: number
  name: string
  date: string
  description: string
  photo?: string
  country: string
  city: string
}

interface SimpleGlobeProps {
  onLocationClick: (lat: number, lng: number) => void
  onPinClick: (pin: TravelPin) => void
  selectedPin?: TravelPin | null
}

export function SimpleGlobe({ onLocationClick, onPinClick }: SimpleGlobeProps) {
  const [pins] = useKV<TravelPin[]>('travel-pins', [])
  const [selectedLocation, setSelectedLocation] = useState<{lat: number, lng: number} | null>(null)

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Convert pixel coordinates to lat/lng (simplified)
    const lng = ((x / rect.width) * 360) - 180
    const lat = 90 - ((y / rect.height) * 180)
    
    setSelectedLocation({ lat, lng })
    onLocationClick(lat, lng)
  }

  const safepins = pins || []

  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-background rounded-lg overflow-hidden border border-border">
      {/* Temporary world map placeholder */}
      <div 
        className="w-full h-full bg-gradient-to-b from-blue-900 to-blue-700 cursor-crosshair relative"
        onClick={handleMapClick}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23112e4a'/%3E%3Cpath d='M50 50h300v100H50z' fill='%23134e4a' opacity='0.6'/%3E%3Ctext x='200' y='100' text-anchor='middle' fill='white' font-size='14'%3EClick anywhere to add a travel pin%3C/text%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Globe loading message */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <div>
              <h3 className="text-lg font-semibold">3D Globe Loading...</h3>
              <p className="text-sm opacity-75">Click anywhere on this area to add pins</p>
              <p className="text-xs opacity-50 mt-2">
                The interactive 3D globe will load once react-globe.gl initializes properly
              </p>
            </div>
          </div>
        </div>

        {/* Show pins as dots */}
        {safepins.map((pin) => {
          // Convert lat/lng to pixel coordinates (simplified)
          const x = ((pin.lng + 180) / 360) * 100
          const y = ((90 - pin.lat) / 180) * 100
          
          return (
            <div
              key={pin.id}
              className="absolute w-3 h-3 bg-accent rounded-full border-2 border-white cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform"
              style={{ left: `${x}%`, top: `${y}%` }}
              onClick={(e) => {
                e.stopPropagation()
                onPinClick(pin)
              }}
              title={`${pin.name} - ${pin.city}, ${pin.country}`}
            />
          )
        })}

        {/* Show selected location */}
        {selectedLocation && (
          <div
            className="absolute w-4 h-4 bg-primary rounded-full border-2 border-white animate-pulse transform -translate-x-1/2 -translate-y-1/2"
            style={{ 
              left: `${((selectedLocation.lng + 180) / 360) * 100}%`, 
              top: `${((90 - selectedLocation.lat) / 180) * 100}%` 
            }}
          />
        )}
      </div>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-2 rounded-md text-sm">
        <p>🌍 Click to add pins • {safepins.length} places visited</p>
      </div>
    </div>
  )
}