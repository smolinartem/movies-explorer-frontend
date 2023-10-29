import { Link } from 'react-router-dom'
import './Logo.css'
import logo from '../../images/logo.svg'

function Logo() {
  return (
    <Link to='/' className='logo'>
      <img className='logo__img' src={logo} alt='Website logo' />
    </Link>
  )
}

export default Logo
