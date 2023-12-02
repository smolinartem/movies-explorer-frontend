import { lazy, Suspense, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Register from '../../pages/Register/Register'
import NotFound from '../../pages/NotFound/NotFound'
import MoviesProvider from '../../hoc/MoviesProvider'
import ProtectedRoute from '../../hoc/ProtectedRoute'

import { getUser } from '../../utils/MainApi'
import { useAuth } from '../../hooks/useAuth'

const Main = lazy(() => import('../../pages/Main/Main'))
const Movies = lazy(() => import('../../pages/Movies/Movies'))
const SavedMovies = lazy(() => import('../../pages/SavedMovies/SavedMovies'))
const Profile = lazy(() => import('../../pages/Profile/Profile'))
const Login = lazy(() => import('../../pages/Login/Login'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/movies',
    element: (
      <ProtectedRoute>
        <MoviesProvider>
          <Movies />
        </MoviesProvider>
      </ProtectedRoute>
    ),
  },
  {
    path: '/saved-movies',
    element: (
      <ProtectedRoute>
        <MoviesProvider>
          <SavedMovies />
        </MoviesProvider>
      </ProtectedRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: '/signup',
    element: <Register />,
  },
  {
    path: '/signin',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

function App() {
  const { setIsLoggedIn, setCurrentUser } = useAuth()

  useEffect(() => {
    const logged = window.localStorage.getItem('logged') // logged=true если в куках есть токен
    if (!logged) return

    getUser()
      .then((data) => {
        setIsLoggedIn(true)
        setCurrentUser({ name: data.user.name, email: data.user.email })
      })
      .catch(() => console.error())
  }, [setIsLoggedIn, setCurrentUser])

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App
