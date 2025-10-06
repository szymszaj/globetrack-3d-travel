import { useRef, useEffect, useState, useCallback } from 'react'
import Globe from 'react-globe.gl'
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

interface InteractiveGlobeProps {
  onLocationClick: (lat: number, lng: number) => void
  onPinClick: (pin: TravelPin) => void
  selectedPin?: TravelPin | null
}

export function InteractiveGlobe({ onLocationClick, onPinClick, selectedPin }: InteractiveGlobeProps) {
  const globeRef = useRef<any>(null)
  const [pins] = useKV<TravelPin[]>('travel-pins', [])
  const [isGlobeReady, setIsGlobeReady] = useState(false)

  const handleGlobeClick = useCallback((point: any) => {
    if (point && point.lat !== undefined && point.lng !== undefined) {
      onLocationClick(point.lat, point.lng)
    }
  }, [onLocationClick])

  const handlePinClick = useCallback((pin: TravelPin) => {
    onPinClick(pin)
  }, [onPinClick])

  useEffect(() => {
    if (globeRef.current) {
      setIsGlobeReady(true)
      // Auto-rotate
      const controls = globeRef.current.controls()
      if (controls) {
        controls.autoRotate = true
        controls.autoRotateSpeed = 0.5
        controls.enableDamping = true
        controls.dampingFactor = 0.1
      }
    }
  }, [])

  const safePoints = pins || []

  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-background rounded-lg overflow-hidden border border-border">
      {!isGlobeReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-background">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      )}
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        
        // Points data
        pointsData={safePoints}
        pointColor={() => '#f85149'} // accent color
        pointAltitude={0.02}
        pointRadius={0.8}
        pointResolution={20}
        
        // Interactions
        onGlobeClick={handleGlobeClick}
        onPointClick={handlePinClick}
        
        // Styling
        width={undefined}
        height={undefined}
        
        // Labels
        pointLabel={(pin: TravelPin) => `
          <div class="bg-gray-900 text-white p-2 rounded-md border border-gray-700 shadow-lg max-w-xs">
            <div class="font-medium text-sm">${pin.name}</div>
            <div class="text-xs text-gray-400">${pin.city}, ${pin.country}</div>
            <div class="text-xs text-gray-400">${new Date(pin.date).toLocaleDateString()}</div>
          </div>
        `}
        
        // Enhanced visuals
        atmosphereColor="#58a6ff"
        atmosphereAltitude={0.1}
        
        // Controls
        enablePointerInteraction={true}
      />
    </div>
  )
}