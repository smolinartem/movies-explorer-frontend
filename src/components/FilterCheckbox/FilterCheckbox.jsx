import './FilterCheckbox.css'

function FilterCheckbox() {
  const handleChange = () => {}
  return (
    <fieldset className='checkbox'>
      <div className='checkbox__toggle'>
        <input
          className='checkbox__input'
          name='checkbox-film'
          type='checkbox'
          checked
          onChange={handleChange}
        />
        <label className='checkbox__lable' />
      </div>
      <span className='checkbox__title'>Короткометражки</span>
    </fieldset>
  )
}

export default FilterCheckbox
