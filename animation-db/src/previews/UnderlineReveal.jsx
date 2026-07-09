export default function UnderlineReveal() {
  const links = ['Features', 'Pricing', 'Documentation', 'Changelog']

  return (
    <div className="pv-container pv-dark pv-center">
      <nav className="ul-nav">
        {links.map((l) => (
          <span key={l} className="ul-link">{l}</span>
        ))}
      </nav>
      <p className="pv-hint">Hover over links</p>
    </div>
  )
}
