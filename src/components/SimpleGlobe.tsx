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

// Function to compute the day/night terminator mesh
function computeTerminatorMesh(radius = 100, segments = 64) {
  const geometry = new THREE.SphereGeometry(radius, segments, segments)
  const material = new THREE.MeshBasicMaterial({
    color: 0x000000,
    opacity: 0.3,
    transparent: true,
    side: THREE.BackSide,
  })
  const mesh = new THREE.Mesh(geometry, material)
  return mesh
}

export function SimpleGlobe({ onLocationClick, onPinClick, selectedPin }: SimpleGlobeProps) {
  const globeRef = useRef<any>(null)
  const [pins] = useKV<TravelPin[]>('travel-pins', [])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const globe = globeRef.current
    if (!globe) return

    // Wait for globe to be ready, then add day/night terminator
    globe.onGlobeReady(() => {
      const scene = globe.scene()
      const terminatorMesh = computeTerminatorMesh()
      scene.add(terminatorMesh)
      globe.terminatorMesh = terminatorMesh
      setIsLoaded(true)
    })

    // Update terminator position based on current time
    const interval = setInterval(() => {
      const tMesh = globeRef.current?.terminatorMesh
      if (tMesh) {
        const now = new Date()
        const hours = now.getUTCHours() + now.getUTCMinutes() / 60
        const angle = (hours / 24) * Math.PI * 2
        tMesh.rotation.y = angle
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Convert pins to points format for react-globe.gl
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
    <div className="relative w-full h-[500px] md:h-[600px] bg-background rounded-lg overflow-hidden border border-border shadow-lg">
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-background z-10">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Loading 3D Globe...</h3>
              <p className="text-sm text-muted-foreground">Initializing interactive world map with day/night cycle</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="w-full h-full">
        <Globe
          ref={globeRef}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          
          // Points (travel pins)
          pointsData={pointsData}
          pointLat="lat"
          pointLng="lng"
          pointAltitude={0.02}
          pointRadius="size"
          pointColor={() => '#f97316'} // Orange color matching GitHub's orange theme
          pointResolution={8}
          onPointClick={handlePointClick}
          pointLabel={(point: any) => `
            <div style="
              background: rgba(33, 38, 45, 0.95);
              border: 1px solid #373e47;
              border-radius: 8px;
              padding: 8px 12px;
              color: #e6edf3;
              font-family: 'Inter', sans-serif;
              font-size: 12px;
              max-width: 200px;
            ">
              <div style="font-weight: 600; margin-bottom: 4px;">${point.name}</div>
              <div style="color: #8d96a0;">${point.city}, ${point.country}</div>
              <div style="color: #8d96a0; margin-top: 4px;">${point.date}</div>
            </div>
          `}
          
          // Globe interaction
          onGlobeClick={handleGlobeClick}
          
          // Styling - responsive sizing
          width={undefined}
          height={undefined}
          animateIn={true}
          waitForGlobeReady={true}
          
          // Atmosphere
          atmosphereColor="#58a6ff"
          atmosphereAltitude={0.15}
          
          // Controls
          enablePointerInteraction={true}
        />
      </div>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-md text-sm backdrop-blur-sm">
        <p>🌍 Click on globe to add pins • {(pins || []).length} places visited</p>
      </div>
      
      {/* Day/Night indicator */}
      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded-md text-sm backdrop-blur-sm">
        <p>🌓 Day/Night cycle active</p>
      </div>
    </div>
  )
}