import { Link } from 'react-router-dom'
import './Logo.css'
import logo from '../../images/logo.svg'

function Logo({ className }) {
  return (
    <Link to='/' className={`logo ${className || ''}`}>
      <img className='logo__img' src={logo} alt='Website logo' />
    </Link>
  )
}

export default Logo
