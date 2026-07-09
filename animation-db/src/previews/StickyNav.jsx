export default function StickyNav() {
  return (
    <div className="pv-container pv-nav-wrap">
      <div className="pv-sticky-nav">
        <span className="nav-logo">◈</span>
        <span className="nav-links">
          <span className="nav-link">Work</span>
          <span className="nav-link is-active">About</span>
          <span className="nav-link">Contact</span>
        </span>
      </div>
      <div className="pv-nav-content">
        <p>Scroll within this card to see the nav stick.</p>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="pv-nav-line" />
        ))}
      </div>
    </div>
  )
}
