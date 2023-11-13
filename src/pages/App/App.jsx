import { Outlet } from 'react-router-dom'
import './App.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import AuthProvider from '../../hoc/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AuthProvider>
  )
}

export default App
