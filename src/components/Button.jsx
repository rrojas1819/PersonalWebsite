import '../styles/Button.css'

function Button({ children, variant = 'primary', href, onClick, type = 'button', className = '' }) {
  const baseClass = 'btn'
  const variantClass = `btn-${variant}`
  const combinedClass = `${baseClass} ${variantClass} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
