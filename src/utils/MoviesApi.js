const BASE_URL = 'https://api.movies.krutopognali.nomoredomainsrocks.ru'
const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies'

const handleResponse = (res) => {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject(res.status)
  }
}

const getAllMovies = () => {
  return fetch(MOVIES_URL).then(handleResponse)
}

const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
  }).then(handleResponse)
}

const createMovie = (savedMovie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(savedMovie),
  }).then(handleResponse)
}

const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  }).then(handleResponse)
}

export { getAllMovies, getSavedMovies, createMovie, deleteMovie }
