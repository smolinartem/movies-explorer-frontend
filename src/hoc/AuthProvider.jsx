import { createContext, useState } from 'react'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const login = () => {
    setIsLoggedIn(true)
  }
  const logout = () => {
    setIsLoggedIn(false)
  }

  const value = { isLoggedIn, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
