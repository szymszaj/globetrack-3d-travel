import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, PencilSimple, Trash, Image } from '@phosphor-icons/react'
import { TravelPin } from './TravelPinForm'
import { useKV } from '@github/spark/hooks'
import { motion, AnimatePresence } from 'framer-motion'

interface PinDetailsProps {
  pin: TravelPin | null
  onEdit: (pin: TravelPin) => void
  onClose: () => void
}

export function PinDetails({ pin, onEdit, onClose }: PinDetailsProps) {
  const [pins, setPins] = useKV<TravelPin[]>('travel-pins', [])

  const handleDelete = async () => {
    if (pin && window.confirm('Are you sure you want to delete this travel pin?')) {
      setPins(currentPins => (currentPins || []).filter(p => p.id !== pin.id))
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {pin && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-6"
        >
          <Card className="bg-card border-border overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <h3 className="text-xl font-semibold text-card-foreground">{pin.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span>{pin.city}, {pin.country}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(pin.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onEdit(pin)}
                    className="border-border hover:bg-secondary"
                  >
                    <PencilSimple className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleDelete}
                    className="border-border hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={onClose}
                    className="border-border hover:bg-secondary"
                  >
                    ✕
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {pin.photo && (
                <div className="relative overflow-hidden rounded-lg border border-border">
                  <img 
                    src={pin.photo} 
                    alt={pin.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>
              )}
              
              {pin.description && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-card-foreground flex items-center gap-2">
                    <Image className="h-4 w-4" />
                    Experience
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pin.description}
                  </p>
                </div>
              )}
              
              <div className="flex items-center gap-2 pt-2">
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  {pin.country}
                </Badge>
                <Badge variant="outline" className="border-border text-muted-foreground">
                  Coordinates: {pin.lat.toFixed(2)}, {pin.lng.toFixed(2)}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}