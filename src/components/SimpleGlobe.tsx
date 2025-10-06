import React, { useRef, useEffect, useState } from 'react'
import Globe from 'react-globe.gl'
import * as THREE from 'three'
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

  // Convert pins to points format for react-globe.gl
  const pointsData = (pins || []).map(pin => ({
    ...pin,
    lat: pin.lat,
    lng: pin.lng,
    size: selectedPin?.id === pin.id ? 0.8 : 0.4,
  }))

  // Add clouds after globe is ready
  useEffect(() => {
    if (isLoaded && globeRef.current) {
      const globe = globeRef.current
      
      // Add clouds layer using three.js
      const cloudsGeometry = new THREE.SphereGeometry(globe.getGlobeRadius() * 1.006, 50, 50)
      const cloudsMaterial = new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load('//unpkg.com/three-globe/example/img/earth-clouds.png'),
        transparent: true,
        opacity: 0.4
      })
      
      const cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial)
      globe.scene().add(cloudsMesh)
      
      // Rotate clouds slowly
      const rotateClouds = () => {
        cloudsMesh.rotation.y += 0.001
        requestAnimationFrame(rotateClouds)
      }
      rotateClouds()
    }
  }, [isLoaded])

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
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          
          // Clouds layer - using the correct property names
          showGlobe={true}
          showAtmosphere={true}
          
          // Points (travel pins)
          pointsData={pointsData}
          pointLat="lat"
          pointLng="lng"
          pointAltitude={0.02}
          pointRadius="size"
          pointColor={() => '#f97316'} // Orange color
          pointResolution={8}
          onPointClick={handlePointClick}
          pointLabel={(point: any) => `
            <div style="
              background: rgba(0, 0, 0, 0.8);
              border: 1px solid #f97316;
              border-radius: 8px;
              padding: 8px 12px;
              color: white;
              font-family: 'Inter', sans-serif;
              font-size: 12px;
              max-width: 200px;
            ">
              <div style="font-weight: 600; margin-bottom: 4px;">${point.name}</div>
              <div style="color: #ccc;">${point.city}, ${point.country}</div>
              <div style="color: #ccc; margin-top: 4px;">${point.date}</div>
            </div>
          `}
          
          // Globe interaction
          onGlobeClick={handleGlobeClick}
          
          // Styling
          width={undefined}
          height={undefined}
          animateIn={true}
          waitForGlobeReady={true}
          
          // Atmosphere
          atmosphereColor="#58a6ff"
          atmosphereAltitude={0.15}
          
          // Controls
          enablePointerInteraction={true}
          
          // Globe ready callback
          onGlobeReady={() => {
            setIsLoaded(true)
          }}
        />
      </div>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-md text-sm backdrop-blur-sm">
        <p>🌍 Click on globe to add pins • ☁️ Animated clouds layer • {(pins || []).length} places visited</p>
      </div>
    </div>
  )
}