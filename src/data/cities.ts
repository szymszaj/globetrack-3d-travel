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
  // Europe - Poland
  { city: 'Warszawa', country: 'Poland', continent: 'Europe' },
  { city: 'Warsaw', country: 'Poland', continent: 'Europe' },
  { city: 'Kraków', country: 'Poland', continent: 'Europe' },
  { city: 'Krakow', country: 'Poland', continent: 'Europe' },
  { city: 'Gdańsk', country: 'Poland', continent: 'Europe' },
  { city: 'Gdansk', country: 'Poland', continent: 'Europe' },
  { city: 'Wrocław', country: 'Poland', continent: 'Europe' },
  { city: 'Wroclaw', country: 'Poland', continent: 'Europe' },
  { city: 'Poznań', country: 'Poland', continent: 'Europe' },
  { city: 'Poznan', country: 'Poland', continent: 'Europe' },
  { city: 'Łódź', country: 'Poland', continent: 'Europe' },
  { city: 'Lodz', country: 'Poland', continent: 'Europe' },
  { city: 'Szczecin', country: 'Poland', continent: 'Europe' },
  { city: 'Lublin', country: 'Poland', continent: 'Europe' },
  { city: 'Katowice', country: 'Poland', continent: 'Europe' },
  { city: 'Bydgoszcz', country: 'Poland', continent: 'Europe' },
  { city: 'Białystok', country: 'Poland', continent: 'Europe' },
  { city: 'Bialystok', country: 'Poland', continent: 'Europe' },
  { city: 'Toruń', country: 'Poland', continent: 'Europe' },
  { city: 'Torun', country: 'Poland', continent: 'Europe' },
  { city: 'Rzeszów', country: 'Poland', continent: 'Europe' },
  { city: 'Rzeszow', country: 'Poland', continent: 'Europe' },
  { city: 'Olsztyn', country: 'Poland', continent: 'Europe' },
  { city: 'Kielce', country: 'Poland', continent: 'Europe' },
  { city: 'Częstochowa', country: 'Poland', continent: 'Europe' },
  { city: 'Czestochowa', country: 'Poland', continent: 'Europe' },
  { city: 'Radom', country: 'Poland', continent: 'Europe' },
  { city: 'Sosnowiec', country: 'Poland', continent: 'Europe' },
  { city: 'Gliwice', country: 'Poland', continent: 'Europe' },
  { city: 'Zabrze', country: 'Poland', continent: 'Europe' },
  { city: 'Bytom', country: 'Poland', continent: 'Europe' },
  { city: 'Ruda Śląska', country: 'Poland', continent: 'Europe' },
  { city: 'Rybnik', country: 'Poland', continent: 'Europe' },
  { city: 'Tychy', country: 'Poland', continent: 'Europe' },
  { city: 'Dąbrowa Górnicza', country: 'Poland', continent: 'Europe' },
  { city: 'Płock', country: 'Poland', continent: 'Europe' },
  { city: 'Elbląg', country: 'Poland', continent: 'Europe' },
  { city: 'Elblaz', country: 'Poland', continent: 'Europe' },
  { city: 'Opole', country: 'Poland', continent: 'Europe' },
  { city: 'Gorzów Wielkopolski', country: 'Poland', continent: 'Europe' },
  { city: 'Wałbrzych', country: 'Poland', continent: 'Europe' },
  { city: 'Walbrzych', country: 'Poland', continent: 'Europe' },
  { city: 'Włocławek', country: 'Poland', continent: 'Europe' },
  { city: 'Wloclawek', country: 'Poland', continent: 'Europe' },
  { city: 'Tarnów', country: 'Poland', continent: 'Europe' },
  { city: 'Tarnow', country: 'Poland', continent: 'Europe' },
  { city: 'Chorzów', country: 'Poland', continent: 'Europe' },
  { city: 'Chorzow', country: 'Poland', continent: 'Europe' },
  { city: 'Kalisz', country: 'Poland', continent: 'Europe' },
  { city: 'Koszalin', country: 'Poland', continent: 'Europe' },
  { city: 'Legnica', country: 'Poland', continent: 'Europe' },
  
  // Europe - France
  { city: 'Paris', country: 'France', continent: 'Europe' },
  { city: 'Paryż', country: 'France', continent: 'Europe' },
  { city: 'Lyon', country: 'France', continent: 'Europe' },
  { city: 'Marseille', country: 'France', continent: 'Europe' },
  { city: 'Marsylia', country: 'France', continent: 'Europe' },
  { city: 'Nice', country: 'France', continent: 'Europe' },
  { city: 'Nicca', country: 'France', continent: 'Europe' },
  { city: 'Toulouse', country: 'France', continent: 'Europe' },
  { city: 'Nantes', country: 'France', continent: 'Europe' },
  { city: 'Strasbourg', country: 'France', continent: 'Europe' },
  { city: 'Montpellier', country: 'France', continent: 'Europe' },
  { city: 'Bordeaux', country: 'France', continent: 'Europe' },
  { city: 'Lille', country: 'France', continent: 'Europe' },
  { city: 'Rennes', country: 'France', continent: 'Europe' },
  { city: 'Reims', country: 'France', continent: 'Europe' },
  { city: 'Le Havre', country: 'France', continent: 'Europe' },
  { city: 'Saint-Étienne', country: 'France', continent: 'Europe' },
  { city: 'Toulon', country: 'France', continent: 'Europe' },
  { city: 'Angers', country: 'France', continent: 'Europe' },
  { city: 'Grenoble', country: 'France', continent: 'Europe' },
  { city: 'Dijon', country: 'France', continent: 'Europe' },
  { city: 'Nîmes', country: 'France', continent: 'Europe' },
  { city: 'Aix-en-Provence', country: 'France', continent: 'Europe' },
  { city: 'Le Mans', country: 'France', continent: 'Europe' },
  { city: 'Brest', country: 'France', continent: 'Europe' },
  { city: 'Tours', country: 'France', continent: 'Europe' },
  { city: 'Limoges', country: 'France', continent: 'Europe' },
  { city: 'Clermont-Ferrand', country: 'France', continent: 'Europe' },
  { city: 'Villeurbanne', country: 'France', continent: 'Europe' },
  { city: 'Amiens', country: 'France', continent: 'Europe' },
  { city: 'Metz', country: 'France', continent: 'Europe' },
  { city: 'Besançon', country: 'France', continent: 'Europe' },
  { city: 'Orléans', country: 'France', continent: 'Europe' },
  { city: 'Mulhouse', country: 'France', continent: 'Europe' },
  { city: 'Rouen', country: 'France', continent: 'Europe' },
  { city: 'Perpignan', country: 'France', continent: 'Europe' },
  { city: 'Caen', country: 'France', continent: 'Europe' },
  { city: 'Nancy', country: 'France', continent: 'Europe' },
  
  { city: 'London', country: 'United Kingdom', continent: 'Europe' },
  { city: 'Londyn', country: 'United Kingdom', continent: 'Europe' },
  { city: 'Manchester', country: 'United Kingdom', continent: 'Europe' },
  { city: 'Edinburgh', country: 'United Kingdom', continent: 'Europe' },
  { city: 'Liverpool', country: 'United Kingdom', continent: 'Europe' },
  
  // Europe - Germany  
  { city: 'Berlin', country: 'Germany', continent: 'Europe' },
  { city: 'Munich', country: 'Germany', continent: 'Europe' },
  { city: 'Monachium', country: 'Germany', continent: 'Europe' },
  { city: 'Hamburg', country: 'Germany', continent: 'Europe' },
  { city: 'Cologne', country: 'Germany', continent: 'Europe' },
  { city: 'Kolonia', country: 'Germany', continent: 'Europe' },
  { city: 'Frankfurt', country: 'Germany', continent: 'Europe' },
  { city: 'Stuttgart', country: 'Germany', continent: 'Europe' },
  { city: 'Düsseldorf', country: 'Germany', continent: 'Europe' },
  { city: 'Dortmund', country: 'Germany', continent: 'Europe' },
  { city: 'Essen', country: 'Germany', continent: 'Europe' },
  { city: 'Leipzig', country: 'Germany', continent: 'Europe' },
  { city: 'Bremen', country: 'Germany', continent: 'Europe' },
  { city: 'Dresden', country: 'Germany', continent: 'Europe' },
  { city: 'Hanover', country: 'Germany', continent: 'Europe' },
  { city: 'Nuremberg', country: 'Germany', continent: 'Europe' },
  { city: 'Duisburg', country: 'Germany', continent: 'Europe' },
  { city: 'Bochum', country: 'Germany', continent: 'Europe' },
  { city: 'Wuppertal', country: 'Germany', continent: 'Europe' },
  { city: 'Bielefeld', country: 'Germany', continent: 'Europe' },
  { city: 'Bonn', country: 'Germany', continent: 'Europe' },
  { city: 'Münster', country: 'Germany', continent: 'Europe' },
  
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