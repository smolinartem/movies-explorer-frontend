import './SideBar.css'
import Navigation from '../Navigation/Navigation'
import AccountLink from '../AccountLink/AccountLink'
import { BURGER_NAV_CONFIG } from '../../utils/config'

function BurgerMenu({ className, isOpen, handleBurger }) {
  return (
    <section
      className={`sidebar ${className || ''} ${isOpen ? 'sidebar_opened' : 'sidebar_closed'}`}
      aria-label='Sidebar menu'
    >
      <div className='sidebar__content'>
        <Navigation
          className='sidebar__nav'
          links={BURGER_NAV_CONFIG}
          handleBurger={handleBurger}
        />
        <AccountLink className='sidebar__account' handleBurger={handleBurger} />
      </div>
    </section>
  )
}

export default BurgerMenu
