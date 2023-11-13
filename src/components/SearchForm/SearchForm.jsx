import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import Button from '../Button/Button'
import { useState } from 'react'

function SearchForm() {
  const [isValid, setIsValid] = useState(true)
  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target
    setIsValid(form.checkValidity())
  }
  return (
    <form className='search' onSubmit={handleSubmit} noValidate>
      <fieldset className='search__info'>
        <input
          className={`search__input ${isValid ? '' : 'search__input_invalid'}`}
          name='search-film'
          placeholder='Фильм'
          type='search'
          autoComplete='off'
          required
        />
        <Button className='search__submit' type='submit' />
      </fieldset>

      <FilterCheckbox />
    </form>
  )
}

export default SearchForm
