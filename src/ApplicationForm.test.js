import React from 'react'
import { shallow, mount } from 'enzyme'
import { renderer } from 'react-test-renderer'
import ApplicationForm from './ApplicationForm'

describe('ApplicationForm Component', () => {
  it('Verify Student Name', () => {
    const wrapper = shallow(<ApplicationForm />)
    expect(wrapper.exists('.studentName')).toEqual(true)
    //expect(text).toEqual('Student Name: ');
  })

  it('Captures studentname correctly on change', () => {
    const component = mount(<ApplicationForm />)
    const input = component.find('input').at(0)
    input.instance().value = 'Varun Karthik'
    input.simulate('change')
    expect(component.state().student.studentName).toEqual('Varun Karthik')
  })

  it('Navigates to success screen', () => {
    const component = mount(<ApplicationForm />)

    let input = component.find('input').at(0)
    input.instance().value = 'Varun Karthik'
    input.simulate('change')

    input = component.find('input').at(1)
    input.instance().value = 'Senthil Kumar'
    input.simulate('change')

    input = component.find('input').at(2)
    input.instance().value = 'Priya'
    input.simulate('change')

    input = component.find('input').at(3)
    input.instance().value = 'senth542002@gmail.com'
    input.simulate('change')

    input = component.find('input').at(4)
    input.instance().value = '9940206385'
    input.simulate('change')

    var student = component.state().student
    student['dateOfBirth'] = new Date('2019-07-08')
    component.setState({ student })
    const submitButton = component.find('button').at(0)
    submitButton.simulate('click')
    expect(component.state().successScreen).toEqual(true)
  })

  it('Validates form fields on Submit', () => {
    const component = mount(<ApplicationForm />)
    const submitButton = component.find('button').at(0)
    submitButton.simulate('click')

    const errors = {
      studentName: 'Only letters',
      fatherName: 'Only letters',
      motherName: 'Only letters',
      email: 'Email is not valid',
      mobileNumber: 'Mobile is not valid',
      dateOfBirth: 'Cannot be empty'
    }
    expect(component.state().errors).toEqual(errors)
  })
})
