import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AuthProvider from '../../hoc/AuthProvider'
import ProtectedRoute from '../../hoc/ProtectedRoute'

import Main from '../../pages/Main/Main'
import Movies, { moviesLoader } from '../../pages/Movies/Movies'
import SavedMovies from '../../pages/SavedMovies/SavedMovies'
import Profile from '../../pages/Profile/Profile'
import Register from '../../pages/Register/Register'
import Login from '../../pages/Login/Login'
import NotFound from '../../pages/NotFound/NotFound'

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
        <Movies />
      </ProtectedRoute>
    ),
    loader: moviesLoader,
  },
  {
    path: '/saved-movies',
    element: (
      <ProtectedRoute>
        <SavedMovies />
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
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
