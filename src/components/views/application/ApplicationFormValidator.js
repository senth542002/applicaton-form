const Validator = student => {
  console.log('inside handle Validation')

  let errors = {}
  let formIsValid = true

  console.log('Student: ' + student)

  if (!student['name']) {
    formIsValid = false
    errors['name'] = 'Cannot be empty'
  }

  if (typeof student['name'] != 'undefined') {
    if (!student['name'].match(/^[a-zA-Z ]+$/)) {
      formIsValid = false
      errors['name'] = 'Only letters'
    }
  }

  if (!student['fatherName']) {
    formIsValid = false
    errors['fatherName'] = 'Cannot be empty'
  }

  console.log('FatherName Validation:' + formIsValid)

  if (typeof student['fatherName'] != 'undefined') {
    if (!student['fatherName'].match(/^[a-zA-Z ]+$/)) {
      formIsValid = false
      errors['fatherName'] = 'Only letters'
    }
  }

  if (!student['motherName']) {
    formIsValid = false
    errors['motherName'] = 'Cannot be empty'
  }

  if (typeof student['motherName'] != 'undefined') {
    if (!student['motherName'].match(/^[a-zA-Z ]+$/)) {
      formIsValid = false
      errors['motherName'] = 'Only letters'
    }
  }

  if (!student['email']) {
    formIsValid = false
    errors['email'] = 'Cannot be empty'
  }

  if (typeof student['email'] != 'undefined') {
    if (!student['email'].match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/)) {
      formIsValid = false
      errors['email'] = 'Email is not valid'
    }
  }

  if (!student['mobileNumber']) {
    formIsValid = false
    errors['mobileNumber'] = 'Cannot be empty'
  }

  if (typeof student['mobileNumber'] != 'undefined') {
    if (!student['mobileNumber'].match(/^[0]?[789]\d{9}$/)) {
      formIsValid = false
      errors['mobileNumber'] = 'Mobile is not valid'
    }
  }

  if (!student['dateOfBirth']) {
    formIsValid = false
    errors['dateOfBirth'] = 'Cannot be empty'
  }

  const validationResult = { errors: errors, formIsValid: formIsValid }

  return validationResult
}

export default Validator
