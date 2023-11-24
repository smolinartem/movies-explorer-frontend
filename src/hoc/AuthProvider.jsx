import { createContext, useState } from 'react'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const value = { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
