export default function StatsBar({ stats }) {
  if (stats.total === 0) return null

  return (
    <div className="stats-bar">
      <div className="stat">
        <span className="stat-value">{stats.total}</span>
        <span className="stat-label">rated</span>
      </div>
      <div className="stat stat-approved">
        <span className="stat-value">{stats.approved}</span>
        <span className="stat-label">approved</span>
      </div>
      <div className="stat stat-declined">
        <span className="stat-value">{stats.declined}</span>
        <span className="stat-label">declined</span>
      </div>
    </div>
  )
}
