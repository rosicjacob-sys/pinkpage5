export default function FilterBar({ statusOptions, activeStatus, onSelectStatus, searchQuery, onSearch }) {
  return (
    <div className="filter-bar">
      <div className="filter-chips">
        {statusOptions.map((opt) => (
          <button
            key={opt.id}
            className={`filter-chip ${activeStatus === opt.id ? 'is-active' : ''}`}
            onClick={() => onSelectStatus(opt.id)}
          >
            <span className="filter-chip-icon">{opt.icon}</span>
            {opt.label}
          </button>
        ))}
      </div>
      <div className="search-wrap">
        <span className="search-icon">⌕</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search patterns..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
        />
        {searchQuery && (
          <button className="search-clear" onClick={() => onSearch('')} aria-label="Clear search">
            ×
          </button>
        )}
      </div>
    </div>
  )
}
