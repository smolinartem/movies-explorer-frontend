import { useState } from 'react'

export const useForm = () => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  const handleChange = (event) => {
    const input = event.target
    const form = input.closest('form')

    setValues({ ...values, [input.name]: input.value })
    setErrors({ ...errors, [input.name]: input.validationMessage })
    setIsValid(form.checkValidity())
  }

  /*   const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    },
    [setValues, setErrors, setIsValid]
  ) */

  return { values, setValues, errors, setErrors, handleChange, isValid, setIsValid }
}
