import { useState, useCallback } from 'react'

const API_BASE    = 'https://www.urusverify.com/v1/client/1eb3933b-e3b9-479f-8496-a9b693076aec/api'
const FACTORY_KEY = 'factory2026'

/**
 * fetchApi — wrapper de fetch con headers automáticos.
 * @param {string} endpoint  - ruta relativa, e.g. '/users'
 * @param {RequestInit} options - opciones nativas de fetch (method, body, etc.)
 * @returns {Promise<any>}   - JSON de respuesta
 */
export async function fetchApi(endpoint = '', options = {}) {
  const url = `${API_BASE}${endpoint}`

  const headers = {
    'Content-Type': 'application/json',
    'x-factory-key': FACTORY_KEY,
    ...options.headers
  }

  const config = {
    ...options,
    headers
  }

  if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body)
  }

  const response = await fetch(url, config)

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: response.statusText }))
    const error = new Error(errorData?.message || `HTTP error ${response.status}`)
    error.status = response.status
    error.data   = errorData
    throw error
  }

  const text = await response.text()
  return text ? JSON.parse(text) : null
}

/**
 * useApi — hook React para consumir fetchApi con estado loading/error/data.
 * @returns {{ data, loading, error, request }}
 *
 * Uso:
 *   const { data, loading, error, request } = useApi()
 *   useEffect(() => { request('/endpoint') }, [])
 */
export function useApi() {
  const [data,    setData]    = useState(null)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState(null)

  const request = useCallback(async (endpoint, options = {}) => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetchApi(endpoint, options)
      setData(result)
      return result
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const reset = useCallback(() => {
    setData(null)
    setError(null)
    setLoading(false)
  }, [])

  return { data, loading, error, request, reset }
}