import { Outlet } from 'react-router-dom'
import './App.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function App() {
  return (
    <main className='main'>
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
