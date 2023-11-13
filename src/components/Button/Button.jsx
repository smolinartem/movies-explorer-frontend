import './Button.css'

function Button({ className, title = '', type = 'button', onClick, disabled = false }) {
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}

export default Button
