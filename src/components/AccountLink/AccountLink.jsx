import { Link } from 'react-router-dom'
import './AccountLink.css'

function AccountLink({ className, handleBurger }) {
  return (
    <Link className={`account-link hover ${className || ''}`} to='/profile' onClick={handleBurger}>
      Аккаунт
    </Link>
  )
}

export default AccountLink
