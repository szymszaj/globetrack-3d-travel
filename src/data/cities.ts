/**
 * Database of popular cities worldwide for autocomplete functionality
 * Includes cities from all continents with their countries
 */
export interface CityData {
  city: string
  country: string
  continent: string
}

export const CITIES_DATABASE: CityData[] = [
  // Europe
  { city: 'Warszawa', country: 'Poland', continent: 'Europe' },
  { city: 'Warsaw', country: 'Poland', continent: 'Europe' },
  { city: 'Kraków', country: 'Poland', continent: 'Europe' },
  { city: 'Krakow', country: 'Poland', continent: 'Europe' },
  { city: 'Gdańsk', country: 'Poland', continent: 'Europe' },
  { city: 'Wrocław', country: 'Poland', continent: 'Europe' },
  { city: 'Poznań', country: 'Poland', continent: 'Europe' },
  
  { city: 'Paris', country: 'France', continent: 'Europe' },
  { city: 'Paryż', country: 'France', continent: 'Europe' },
  { city: 'Lyon', country: 'France', continent: 'Europe' },
  { city: 'Marseille', country: 'France', continent: 'Europe' },
  { city: 'Nice', country: 'France', continent: 'Europe' },
  { city: 'Toulouse', country: 'France', continent: 'Europe' },
  
  { city: 'London', country: 'United Kingdom', continent: 'Europe' },
  { city: 'Londyn', country: 'United Kingdom', continent: 'Europe' },
  { city: 'Manchester', country: 'United Kingdom', continent: 'Europe' },
  { city: 'Edinburgh', country: 'United Kingdom', continent: 'Europe' },
  { city: 'Liverpool', country: 'United Kingdom', continent: 'Europe' },
  
  { city: 'Berlin', country: 'Germany', continent: 'Europe' },
  { city: 'Munich', country: 'Germany', continent: 'Europe' },
  { city: 'Hamburg', country: 'Germany', continent: 'Europe' },
  { city: 'Cologne', country: 'Germany', continent: 'Europe' },
  { city: 'Frankfurt', country: 'Germany', continent: 'Europe' },
  
  { city: 'Rome', country: 'Italy', continent: 'Europe' },
  { city: 'Rzym', country: 'Italy', continent: 'Europe' },
  { city: 'Milan', country: 'Italy', continent: 'Europe' },
  { city: 'Naples', country: 'Italy', continent: 'Europe' },
  { city: 'Venice', country: 'Italy', continent: 'Europe' },
  { city: 'Florence', country: 'Italy', continent: 'Europe' },
  
  { city: 'Madrid', country: 'Spain', continent: 'Europe' },
  { city: 'Madryt', country: 'Spain', continent: 'Europe' },
  { city: 'Barcelona', country: 'Spain', continent: 'Europe' },
  { city: 'Seville', country: 'Spain', continent: 'Europe' },
  { city: 'Valencia', country: 'Spain', continent: 'Europe' },
  
  { city: 'Amsterdam', country: 'Netherlands', continent: 'Europe' },
  { city: 'Rotterdam', country: 'Netherlands', continent: 'Europe' },
  { city: 'The Hague', country: 'Netherlands', continent: 'Europe' },
  
  { city: 'Prague', country: 'Czech Republic', continent: 'Europe' },
  { city: 'Praga', country: 'Czech Republic', continent: 'Europe' },
  { city: 'Vienna', country: 'Austria', continent: 'Europe' },
  { city: 'Wiedeń', country: 'Austria', continent: 'Europe' },
  { city: 'Budapest', country: 'Hungary', continent: 'Europe' },
  { city: 'Budapeszt', country: 'Hungary', continent: 'Europe' },
  
  { city: 'Stockholm', country: 'Sweden', continent: 'Europe' },
  { city: 'Copenhagen', country: 'Denmark', continent: 'Europe' },
  { city: 'Oslo', country: 'Norway', continent: 'Europe' },
  { city: 'Helsinki', country: 'Finland', continent: 'Europe' },
  
  { city: 'Zurich', country: 'Switzerland', continent: 'Europe' },
  { city: 'Geneva', country: 'Switzerland', continent: 'Europe' },
  { city: 'Brussels', country: 'Belgium', continent: 'Europe' },
  { city: 'Bruksela', country: 'Belgium', continent: 'Europe' },
  
  // North America
  { city: 'New York', country: 'United States', continent: 'North America' },
  { city: 'Nowy Jork', country: 'United States', continent: 'North America' },
  { city: 'Los Angeles', country: 'United States', continent: 'North America' },
  { city: 'Chicago', country: 'United States', continent: 'North America' },
  { city: 'San Francisco', country: 'United States', continent: 'North America' },
  { city: 'Las Vegas', country: 'United States', continent: 'North America' },
  { city: 'Miami', country: 'United States', continent: 'North America' },
  { city: 'Washington', country: 'United States', continent: 'North America' },
  { city: 'Boston', country: 'United States', continent: 'North America' },
  { city: 'Seattle', country: 'United States', continent: 'North America' },
  
  { city: 'Toronto', country: 'Canada', continent: 'North America' },
  { city: 'Vancouver', country: 'Canada', continent: 'North America' },
  { city: 'Montreal', country: 'Canada', continent: 'North America' },
  { city: 'Calgary', country: 'Canada', continent: 'North America' },
  { city: 'Ottawa', country: 'Canada', continent: 'North America' },
  
  { city: 'Mexico City', country: 'Mexico', continent: 'North America' },
  { city: 'Cancun', country: 'Mexico', continent: 'North America' },
  { city: 'Guadalajara', country: 'Mexico', continent: 'North America' },
  
  // Asia
  { city: 'Tokyo', country: 'Japan', continent: 'Asia' },
  { city: 'Tokio', country: 'Japan', continent: 'Asia' },
  { city: 'Osaka', country: 'Japan', continent: 'Asia' },
  { city: 'Kyoto', country: 'Japan', continent: 'Asia' },
  { city: 'Hiroshima', country: 'Japan', continent: 'Asia' },
  
  { city: 'Beijing', country: 'China', continent: 'Asia' },
  { city: 'Pekin', country: 'China', continent: 'Asia' },
  { city: 'Shanghai', country: 'China', continent: 'Asia' },
  { city: 'Hong Kong', country: 'Hong Kong', continent: 'Asia' },
  { city: 'Shenzhen', country: 'China', continent: 'Asia' },
  
  { city: 'Seoul', country: 'South Korea', continent: 'Asia' },
  { city: 'Seul', country: 'South Korea', continent: 'Asia' },
  { city: 'Busan', country: 'South Korea', continent: 'Asia' },
  
  { city: 'Singapore', country: 'Singapore', continent: 'Asia' },
  { city: 'Singapur', country: 'Singapore', continent: 'Asia' },
  
  { city: 'Bangkok', country: 'Thailand', continent: 'Asia' },
  { city: 'Phuket', country: 'Thailand', continent: 'Asia' },
  { city: 'Chiang Mai', country: 'Thailand', continent: 'Asia' },
  
  { city: 'Mumbai', country: 'India', continent: 'Asia' },
  { city: 'New Delhi', country: 'India', continent: 'Asia' },
  { city: 'Bangalore', country: 'India', continent: 'Asia' },
  { city: 'Chennai', country: 'India', continent: 'Asia' },
  { city: 'Kolkata', country: 'India', continent: 'Asia' },
  
  { city: 'Kuala Lumpur', country: 'Malaysia', continent: 'Asia' },
  { city: 'Jakarta', country: 'Indonesia', continent: 'Asia' },
  { city: 'Manila', country: 'Philippines', continent: 'Asia' },
  { city: 'Ho Chi Minh City', country: 'Vietnam', continent: 'Asia' },
  { city: 'Hanoi', country: 'Vietnam', continent: 'Asia' },
  
  { city: 'Dubai', country: 'United Arab Emirates', continent: 'Asia' },
  { city: 'Abu Dhabi', country: 'United Arab Emirates', continent: 'Asia' },
  { city: 'Doha', country: 'Qatar', continent: 'Asia' },
  { city: 'Riyadh', country: 'Saudi Arabia', continent: 'Asia' },
  
  { city: 'Tel Aviv', country: 'Israel', continent: 'Asia' },
  { city: 'Jerusalem', country: 'Israel', continent: 'Asia' },
  { city: 'Istanbul', country: 'Turkey', continent: 'Asia' },
  { city: 'Ankara', country: 'Turkey', continent: 'Asia' },
  
  // South America
  { city: 'São Paulo', country: 'Brazil', continent: 'South America' },
  { city: 'Rio de Janeiro', country: 'Brazil', continent: 'South America' },
  { city: 'Salvador', country: 'Brazil', continent: 'South America' },
  { city: 'Brasília', country: 'Brazil', continent: 'South America' },
  
  { city: 'Buenos Aires', country: 'Argentina', continent: 'South America' },
  { city: 'Córdoba', country: 'Argentina', continent: 'South America' },
  { city: 'Lima', country: 'Peru', continent: 'South America' },
  { city: 'Bogotá', country: 'Colombia', continent: 'South America' },
  { city: 'Santiago', country: 'Chile', continent: 'South America' },
  { city: 'Caracas', country: 'Venezuela', continent: 'South America' },
  { city: 'Quito', country: 'Ecuador', continent: 'South America' },
  { city: 'La Paz', country: 'Bolivia', continent: 'South America' },
  
  // Africa
  { city: 'Cairo', country: 'Egypt', continent: 'Africa' },
  { city: 'Kair', country: 'Egypt', continent: 'Africa' },
  { city: 'Cape Town', country: 'South Africa', continent: 'Africa' },
  { city: 'Johannesburg', country: 'South Africa', continent: 'Africa' },
  { city: 'Lagos', country: 'Nigeria', continent: 'Africa' },
  { city: 'Nairobi', country: 'Kenya', continent: 'Africa' },
  { city: 'Casablanca', country: 'Morocco', continent: 'Africa' },
  { city: 'Marrakech', country: 'Morocco', continent: 'Africa' },
  { city: 'Tunis', country: 'Tunisia', continent: 'Africa' },
  { city: 'Addis Ababa', country: 'Ethiopia', continent: 'Africa' },
  
  // Oceania
  { city: 'Sydney', country: 'Australia', continent: 'Oceania' },
  { city: 'Melbourne', country: 'Australia', continent: 'Oceania' },
  { city: 'Brisbane', country: 'Australia', continent: 'Oceania' },
  { city: 'Perth', country: 'Australia', continent: 'Oceania' },
  { city: 'Adelaide', country: 'Australia', continent: 'Oceania' },
  
  { city: 'Auckland', country: 'New Zealand', continent: 'Oceania' },
  { city: 'Wellington', country: 'New Zealand', continent: 'Oceania' },
  { city: 'Christchurch', country: 'New Zealand', continent: 'Oceania' },
  
  { city: 'Suva', country: 'Fiji', continent: 'Oceania' },
  { city: 'Port Moresby', country: 'Papua New Guinea', continent: 'Oceania' },
]

/**
 * Search cities by query string with fuzzy matching
 * Supports both city names and country names
 */
export function searchCities(query: string, limit: number = 10): CityData[] {
  if (!query || query.length < 2) return []
  
  const normalizedQuery = query.toLowerCase().trim()
  
  // Score cities based on how well they match the query
  const scoredCities = CITIES_DATABASE.map(city => {
    const cityName = city.city.toLowerCase()
    const countryName = city.country.toLowerCase()
    
    let score = 0
    
    // Exact match at start gets highest score
    if (cityName.startsWith(normalizedQuery)) {
      score = 100
    }
    // Exact match anywhere in the name
    else if (cityName.includes(normalizedQuery)) {
      score = 80
    }
    // Country name match
    else if (countryName.includes(normalizedQuery)) {
      score = 60
    }
    // Fuzzy matching for similar strings
    else if (isStringsSimilar(normalizedQuery, cityName)) {
      score = 40
    }
    
    return { ...city, score }
  })
  
  // Filter out non-matches and sort by score
  return scoredCities
    .filter(city => city.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

/**
 * Simple fuzzy string matching
 */
function isStringsSimilar(query: string, target: string, threshold: number = 0.7): boolean {
  if (query.length === 0) return false
  if (target.length === 0) return false
  
  // Simple character overlap check
  const queryChars = new Set(query.split(''))
  const targetChars = new Set(target.split(''))
  const intersection = new Set([...queryChars].filter(x => targetChars.has(x)))
  
  const similarity = intersection.size / Math.max(queryChars.size, targetChars.size)
  return similarity >= threshold
}