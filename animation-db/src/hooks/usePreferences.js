import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'animation-db-preferences'

function loadPreferences() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function savePreferences(prefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
  } catch {
    // quota exceeded — silently degrade
  }
}

export function usePreferences() {
  const [preferences, setPreferences] = useState(loadPreferences)

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) {
        setPreferences(loadPreferences())
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const getStatus = useCallback(
    (animationId) => preferences[animationId] || null,
    [preferences]
  )

  const approve = useCallback((animationId) => {
    setPreferences((prev) => {
      const next = { ...prev, [animationId]: 'approved' }
      savePreferences(next)
      return next
    })
  }, [])

  const decline = useCallback((animationId) => {
    setPreferences((prev) => {
      const next = { ...prev, [animationId]: 'declined' }
      savePreferences(next)
      return next
    })
  }, [])

  const unrate = useCallback((animationId) => {
    setPreferences((prev) => {
      const next = { ...prev }
      delete next[animationId]
      savePreferences(next)
      return next
    })
  }, [])

  const getStats = useCallback(() => {
    const entries = Object.values(preferences)
    return {
      total: entries.length,
      approved: entries.filter((v) => v === 'approved').length,
      declined: entries.filter((v) => v === 'declined').length,
      unrated: Object.keys(preferences).length === 0 ? 0 : 0,
    }
  }, [preferences])

  const exportData = useCallback(() => {
    const data = {
      preferences,
      exportedAt: new Date().toISOString(),
      version: '1.0',
    }
    return JSON.stringify(data, null, 2)
  }, [preferences])

  return { preferences, getStatus, approve, decline, unrate, getStats, exportData }
}
