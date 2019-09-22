import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import applicationFormAPI from '../../api/ApplicationFormApi';
import pdfGeneratorAPI from '../../api/PdfGeneratorApi';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';
import FileDownload from 'js-file-download';
import { hashHistory, browserHistory, Link, withRouter  } from 'react-router';

export default class ApplicationForm extends Component {
  constructor () {
    super()
    this.state = {
      student: {
        name: '',
        fatherName: '',
        motherName: '',
        email: '',
        mobileNumber: '',
        dateOfBirth: ''
      },
      successScreen: false,
      applicationNumber: '',
      isFormValid: false,
      errors: {},
      active: false
    }

    this.submitFormHandler.bind(this)
    this.handleChange.bind(this)
  }

  componentDidMount() {
    browserHistory.push('/');
  }

  handleValidation () {
    console.log('inside handle Validation');
    let student = this.state.student
    let errors = {}
    let formIsValid = true

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

    console.log("FatherName Validation:"+formIsValid);

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

    this.setState({ errors: errors })
    return formIsValid
  }

  submitFormHandler = event => {
    event.preventDefault();
    let isFormValid = this.handleValidation();
    if (isFormValid) {
      console.log('Validaton Success')
      this.setState({
        active: true
      })
      //applicationNumber: Math.floor(100000 + Math.random() * 900000),
      applicationFormAPI.post('/api/applications', this.state.student)
        .then(res => {
          console.log("Response:"+res)
          console.log("Id:"+res.data.id)

          //browserHistory.push('/success', {'applicationNumber': res.data.id});
          //  browserHistory.push({pathname: '/success', state: {applicationNumber: res.data.id}})
          this.setState({
            successScreen: false,
            applicationNumber: res.data.id,
            isFormValid: isFormValid,
            active: false
          })
          browserHistory.push({pathname: '/success', state: {applicationNumber: res.data.id, student: this.state.student }})
        })
        .catch(error => {
          console.log("Error:"+error)
          this.setState({
            active: false
          })
        })
    } else {
      console.log('Validaton Errors:')
    }
  }

  back = event => {
    event.preventDefault()
    this.setState({ successScreen: false })
  }

  handleChange = value => event => {
    if (value === 'dateOfBirth') {
      console.log(value + ' ' + event)
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

  viewFormHandler = event => {

    event.preventDefault();

      this.setState({
        active: true
      })
      console.log("before Call Pdf:"+this.state.student.name);

      pdfGeneratorAPI.post('/api/generate',this.state.student, { responseType: 'blob'})
        .then(res => {
           console.log("Response:" + res.data);
              this.setState({
                active: false
              })
            FileDownload(res.data, 'ApplicationForm.pdf');
        })
        .catch(error => {
          console.log("Error:"+error)
          this.setState({
            active: false
          })
        });
  }

  render () {
    return (

     <div className='App'>
           <header className='App-header'>
             <h2>Student Application Form</h2>
           </header>
           <div className='Application-header'>

           <form className='demoForm'>
                   <table className='responsive-table' hidden={this.state.successScreen}
                   style={{width: "110%"}}>
                   <tbody>
                       <tr
                         className='form-group'>
                         <td>
                           <label className='name'>Student Name: </label>
                         </td>
                         <td>
                           <input
                             type='text'
                             name='name'
                             value={this.state.student.name}
                             onChange={this.handleChange('name')}
                             style={{width: 300}}
                           />
                         </td>
                         <td>
                           <span style={{ color: 'red' }}>
                             {this.state.errors['name']}
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
                             style={{width: 300}}
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
                             style={{width: 300}}
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
                             style={{width: 300}}
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
                             style={{width: 300}}
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
                       <div>
                         <LoadingOverlay active={this.state.active} spinner={<BounceLoader />} />
                       </div>
                       <table className='responsive-table' hidden={this.state.successScreen}
                       style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                       >
                       <tbody hidden={this.state.successScreen}>
                       <tr>
                         <td>
                           <button
                             className='submit'
                             type='Submit'
                             onClick={this.submitFormHandler}
                           >
                             Submit{this.state.successScreen}
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
                             <a href= "#link" onClick={this.viewFormHandler} target="_blank">{this.state.applicationNumber}</a>
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
           </div>
           <div className='rows' script='display:inline;' />
      </div>
    )
  }
}
