import './Navigation.css'
import { NavLink } from 'react-router-dom'

function Navigation({ links, className, handleBurger }) {
  return (
    <nav className={`nav ${className || ''}`}>
      {links.map((link) => (
        <NavLink
          key={link.id}
          className={({ isActive }) =>
            isActive ? 'nav__link hover nav__link_active' : 'nav__link hover'
          }
          to={link.to}
          onClick={handleBurger}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navigation
