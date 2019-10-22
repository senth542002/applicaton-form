const Validator = student => {
  console.log('inside handle Validation')

  let errors = {}
  let formIsValid = true

  console.log('Student: ' + student)

  if (!student['name']) {
    formIsValid = false
    errors['name'] = 'cannot be empty'
  }

  if (typeof student['name'] != 'undefined') {
    if (!student['name'].match(/^[a-zA-Z ]+$/)) {
      formIsValid = false
      errors['name'] = 'only letters'
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
      errors['fatherName'] = 'only letters'
    }
  }

  if (!student['motherName']) {
    formIsValid = false
    errors['motherName'] = 'cannot be empty'
  }

  if (typeof student['motherName'] != 'undefined') {
    if (!student['motherName'].match(/^[a-zA-Z ]+$/)) {
      formIsValid = false
      errors['motherName'] = 'only letters'
    }
  }

  if (!student['email']) {
    formIsValid = false
    errors['email'] = 'cannot be empty'
  }

  if (typeof student['email'] != 'undefined') {
    if (!student['email'].match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/)) {
      formIsValid = false
      errors['email'] = 'email is not valid'
    }
  }

  if (!student['mobileNumber']) {
    formIsValid = false
    errors['mobileNumber'] = 'cannot be empty'
  }

  if (typeof student['mobileNumber'] != 'undefined') {
    if (!student['mobileNumber'].match(/^[0]?[789]\d{9}$/)) {
      formIsValid = false
      errors['mobileNumber'] = 'mobile number is not valid'
    }
  }

  if (!student['dateOfBirth']) {
    formIsValid = false
    errors['dateOfBirth'] = 'cannot be empty'
  }
  const validationResult = { errors: errors, formIsValid: formIsValid }

  return validationResult
}

export default Validator
