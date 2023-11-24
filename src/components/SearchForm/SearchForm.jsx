import { useState } from 'react'

import './SearchForm.css'

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import Button from '../Button/Button'

function SearchForm({ pastSearch, handleSubmit, isValid }) {
  const [inputValue, setInputValue] = useState(pastSearch)

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
