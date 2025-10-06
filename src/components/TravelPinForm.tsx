import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Calendar, FileText, Image } from '@phosphor-icons/react'
import { useKV } from '@github/spark/hooks'
import { CityAutocomplete } from '@/components/CityAutocomplete'
import { type CityData } from '@/data/cities'

export interface TravelPin {
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

interface TravelPinFormProps {
  isOpen: boolean
  onClose: () => void
  lat?: number
  lng?: number
  editPin?: TravelPin | null
}

export function TravelPinForm({ isOpen, onClose, lat, lng, editPin }: TravelPinFormProps) {
  const [pins, setPins] = useKV<TravelPin[]>('travel-pins', [])
  const [isLoading, setIsLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    city: editPin?.city || '',
    country: editPin?.country || '',
    date: editPin?.date || new Date().toISOString().split('T')[0],
    description: editPin?.description || '',
    photo: editPin?.photo || ''
  })

  const handleCitySelect = (city: CityData) => {
    setFormData(prev => ({
      ...prev,
      city: city.city,
      country: city.country
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const newPin: TravelPin = {
        id: editPin?.id || Date.now().toString(),
        lat: editPin?.lat || lat || 0,
        lng: editPin?.lng || lng || 0,
        name: formData.city, // Use city name as the place name
        ...formData
      }

      if (editPin) {
        // Update existing pin
        setPins(currentPins => 
          (currentPins || []).map(pin => pin.id === editPin.id ? newPin : pin)
        )
      } else {
        // Add new pin
        setPins(currentPins => [...(currentPins || []), newPin])
      }

      onClose()
      setFormData({
        city: '',
        country: '',
        date: new Date().toISOString().split('T')[0],
        description: '',
        photo: ''
      })
    } catch (error) {
      console.error('Error saving pin:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            {editPin ? 'Edit Travel Pin' : 'Add New Travel Pin'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm font-medium">City</Label>
            <CityAutocomplete
              id="city"
              value={formData.city}
              onValueChange={(value) => setFormData(prev => ({ ...prev, city: value }))}
              onCitySelect={handleCitySelect}
              placeholder="e.g., Paris, Warszawa, Tokyo..."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="text-sm font-medium">Country</Label>
            <Input
              id="country"
              value={formData.country}
              onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
              placeholder="e.g., France"
              required
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Visit Date
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              required
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Description
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Share your experience..."
              rows={3}
              className="bg-background border-border resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="photo" className="text-sm font-medium flex items-center gap-2">
              <Image className="h-4 w-4" />
              Photo URL (optional)
            </Label>
            <Input
              id="photo"
              type="url"
              value={formData.photo}
              onChange={(e) => setFormData(prev => ({ ...prev, photo: e.target.value }))}
              placeholder="https://..."
              className="bg-background border-border"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="border-border hover:bg-secondary"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-primary hover:bg-primary/90"
            >
              {isLoading ? 'Saving...' : editPin ? 'Update Pin' : 'Add Pin'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}