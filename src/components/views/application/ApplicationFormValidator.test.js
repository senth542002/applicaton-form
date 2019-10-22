import ApplicationFormValidator from './ApplicationFormValidator.js'

describe('ApplicationFormValidator Component', () => {
  it('Captures validation error for empty Name', () => {
    var student = {
      name: '',
      fatherName: 'Senthil Kumar',
      motherName: 'Priya',
      email: 'senth542002@gmail.com',
      mobileNumber: '9940206385',
      dateOfBirth: '2019-07-08',
      applicationNumber: 114
    }
    const validationResult = ApplicationFormValidator(student)
    expect(validationResult.errors['name']).toEqual('only letters')
    expect(validationResult.formIsValid).toEqual(false)
  })

  it('Captures validation error for undefined Name', () => {
    var student = {
      fatherName: 'Senthil Kumar',
      motherName: 'Priya',
      email: 'senth542002@gmail.com',
      mobileNumber: '9940206385',
      dateOfBirth: '2019-07-08',
      applicationNumber: 114
    }
    const validationResult = ApplicationFormValidator(student)
    expect(validationResult.errors['name']).toEqual('cannot be empty')
    expect(validationResult.formIsValid).toEqual(false)
  })
})
