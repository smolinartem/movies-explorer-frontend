import './FilterCheckbox.css'
import { useMMovies } from '../../hooks/useMMovies'
import { useEffect, useState } from 'react'

function FilterCheckbox({ shortsChecked }) {
  const { allMovies, setShownMovies, initialAmount, shorts, setShorts } = useMMovies()

  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(shortsChecked)
  }, [shortsChecked])

  const handleCheck = (event) => {
    setChecked(!checked)
    const shortMovies = allMovies.filter((m) => {
      return m.duration < 40
    })
    setShorts(shortMovies)
    if (event.target.checked) {
      setShownMovies(shorts.slice(0, initialAmount))
    } else {
      setShownMovies(allMovies.slice(0, initialAmount))
    }
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
