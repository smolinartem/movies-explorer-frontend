import { createBrowserRouter } from 'react-router-dom'

import App from '../components/App/App'
import Main from '../pages/Main/Main'
import Movies from '../pages/Movies/Movies'
import SavedMovies from '../pages/SavedMovies/SavedMovies'
import Profile from '../pages/Profile/Profile'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'

export const router = createBrowserRouter([
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
      {
        path: 'signup',
        element: <Register />,
      },
      {
        path: 'signin',
        element: <Login />,
      },
    ],
  },
])
