import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import Button from '../Button/Button'

function SearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <form className='search' onSubmit={handleSubmit}>
      <fieldset className='search__info'>
        <input
          className='search__input'
          name='search-film'
          placeholder='Фильм'
          type='search'
          autoComplete='off'
        />
        <Button className='search__submit' type='submit' />
      </fieldset>

      <FilterCheckbox />
    </form>
  )
}

export default SearchForm
