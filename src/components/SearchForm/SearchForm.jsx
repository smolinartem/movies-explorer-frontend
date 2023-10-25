import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm() {
  return (
    <form className='search'>
      <fieldset className='search__info'>
        <input className='search__input' placeholder='Фильмы' />
        <button className='search__submit' type='submit' />
      </fieldset>

      <FilterCheckbox />
    </form>
  )
}

export default SearchForm
