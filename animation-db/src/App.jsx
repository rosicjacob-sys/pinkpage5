import { useState, useMemo } from 'react'
import { ANIMATIONS, NICHES, STATUS_OPTIONS } from './data/animations'
import { usePreferences } from './hooks/usePreferences'
import Sidebar from './components/Sidebar'
import FilterBar from './components/FilterBar'
import StatsBar from './components/StatsBar'
import AnimationGrid from './components/AnimationGrid'

export default function App() {
  const { getStatus, approve, decline, unrate, getStats, exportData } = usePreferences()
  const [activeNiche, setActiveNiche] = useState('all')
  const [activeStatus, setActiveStatus] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showExport, setShowExport] = useState(false)

  const filtered = useMemo(() => {
    let result = ANIMATIONS

    if (activeNiche !== 'all') {
      result = result.filter((a) => a.niche === activeNiche)
    }

    if (activeStatus !== 'all') {
      result = result.filter((a) => {
        const status = getStatus(a.id)
        if (activeStatus === 'unrated') return status === null
        return status === activeStatus
      })
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.code.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q)) ||
          a.niche.toLowerCase().includes(q)
      )
    }

    return result
  }, [activeNiche, activeStatus, searchQuery, getStatus])

  const stats = useMemo(() => getStats(), [getStats, activeNiche, activeStatus])

  const handleExport = () => {
    const data = exportData()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `animation-preferences-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    setShowExport(false)
  }

  return (
    <div className="app">
      <Sidebar
        niches={NICHES}
        activeNiche={activeNiche}
        onSelectNiche={setActiveNiche}
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onExport={() => setShowExport(true)}
      />
      <main className="main">
        <header className="main-header">
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
          <h1 className="page-title">Motion Database</h1>
          <span className="page-count">{ANIMATIONS.length} patterns</span>
        </header>
        <StatsBar stats={stats} />
        <FilterBar
          statusOptions={STATUS_OPTIONS}
          activeStatus={activeStatus}
          onSelectStatus={setActiveStatus}
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
        />
        <AnimationGrid
          animations={filtered}
          getStatus={getStatus}
          onApprove={approve}
          onDecline={decline}
          onUnrate={unrate}
        />
        {filtered.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon">∅</span>
            <p>No patterns match the current filters.</p>
            <button
              className="empty-reset"
              onClick={() => {
                setActiveNiche('all')
                setActiveStatus('all')
                setSearchQuery('')
              }}
            >
              Reset all filters
            </button>
          </div>
        )}
      </main>

      {showExport && (
        <div className="modal-overlay" onClick={() => setShowExport(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Export Training Data</h2>
            <p>
              Your approve/decline preferences will be saved as a JSON file. Use this to train an
              AI model on your animation taste.
            </p>
            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={() => setShowExport(false)}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleExport}>
                Download JSON
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
