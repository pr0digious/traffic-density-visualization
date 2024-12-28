'use client'

import { useState, useEffect } from 'react'
import { getTrafficData } from '@/lib/api'

export default function useTrafficData(city, time) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await getTrafficData(city, time)
        setData(result)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    if (city || time) {
      fetchData()
    }
  }, [city, time])

  return { data, loading, error }
}