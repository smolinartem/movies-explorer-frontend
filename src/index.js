import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './pages/App/App'
import Main from './pages/Main/Main'
import Movies from './pages/Movies/Movies'
import SavedMovies from './pages/SavedMovies/SavedMovies'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'movies',
        element: <Movies />,
      },
      {
        path: 'saved-movies',
        element: <SavedMovies />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
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

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
