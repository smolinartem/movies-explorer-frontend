import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function App() {
  const location = useLocation()

  return (
    <main className='main'>
      <Header />
      <Outlet />
      {location.pathname === '/profile' ? null : <Footer />}
    </main>
  )
}

export default App
