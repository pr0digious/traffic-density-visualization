import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
})

export const getTrafficData = async (city, time) => {
  try {
    const response = await api.get('/api/traffic', {
      params: { city, time }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching traffic data:', error)
    throw error
  }
}

export default api