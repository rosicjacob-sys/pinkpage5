export default function Sidebar({ niches, activeNiche, onSelectNiche, sidebarOpen, onClose, onExport }) {
  return (
    <>
      {sidebarOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${sidebarOpen ? 'is-open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-logo">✦</span>
          <span className="sidebar-brand">Motion DB</span>
        </div>
        <nav className="sidebar-nav">
          <span className="sidebar-label">Niches</span>
          {niches.map((niche) => (
            <button
              key={niche.id}
              className={`sidebar-item ${activeNiche === niche.id ? 'is-active' : ''}`}
              onClick={() => {
                onSelectNiche(niche.id)
                onClose()
              }}
            >
              <span className="sidebar-item-icon">{niche.icon}</span>
              <span className="sidebar-item-label">{niche.label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button className="sidebar-item export-btn" onClick={onExport}>
            <span className="sidebar-item-icon">↓</span>
            <span className="sidebar-item-label">Export Data</span>
          </button>
        </div>
      </aside>
    </>
  )
}
