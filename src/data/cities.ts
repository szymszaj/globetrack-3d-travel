/**
 * Database of popular cities worldwide for autocomplete functionality
 * Includes cities from all continents with their countries and coordinates
 */
export interface CityData {
  city: string
  country: string
  continent: string
  lat: number
  lng: number
}

export const CITIES_DATABASE: CityData[] = [
  // Europe - Nordic Countries
  { city: 'Oslo', country: 'Norway', continent: 'Europe', lat: 59.9139, lng: 10.7522 },
  { city: 'Stockholm', country: 'Sweden', continent: 'Europe', lat: 59.3293, lng: 18.0686 },
  { city: 'Copenhagen', country: 'Denmark', continent: 'Europe', lat: 55.6761, lng: 12.5683 },
  { city: 'Helsinki', country: 'Finland', continent: 'Europe', lat: 60.1699, lng: 24.9384 },
  { city: 'Reykjavik', country: 'Iceland', continent: 'Europe', lat: 64.1466, lng: -21.9426 },

  // Europe - Poland
  { city: 'Warszawa', country: 'Poland', continent: 'Europe', lat: 52.2297, lng: 21.0122 },
  { city: 'Warsaw', country: 'Poland', continent: 'Europe', lat: 52.2297, lng: 21.0122 },
  { city: 'Kraków', country: 'Poland', continent: 'Europe', lat: 50.0647, lng: 19.9450 },
  { city: 'Krakow', country: 'Poland', continent: 'Europe', lat: 50.0647, lng: 19.9450 },
  { city: 'Gdańsk', country: 'Poland', continent: 'Europe', lat: 54.3520, lng: 18.6466 },
  { city: 'Gdansk', country: 'Poland', continent: 'Europe', lat: 54.3520, lng: 18.6466 },
  { city: 'Wrocław', country: 'Poland', continent: 'Europe', lat: 51.1079, lng: 17.0385 },
  { city: 'Wroclaw', country: 'Poland', continent: 'Europe', lat: 51.1079, lng: 17.0385 },
  { city: 'Poznań', country: 'Poland', continent: 'Europe', lat: 52.4064, lng: 16.9252 },
  { city: 'Poznan', country: 'Poland', continent: 'Europe', lat: 52.4064, lng: 16.9252 },

  // Europe - France
  { city: 'Paris', country: 'France', continent: 'Europe', lat: 48.8566, lng: 2.3522 },
  { city: 'Paryż', country: 'France', continent: 'Europe', lat: 48.8566, lng: 2.3522 },
  { city: 'Lyon', country: 'France', continent: 'Europe', lat: 45.7640, lng: 4.8357 },
  { city: 'Marseille', country: 'France', continent: 'Europe', lat: 43.2965, lng: 5.3698 },
  { city: 'Nice', country: 'France', continent: 'Europe', lat: 43.7102, lng: 7.2620 },
  { city: 'Toulouse', country: 'France', continent: 'Europe', lat: 43.6047, lng: 1.4442 },
  { city: 'Strasbourg', country: 'France', continent: 'Europe', lat: 48.5734, lng: 7.7521 },
  { city: 'Bordeaux', country: 'France', continent: 'Europe', lat: 44.8378, lng: -0.5792 },

  // Europe - Germany  
  { city: 'Berlin', country: 'Germany', continent: 'Europe', lat: 52.5200, lng: 13.4050 },
  { city: 'Munich', country: 'Germany', continent: 'Europe', lat: 48.1351, lng: 11.5820 },
  { city: 'Monachium', country: 'Germany', continent: 'Europe', lat: 48.1351, lng: 11.5820 },
  { city: 'Hamburg', country: 'Germany', continent: 'Europe', lat: 53.5511, lng: 9.9937 },
  { city: 'Cologne', country: 'Germany', continent: 'Europe', lat: 50.9375, lng: 6.9603 },
  { city: 'Frankfurt', country: 'Germany', continent: 'Europe', lat: 50.1109, lng: 8.6821 },
  { city: 'Stuttgart', country: 'Germany', continent: 'Europe', lat: 48.7758, lng: 9.1829 },
  { city: 'Düsseldorf', country: 'Germany', continent: 'Europe', lat: 51.2277, lng: 6.7735 },

  // Europe - UK
  { city: 'London', country: 'United Kingdom', continent: 'Europe', lat: 51.5074, lng: -0.1278 },
  { city: 'Londyn', country: 'United Kingdom', continent: 'Europe', lat: 51.5074, lng: -0.1278 },
  { city: 'Manchester', country: 'United Kingdom', continent: 'Europe', lat: 53.4808, lng: -2.2426 },
  { city: 'Edinburgh', country: 'United Kingdom', continent: 'Europe', lat: 55.9533, lng: -3.1883 },
  { city: 'Liverpool', country: 'United Kingdom', continent: 'Europe', lat: 53.4084, lng: -2.9916 },

  // Europe - Italy
  { city: 'Rome', country: 'Italy', continent: 'Europe', lat: 41.9028, lng: 12.4964 },
  { city: 'Rzym', country: 'Italy', continent: 'Europe', lat: 41.9028, lng: 12.4964 },
  { city: 'Milan', country: 'Italy', continent: 'Europe', lat: 45.4642, lng: 9.1900 },
  { city: 'Naples', country: 'Italy', continent: 'Europe', lat: 40.8518, lng: 14.2681 },
  { city: 'Venice', country: 'Italy', continent: 'Europe', lat: 45.4408, lng: 12.3155 },
  { city: 'Florence', country: 'Italy', continent: 'Europe', lat: 43.7696, lng: 11.2558 },

  // Europe - Spain
  { city: 'Madrid', country: 'Spain', continent: 'Europe', lat: 40.4168, lng: -3.7038 },
  { city: 'Barcelona', country: 'Spain', continent: 'Europe', lat: 41.3851, lng: 2.1734 },
  { city: 'Seville', country: 'Spain', continent: 'Europe', lat: 37.3891, lng: -5.9845 },
  { city: 'Valencia', country: 'Spain', continent: 'Europe', lat: 39.4699, lng: -0.3763 },

  // Europe - Netherlands
  { city: 'Amsterdam', country: 'Netherlands', continent: 'Europe', lat: 52.3676, lng: 4.9041 },
  { city: 'Rotterdam', country: 'Netherlands', continent: 'Europe', lat: 51.9244, lng: 4.4777 },
  { city: 'The Hague', country: 'Netherlands', continent: 'Europe', lat: 52.0705, lng: 4.3007 },

  // Europe - Others
  { city: 'Prague', country: 'Czech Republic', continent: 'Europe', lat: 50.0755, lng: 14.4378 },
  { city: 'Praga', country: 'Czech Republic', continent: 'Europe', lat: 50.0755, lng: 14.4378 },
  { city: 'Vienna', country: 'Austria', continent: 'Europe', lat: 48.2082, lng: 16.3738 },
  { city: 'Budapest', country: 'Hungary', continent: 'Europe', lat: 47.4979, lng: 19.0402 },
  { city: 'Zurich', country: 'Switzerland', continent: 'Europe', lat: 47.3769, lng: 8.5417 },
  { city: 'Geneva', country: 'Switzerland', continent: 'Europe', lat: 46.2044, lng: 6.1432 },
  { city: 'Brussels', country: 'Belgium', continent: 'Europe', lat: 50.8503, lng: 4.3517 },

  // North America
  { city: 'New York', country: 'United States', continent: 'North America', lat: 40.7128, lng: -74.0060 },
  { city: 'Los Angeles', country: 'United States', continent: 'North America', lat: 34.0522, lng: -118.2437 },
  { city: 'Chicago', country: 'United States', continent: 'North America', lat: 41.8781, lng: -87.6298 },
  { city: 'San Francisco', country: 'United States', continent: 'North America', lat: 37.7749, lng: -122.4194 },
  { city: 'Las Vegas', country: 'United States', continent: 'North America', lat: 36.1699, lng: -115.1398 },
  { city: 'Miami', country: 'United States', continent: 'North America', lat: 25.7617, lng: -80.1918 },
  { city: 'Washington', country: 'United States', continent: 'North America', lat: 38.9072, lng: -77.0369 },
  { city: 'Boston', country: 'United States', continent: 'North America', lat: 42.3601, lng: -71.0589 },
  { city: 'Seattle', country: 'United States', continent: 'North America', lat: 47.6062, lng: -122.3321 },

  { city: 'Toronto', country: 'Canada', continent: 'North America', lat: 43.6532, lng: -79.3832 },
  { city: 'Vancouver', country: 'Canada', continent: 'North America', lat: 49.2827, lng: -123.1207 },
  { city: 'Montreal', country: 'Canada', continent: 'North America', lat: 45.5017, lng: -73.5673 },

  { city: 'Mexico City', country: 'Mexico', continent: 'North America', lat: 19.4326, lng: -99.1332 },
  { city: 'Cancun', country: 'Mexico', continent: 'North America', lat: 21.1619, lng: -86.8515 },

  // Asia
  { city: 'Tokyo', country: 'Japan', continent: 'Asia', lat: 35.6762, lng: 139.6503 },
  { city: 'Tokio', country: 'Japan', continent: 'Asia', lat: 35.6762, lng: 139.6503 },
  { city: 'Osaka', country: 'Japan', continent: 'Asia', lat: 34.6937, lng: 135.5023 },
  { city: 'Kyoto', country: 'Japan', continent: 'Asia', lat: 35.0116, lng: 135.7681 },

  { city: 'Beijing', country: 'China', continent: 'Asia', lat: 39.9042, lng: 116.4074 },
  { city: 'Shanghai', country: 'China', continent: 'Asia', lat: 31.2304, lng: 121.4737 },
  { city: 'Hong Kong', country: 'Hong Kong', continent: 'Asia', lat: 22.3193, lng: 114.1694 },

  { city: 'Seoul', country: 'South Korea', continent: 'Asia', lat: 37.5665, lng: 126.9780 },
  { city: 'Singapore', country: 'Singapore', continent: 'Asia', lat: 1.3521, lng: 103.8198 },

  { city: 'Bangkok', country: 'Thailand', continent: 'Asia', lat: 13.7563, lng: 100.5018 },
  { city: 'Mumbai', country: 'India', continent: 'Asia', lat: 19.0760, lng: 72.8777 },
  { city: 'New Delhi', country: 'India', continent: 'Asia', lat: 28.6139, lng: 77.2090 },

  { city: 'Dubai', country: 'United Arab Emirates', continent: 'Asia', lat: 25.2048, lng: 55.2708 },
  { city: 'Istanbul', country: 'Turkey', continent: 'Asia', lat: 41.0082, lng: 28.9784 },

  // South America
  { city: 'São Paulo', country: 'Brazil', continent: 'South America', lat: -23.5558, lng: -46.6396 },
  { city: 'Rio de Janeiro', country: 'Brazil', continent: 'South America', lat: -22.9068, lng: -43.1729 },
  { city: 'Buenos Aires', country: 'Argentina', continent: 'South America', lat: -34.6118, lng: -58.3960 },
  { city: 'Lima', country: 'Peru', continent: 'South America', lat: -12.0464, lng: -77.0428 },
  { city: 'Santiago', country: 'Chile', continent: 'South America', lat: -33.4489, lng: -70.6693 },

  // Africa
  { city: 'Cairo', country: 'Egypt', continent: 'Africa', lat: 30.0444, lng: 31.2357 },
  { city: 'Cape Town', country: 'South Africa', continent: 'Africa', lat: -33.9249, lng: 18.4241 },
  { city: 'Johannesburg', country: 'South Africa', continent: 'Africa', lat: -26.2041, lng: 28.0473 },
  { city: 'Casablanca', country: 'Morocco', continent: 'Africa', lat: 33.5731, lng: -7.5898 },
  { city: 'Nairobi', country: 'Kenya', continent: 'Africa', lat: -1.2921, lng: 36.8219 },

  // Oceania
  { city: 'Sydney', country: 'Australia', continent: 'Oceania', lat: -33.8688, lng: 151.2093 },
  { city: 'Melbourne', country: 'Australia', continent: 'Oceania', lat: -37.8136, lng: 144.9631 },
  { city: 'Brisbane', country: 'Australia', continent: 'Oceania', lat: -27.4698, lng: 153.0251 },
  { city: 'Auckland', country: 'New Zealand', continent: 'Oceania', lat: -36.8485, lng: 174.7633 },
  { city: 'Wellington', country: 'New Zealand', continent: 'Oceania', lat: -41.2924, lng: 174.7787 }
]

/**
 * Search cities by query string with fuzzy matching
 * Supports both city names and country names
 */
export function searchCities(query: string, limit: number = 10): CityData[] {
  if (!query || query.length < 1) return []
  
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
    // Exact match anywhere in the city name
    else if (cityName.includes(normalizedQuery)) {
      score = 80
    }
    // Country name starts with query (for pol -> Poland, fra -> France)
    else if (countryName.startsWith(normalizedQuery)) {
      score = 90
    }
    // Country name contains query
    else if (countryName.includes(normalizedQuery)) {
      score = 70
    }
    // Fuzzy matching for similar strings
    else if (isStringsSimilar(normalizedQuery, cityName)) {
      score = 40
    }
    // Fuzzy matching for country names
    else if (isStringsSimilar(normalizedQuery, countryName)) {
      score = 30
    }
    
    return { ...city, score }
  })
  
  // Filter out non-matches, remove duplicates, and sort by score
  const uniqueCities = new Map<string, typeof scoredCities[0]>()
  
  scoredCities
    .filter(city => city.score > 0)
    .forEach(city => {
      const key = `${city.city}-${city.country}`
      if (!uniqueCities.has(key) || (uniqueCities.get(key)?.score || 0) < city.score) {
        uniqueCities.set(key, city)
      }
    })
  
  return Array.from(uniqueCities.values())
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