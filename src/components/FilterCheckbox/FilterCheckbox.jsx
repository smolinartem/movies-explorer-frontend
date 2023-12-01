import { useEffect } from 'react'
import { useMovies } from '../../hooks/useMovies'
import { useLocation } from 'react-router-dom'

import './FilterCheckbox.css'

function FilterCheckbox() {
  const { pathname } = useLocation()
  const { checked, setChecked, shortMovies, searchMovies, setRenderMovies } = useMovies()
  useEffect(() => {
    if (pathname === '/movies') {
      const data = JSON.parse(localStorage.getItem('data'))
      setChecked(data?.checked || false)
    } else {
      setChecked(false)
    }
  }, [setChecked, pathname])

  const handleCheck = (event) => {
    if (pathname === '/movies') {
      if (event.target.checked) {
        setRenderMovies(shortMovies)
      } else {
        setRenderMovies(searchMovies)
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
