import '../styles/SectionTitle.css'

function SectionTitle({ children, subtitle, className = '' }) {
  return (
    <div className="section-header">
      <h2 className={`section-title ${className}`.trim()}>
        {children}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
