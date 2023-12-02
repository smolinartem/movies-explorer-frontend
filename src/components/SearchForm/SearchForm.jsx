import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import './SearchForm.css'

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import Button from '../Button/Button'

function SearchForm({ handleSubmit = () => {}, isValid = true }) {
  const { pathname } = useLocation()
  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    if (pathname === '/movies') {
      const input = JSON.parse(localStorage.getItem('input'))
      setInputValue(input || '')
    } else {
      setInputValue('')
    }
  }, [pathname])

  return (
    <form className='search' onSubmit={handleSubmit} noValidate>
      <fieldset className='search__info'>
        <input
          className={`search__input ${isValid ? '' : 'search__input_invalid'}`}
          name='search'
          placeholder='Фильм'
          type='search'
          autoComplete='off'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          required
        />
        <Button className='search__submit' type='submit' />
      </fieldset>

      <FilterCheckbox />
    </form>
  )
}

export default SearchForm
