import React from 'react'
import { mount } from 'enzyme'
import SubmissionSuccess from './SubmissionSuccess'
//import renderer from 'react-test-renderer'
//import mockAxios from 'jest-mock-axios'

describe('Submission Success Component', () => {
  var props = {
    location: {
      pathname: '/success',
      state: {
        student: {
          name: 'Varun',
          fatherName: 'Senthil Kumar',
          motherName: 'Priya',
          email: 'senth542002@gmail.com',
          mobileNumber: '9940206385',
          dateOfBirth: '2019-07-08',
          applicationNumber: 114
        },
        successScreen: false,
        applicationNumber: 114
      }
    }
  }

  it('Verify Application Number', () => {
    const wrapper = mount(<SubmissionSuccess {...props} />)
    console.log(
      'anchor value: ' +
        wrapper
          .find('a')
          .at(0)
          .props().href
    )
    console.log(
      //'Application Number: ' + wrapper.instance().state.applicationNumber
    )
   // expect(wrapper.exists('.applicationNumber')).toEqual(true)
   // expect(wrapper.instance().state.applicationNumber).toEqual(114)

    //expect(text).toEqual('Student Name: ');
  })

  it('Verify PDF Generation', () => {
    const wrapper = mount(<SubmissionSuccess {...props} />)
    console.log(
      'anchor value: ' +
        wrapper
          .find('a')
          .at(0)
          .props().href
    )
    const applicationLink = wrapper.find('a').simulate('click')

    setTimeout(
      function () {
       // expect(wrapper.instance().state.active).toEqual(false)
      }.bind(this),
      20000
    )

    //expect(text).toEqual('Student Name: ');
  })
})
