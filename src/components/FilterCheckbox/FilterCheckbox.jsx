import { useEffect } from 'react'
import { useMovies } from '../../hooks/useMovies'
import { useLocation } from 'react-router-dom'

import './FilterCheckbox.css'

function FilterCheckbox() {
  const { pathname } = useLocation()
  const {
    checked,
    setChecked,
    shortMovies,
    searchMovies,
    setRenderMovies,
    shortSavedMovies,

    searchSavedMovies,
    setRenderSavedMovies,
  } = useMovies()
  useEffect(() => {
    if (pathname === '/movies') {
      const checked = JSON.parse(localStorage.getItem('checked'))
      setChecked(checked || false)
    } else {
      setChecked(false)
    }
  }, [setChecked, pathname])

  const handleCheck = (event) => {
    if (pathname === '/movies') {
      if (event.target.checked) {
        setRenderMovies(shortMovies)
        localStorage.setItem('checked', true)
      } else {
        setRenderMovies(searchMovies)
        localStorage.setItem('checked', false)
      }
    } else {
      if (event.target.checked) {
        setRenderSavedMovies(shortSavedMovies)
      } else {
        setRenderSavedMovies(searchSavedMovies)
      }
    }
    setChecked(!checked)
  }

  return (
    <fieldset className='checkbox'>
      <div className='checkbox__toggle'>
        <input
          className='checkbox__input'
          name='checkbox'
          type='checkbox'
          onChange={handleCheck}
          checked={checked}
        />
        <label className='checkbox__lable' />
      </div>
      <span className='checkbox__title'>Короткометражки</span>
    </fieldset>
  )
}

export default FilterCheckbox
