import { useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Globe, MapPin, Flag, Buildings } from '@phosphor-icons/react'
import { useKV } from '@github/spark/hooks'
import { TravelPin } from './TravelPinForm'

// Total countries in the world (UN members + some territories)
const TOTAL_COUNTRIES = 195

// Continents mapping
const CONTINENT_MAP: Record<string, string> = {
  // North America
  'United States': 'North America',
  'Canada': 'North America',
  'Mexico': 'North America',
  // Europe
  'France': 'Europe',
  'Germany': 'Europe',
  'Italy': 'Europe',
  'Spain': 'Europe',
  'United Kingdom': 'Europe',
  'Netherlands': 'Europe',
  'Switzerland': 'Europe',
  'Austria': 'Europe',
  'Belgium': 'Europe',
  'Portugal': 'Europe',
  'Greece': 'Europe',
  'Norway': 'Europe',
  'Sweden': 'Europe',
  'Denmark': 'Europe',
  'Finland': 'Europe',
  'Poland': 'Europe',
  'Czech Republic': 'Europe',
  'Hungary': 'Europe',
  'Croatia': 'Europe',
  'Russia': 'Europe',
  // Asia
  'Japan': 'Asia',
  'China': 'Asia',
  'South Korea': 'Asia',
  'Thailand': 'Asia',
  'Singapore': 'Asia',
  'Malaysia': 'Asia',
  'Indonesia': 'Asia',
  'Philippines': 'Asia',
  'Vietnam': 'Asia',
  'India': 'Asia',
  'Nepal': 'Asia',
  'Sri Lanka': 'Asia',
  'Myanmar': 'Asia',
  'Cambodia': 'Asia',
  'Laos': 'Asia',
  'Mongolia': 'Asia',
  'Kazakhstan': 'Asia',
  'Uzbekistan': 'Asia',
  'Turkey': 'Asia',
  'United Arab Emirates': 'Asia',
  'Qatar': 'Asia',
  'Saudi Arabia': 'Asia',
  'Israel': 'Asia',
  'Jordan': 'Asia',
  'Iran': 'Asia',
  'Iraq': 'Asia',
  'Pakistan': 'Asia',
  'Afghanistan': 'Asia',
  'Bangladesh': 'Asia',
  // Africa
  'Egypt': 'Africa',
  'Morocco': 'Africa',
  'Tunisia': 'Africa',
  'South Africa': 'Africa',
  'Kenya': 'Africa',
  'Tanzania': 'Africa',
  'Uganda': 'Africa',
  'Rwanda': 'Africa',
  'Ethiopia': 'Africa',
  'Ghana': 'Africa',
  'Nigeria': 'Africa',
  'Senegal': 'Africa',
  'Mali': 'Africa',
  'Burkina Faso': 'Africa',
  'Ivory Coast': 'Africa',
  'Madagascar': 'Africa',
  'Mauritius': 'Africa',
  'Seychelles': 'Africa',
  'Zimbabwe': 'Africa',
  'Botswana': 'Africa',
  'Namibia': 'Africa',
  'Zambia': 'Africa',
  'Malawi': 'Africa',
  'Mozambique': 'Africa',
  // South America
  'Brazil': 'South America',
  'Argentina': 'South America',
  'Chile': 'South America',
  'Peru': 'South America',
  'Colombia': 'South America',
  'Venezuela': 'South America',
  'Ecuador': 'South America',
  'Bolivia': 'South America',
  'Paraguay': 'South America',
  'Uruguay': 'South America',
  'Guyana': 'South America',
  'Suriname': 'South America',
  // Oceania
  'Australia': 'Oceania',
  'New Zealand': 'Oceania',
  'Fiji': 'Oceania',
  'Papua New Guinea': 'Oceania',
  'Samoa': 'Oceania',
  'Tonga': 'Oceania',
  'Vanuatu': 'Oceania',
  'Solomon Islands': 'Oceania',
  'Palau': 'Oceania',
  'Micronesia': 'Oceania',
  'Marshall Islands': 'Oceania',
  'Kiribati': 'Oceania',
  'Tuvalu': 'Oceania',
  'Nauru': 'Oceania'
}

export function TravelStats() {
  const [pins] = useKV<TravelPin[]>('travel-pins', [])

  const stats = useMemo(() => {
    if (!pins || pins.length === 0) {
      return {
        countries: 0,
        cities: 0,
        continents: 0,
        percentage: 0,
        totalPins: 0
      }
    }

    const uniqueCountries = new Set(pins.map(pin => pin.country))
    const uniqueCities = new Set(pins.map(pin => `${pin.city}, ${pin.country}`))
    const uniqueContinents = new Set(
      pins.map(pin => CONTINENT_MAP[pin.country] || 'Unknown').filter(c => c !== 'Unknown')
    )

    const countriesVisited = uniqueCountries.size
    const citiesVisited = uniqueCities.size
    const continentsVisited = uniqueContinents.size
    const worldPercentage = Math.round((countriesVisited / TOTAL_COUNTRIES) * 100)

    return {
      countries: countriesVisited,
      cities: citiesVisited,
      continents: continentsVisited,
      percentage: worldPercentage,
      totalPins: pins.length
    }
  }, [pins])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-card-foreground">Countries Visited</CardTitle>
          <Flag className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">{stats.countries}</div>
          <p className="text-xs text-muted-foreground">
            {stats.percentage}% of the world
          </p>
          <Progress 
            value={stats.percentage} 
            className="mt-2 h-2"
          />
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-card-foreground">Cities Visited</CardTitle>
          <Buildings className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-accent">{stats.cities}</div>
          <p className="text-xs text-muted-foreground">
            Unique destinations
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-card-foreground">Continents</CardTitle>
          <Globe className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">{stats.continents}</div>
          <p className="text-xs text-muted-foreground">
            Out of 7 continents
          </p>
          <Progress 
            value={(stats.continents / 7) * 100} 
            className="mt-2 h-2"
          />
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-card-foreground">Total Pins</CardTitle>
          <MapPin className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-accent">{stats.totalPins}</div>
          <p className="text-xs text-muted-foreground">
            Travel memories
          </p>
        </CardContent>
      </Card>
    </div>
  )
}