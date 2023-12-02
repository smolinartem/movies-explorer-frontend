import './ErrorMessage.css'

function ErrorMessage({ message }) {
  return <span className='error-msg'>{message ? message : ''}</span>
}

export default ErrorMessage
