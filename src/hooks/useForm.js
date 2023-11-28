import { useState, useCallback } from 'react'

export const useForm = () => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  const handleChange = (event) => {
    const input = event.target
    const validityState = input.validity
    const form = input.closest('form')

    if (validityState.tooShort) {
      input.setCustomValidity(`Текст должен быть не короче ${input.minLength} символов`)
    } else if (validityState.typeMismatch || validityState.patternMismatch) {
      input.setCustomValidity(`Неверно введённый ${input.name}`)
    } else if (validityState.valueMissing) {
      input.setCustomValidity(`Заполните поле ${input.name}`)
    } else {
      input.setCustomValidity('')
    }

    setValues({ ...values, [input.name]: input.value })
    setErrors({ ...errors, [input.name]: input.validationMessage })
    setIsValid(form.checkValidity())
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    },
    [setValues, setErrors, setIsValid]
  )

  return { values, errors, handleChange, isValid, resetForm, setIsValid }
}
