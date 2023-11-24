export const getAllMovies = async () => {
  const res = await fetch('https://api.nomoreparties.co/beatfilm-movies')
  if (!res.ok)
    throw new Error(
      'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
    )
  return res.json()
}
