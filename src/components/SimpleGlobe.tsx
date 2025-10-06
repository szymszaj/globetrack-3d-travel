import React, { useRef, useEffect, useState } from 'react'
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

interface SimpleGlobeProps {
  onLocationClick: (lat: number, lng: number) => void
  onPinClick: (pin: TravelPin) => void
  selectedPin?: TravelPin | null
}

export function SimpleGlobe({ onLocationClick, onPinClick, selectedPin }: SimpleGlobeProps) {
  const globeRef = useRef<any>(null)
  const [pins] = useKV<TravelPin[]>('travel-pins', [])
  const [isLoaded, setIsLoaded] = useState(false)

  const pointsData = (pins || []).map(pin => ({
    ...pin,
    lat: pin.lat,
    lng: pin.lng,
    size: selectedPin?.id === pin.id ? 0.8 : 0.4,
  }))

  const handleGlobeClick = ({ lat, lng }: { lat: number; lng: number }) => {
    onLocationClick(lat, lng)
  }

  const handlePointClick = (point: any) => {
    onPinClick(point as TravelPin)
  }

  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-black rounded-lg overflow-hidden border border-border shadow-lg">
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black z-10">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <div>
              <h3 className="text-lg font-semibold text-white">Loading 3D Globe...</h3>
              <p className="text-sm text-gray-300">Initializing interactive world map</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="w-full h-full">
        <Globe
          ref={globeRef}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          
          showGlobe={true}
          showAtmosphere={true}
          
          pointsData={pointsData}
          pointLat="lat"
          pointLng="lng"
          pointAltitude={0.02}
          pointRadius="size"
          pointColor={() => '#f97316'}
          pointResolution={8}
          onPointClick={handlePointClick}
          pointLabel={(point: any) => `
            <div style="
              background: rgba(0, 0, 0, 0.9);
              border: 1px solid #f97316;
              border-radius: 8px;
              padding: 10px 14px;
              color: white;
              font-family: 'Inter', sans-serif;
              font-size: 13px;
              max-width: 220px;
              line-height: 1.4;
            ">
              <div style="font-weight: 600; margin-bottom: 6px; color: #f97316;">${point.name}</div>
              <div style="color: #e5e5e5; margin-bottom: 4px;">${point.city}, ${point.country}</div>
              <div style="color: #a0a0a0; font-size: 11px;">${new Date(point.date).toLocaleDateString()}</div>
            </div>
          `}
          
          onGlobeClick={handleGlobeClick}
          
          width={undefined}
          height={undefined}
          animateIn={true}
          waitForGlobeReady={true}
          
          atmosphereColor="#58a6ff"
          atmosphereAltitude={0.12}
          
          enablePointerInteraction={true}
          
          onGlobeReady={() => {
            setIsLoaded(true)
          }}
        />
      </div>
      
      <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm border border-border/20">
        <p className="flex items-center gap-2">
          <span>🌍</span>
          <span>Click globe to add pins</span>
          <span>•</span>
          <span className="text-accent font-medium">{(pins || []).length} places visited</span>
        </p>
      </div>
    </div>
  )
}