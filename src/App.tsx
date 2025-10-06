import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Globe } from '@phosphor-icons/react'
import { SimpleGlobe } from '@/components/SimpleGlobe'
import { TravelPinForm, TravelPin } from '@/components/TravelPinForm'
import { TravelStats } from '@/components/TravelStats'
import { PinDetails } from '@/components/PinDetails'
import { Toaster } from 'sonner'
import { toast } from 'sonner'

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedCoords, setSelectedCoords] = useState<{ lat: number; lng: number } | null>(null)
  const [selectedPin, setSelectedPin] = useState<TravelPin | null>(null)
  const [editingPin, setEditingPin] = useState<TravelPin | null>(null)

  const handleLocationClick = (lat: number, lng: number) => {
    setSelectedCoords({ lat, lng })
    setEditingPin(null)
    setIsFormOpen(true)
    toast.success(`Location selected: ${lat.toFixed(2)}, ${lng.toFixed(2)}`)
  }

  const handlePinClick = (pin: TravelPin) => {
    setSelectedPin(pin)
    toast.info(`Viewing ${pin.name}`)
  }

  const handleEdit = (pin: TravelPin) => {
    setEditingPin(pin)
    setSelectedCoords(null)
    setIsFormOpen(true)
  }

  const handleFormClose = () => {
    setIsFormOpen(false)
    setSelectedCoords(null)
    setEditingPin(null)
  }

  const handleDetailsClose = () => {
    setSelectedPin(null)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Travel Globe</h1>
                <p className="text-sm text-muted-foreground">Track your adventures around the world</p>
              </div>
            </div>
            
            <Button
              onClick={() => {
                setSelectedCoords(null)
                setEditingPin(null)
                setIsFormOpen(true)
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Place
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Statistics */}
        <TravelStats />
        
        {/* Globe */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Interactive Globe</h2>
            <p className="text-sm text-muted-foreground">
              Click on the globe to add a new travel pin
            </p>
          </div>
          
          <SimpleGlobe
            onLocationClick={handleLocationClick}
            onPinClick={handlePinClick}
            selectedPin={selectedPin}
          />
        </div>

        {/* Pin Details */}
        {selectedPin && (
          <PinDetails
            pin={selectedPin}
            onEdit={handleEdit}
            onClose={handleDetailsClose}
          />
        )}
      </main>

      {/* Forms */}
      <TravelPinForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        lat={selectedCoords?.lat}
        lng={selectedCoords?.lng}
        editPin={editingPin}
      />

      {/* Toast notifications */}
      <Toaster 
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#21262d',
            border: '1px solid #373e47',
            color: '#e6edf3',
          },
        }}
      />
    </div>
  )
}

export default App