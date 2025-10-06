import { useState, useRef, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { MapPin, Check } from '@phosphor-icons/react'
import { searchCities, type CityData } from '@/data/cities'
import { cn } from '@/lib/utils'

interface CityAutocompleteProps {
  value: string
  onValueChange: (value: string) => void
  onCitySelect?: (city: CityData) => void
  placeholder?: string
  className?: string
  id?: string
  required?: boolean
}

export function CityAutocomplete({
  value,
  onValueChange,
  onCitySelect,
  placeholder = "Start typing city name...",
  className,
  id,
  required
}: CityAutocompleteProps) {
  const [open, setOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<CityData[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (value.length >= 1) {
      timeoutRef.current = setTimeout(() => {
        const results = searchCities(value, 8)
        setSuggestions(results)
        setSelectedIndex(-1)
        setOpen(results.length > 0)
      }, 100)
    } else {
      setSuggestions([])
      setOpen(false)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [value])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onValueChange(newValue)
  }

  const handleSelectCity = (city: CityData) => {
    onValueChange(city.city)
    onCitySelect?.(city)
    setOpen(false)
    setSuggestions([])
    inputRef.current?.blur()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open || suggestions.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        )
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSelectCity(suggestions[selectedIndex])
        }
        break
      case 'Escape':
        setOpen(false)
        setSuggestions([])
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const handleInputFocus = () => {
    if (value.length >= 1 && suggestions.length > 0) {
      setOpen(true)
    }
  }

  const handleInputBlur = (e: React.FocusEvent) => {
    if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget as Node)) {
      setTimeout(() => {
        setOpen(false)
        setSelectedIndex(-1)
      }, 200)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          <Input
            ref={inputRef}
            id={id}
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder={placeholder}
            required={required}
            className={cn("bg-background border-border", className)}
            autoComplete="off"
          />
          {value.length >= 1 && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
            </div>
          )}
        </div>
      </PopoverTrigger>
      
      {open && suggestions.length > 0 && (
        <PopoverContent 
          className="w-[var(--radix-popover-trigger-width)] p-0 bg-popover border-border"
          align="start"
          side="bottom"
          sideOffset={4}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Command className="bg-transparent">
            <CommandList className="max-h-60">
              <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">
                No cities found.
              </CommandEmpty>
              <CommandGroup>
                {suggestions.map((city, index) => (
                  <CommandItem
                    key={`${city.city}-${city.country}-${index}`}
                    value={city.city}
                    onSelect={() => handleSelectCity(city)}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-accent hover:text-accent-foreground",
                      selectedIndex === index && "bg-accent text-accent-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{city.city}</div>
                        <div className="text-sm text-muted-foreground">
                          {city.country} • {city.continent}
                        </div>
                      </div>
                    </div>
                    {value.toLowerCase() === city.city.toLowerCase() && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      )}
    </Popover>
  )
}