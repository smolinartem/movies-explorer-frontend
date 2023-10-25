import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <fieldset className='checkbox'>
      <div className='checkbox__toggle'>
        <input className='checkbox__input' type='checkbox' />
        <label className='checkbox__lable' />
      </div>
      <span className='checkbox__title'>Короткометражки</span>
    </fieldset>
  )
}

export default FilterCheckbox
