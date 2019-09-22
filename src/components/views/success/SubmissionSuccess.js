import React, { Component } from 'react';
import pdfGeneratorAPI from '../../api/PdfGeneratorApi';
import FileDownload from 'js-file-download';
import { browserHistory } from 'react-router';

class SubmissionSuccess extends Component {

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

    }

 componentDidMount(prevProps) {
    console.log('Location1: '+ JSON.stringify(this.props.location))
    this.setState({
        student: this.props.location.state.student,
        applicationNumber: this.props.location.state.applicationNumber
    });
  }

  back = event => {
    event.preventDefault()
    browserHistory.push('/');
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

    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                         <h2>Student Application Form</h2>
                </header>
                <div className='Application-header'>
                    <form className='demoForm'>
                        <table>
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
            </div>

        );
    }

}

export default SubmissionSuccess;