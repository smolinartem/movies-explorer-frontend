import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Register from '../../pages/Register/Register'
import AuthProvider from '../../hoc/AuthProvider'
import MoviesProvider from '../../hoc/MoviesProvider'
import ProtectedRoute from '../../hoc/ProtectedRoute'

const Main = lazy(() => import('../../pages/Main/Main'))
const Movies = lazy(() => import('../../pages/Movies/Movies'))
const SavedMovies = lazy(() => import('../../pages/SavedMovies/SavedMovies'))
const Profile = lazy(() => import('../../pages/Profile/Profile'))
const Login = lazy(() => import('../../pages/Login/Login'))
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
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
])

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  )
}

export default App
