import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class ApplicationForm extends Component {
  constructor () {
    super()
    this.state = {
      student: {
        studentName: '',
        fatherName: '',
        motherName: '',
        email: '',
        mobileNumber: '',
        dateOfBirth: ''
      },
      successScreen: false,
      applicationNumber: '',
      isFormValid: false,
      errors: {}
    }

    this.submitFormHandler.bind(this)
    this.handleChange.bind(this)
  }

  handleValidation () {
    let student = this.state.student
    let errors = {}
    let formIsValid = true

    if (!student['studentName']) {
      formIsValid = false
      errors['studentName'] = 'Cannot be empty'
    }

    if (typeof student['studentName'] != 'undefined') {
      if (!student['studentName'].match(/^[a-zA-Z ]+$/)) {
        formIsValid = false
        errors['studentName'] = 'Only letters'
      }
    }

    if (!student['fatherName']) {
      formIsValid = false
      errors['fatherName'] = 'Cannot be empty'
    }

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
      formIsValid = true
      errors['dateOfBirth'] = 'Cannot be empty'
    }

    this.setState({ errors: errors })
    return formIsValid
  }

  submitFormHandler = event => {
    event.preventDefault()
    let isFormValid = this.handleValidation()
    if (isFormValid) {
      console.log('Validaton Success')
      this.setState({
        successScreen: true,
        applicationNumber: Math.floor(100000 + Math.random() * 900000),
        isFormValid: isFormValid
      })
    } else {
      console.log('Validaton Errors')
    }
  }

  back = event => {
    event.preventDefault()
    this.setState({ successScreen: false })
  }

  handleChange = value => event => {
    if (value === 'dateOfBirth') {
      console.log(value + ' ' + event)
      // this.setState({
      //   ...this.state,
      //   [value] : event
      // })
      let student = this.state.student
      student[value] = event
      this.setState({ student })
    } else {
      console.log(value + ' ' + event.target.value)
      let student = this.state.student
      student[value] = event.target.value
      this.setState({ student })
    }
  }

  render () {
    return (
      <form className='demoForm'>
        <table className='responsive-table' hidden={this.state.successScreen}
        style={{ width: '500px'}}>
        <tbody>
            <tr
              className='form-group'
            >
              <td>
                <label className='studentName'>Student Name: </label>
              </td>
              <td>
                <input
                  type='text'
                  name='studentName'
                  value={this.state.student.studentName}
                  onChange={this.handleChange('studentName')}
                />
              </td>
              <td>
                <span style={{ color: 'red' }}>
                  {this.state.errors['studentName']}
                </span>
              </td>
            </tr>
            <tr
              className='form-group'
            >
              <td>
                <label className='fatherName'>Father Name: </label>
              </td>
              <td>
                <input
                  type='text'
                  name='fatherName'
                  value={this.state.student.fatherName}
                  onChange={this.handleChange('fatherName')}
                />
              </td>
              <td>
                <span style={{ color: 'red' }}>
                  {this.state.errors['fatherName']}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <label className='motherName'>Mother Name: </label>
              </td>
              <td>
                <input
                  type='text'
                  name='motherName'
                  value={this.state.student.motherName}
                  onChange={this.handleChange('motherName')}
                />
              </td>
              <td>
                <span style={{ color: 'red' }}>
                  {this.state.errors['motherName']}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <label className='email'>Email: </label>
              </td>
              <td>
                <input
                  type='email'
                  name='email'
                  value={this.state.student.email}
                  onChange={this.handleChange('email')}
                />
              </td>
              <td>
                <span style={{ color: 'red' }}>
                  {this.state.errors['email']}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <label className='mobileNumber'>Mobile Number: </label>
              </td>
              <td>
                <input
                  type='text'
                  name='mobileNumber'
                  value={this.state.student.mobileNumber}
                  onChange={this.handleChange('mobileNumber')}
                />
              </td>
              <td>
                <span style={{ color: 'red' }}>
                  {this.state.errors['mobileNumber']}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <label className='dateOfBirth'>Date of Birth: </label>
              </td>
              <td>
                <DatePicker
                  className='dateOfBirth'
                  name='dateOfBirth'
                  selected={this.state.student.dateOfBirth}
                  onChange={this.handleChange('dateOfBirth')}
                  dateFormat='MMMM d, yyyy'
                  timeCaption='time'
                />
              </td>
              <td>
                <span style={{ color: 'red' }}>
                  {this.state.errors['dateOfBirth']}
                </span>
              </td>
            </tr>
            </tbody>
            </table>

            <table className='responsive-table' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            hidden={this.state.successScreen}>
            <tbody>
            <tr>
              <td>
                <button
                  className='submit'
                  type='Submit'
                  onClick={this.submitFormHandler}
                >
                  Submit
                </button>
              </td>
            </tr>
            </tbody>
        </table>
        <table hidden={!this.state.successScreen}>
          <tbody>
            <tr style={{ border: '3px solid grey', borderRightColor: 'grey' }}>
              <td>
                <label className='applicationNumber'>
                  Your application applicaton Number is :{' '}
                  {this.state.applicationNumber}
                </label>
              </td>
            </tr>
            <tr style={{ border: '3px solid grey', borderRightColor: 'grey' }}>
              <td>
                <label className='descripton'>
                  Application receipt will is sent to your email{' '}
                  {this.state.student.email}
                </label>
              </td>
            </tr>
            <tr
              style={{
                border: '3px solid grey',
                borderRightColor: 'grey',
                alignItems: 'center'
              }}
            >
              <td>
                <button className='back' type='Submit' onClick={this.back}>
                  Back
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    )
  }
}
