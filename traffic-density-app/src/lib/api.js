import axios from 'axios'
import { cacheService } from './cache'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
})

export const getTrafficData = async (city, time) => {
  const cacheKey = `traffic-${city}-${time}`
  const cachedData = cacheService.get(cacheKey)
  
  if (cachedData) {
    return cachedData
  }

  try {
    const response = await api.get('/api/traffic', {
      params: { city, time }
    })
    cacheService.set(cacheKey, response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching traffic data:', error)
    throw error
  }
}