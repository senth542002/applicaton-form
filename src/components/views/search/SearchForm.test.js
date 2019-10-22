import React from 'react'
import { mount } from 'enzyme'
import SearchForm from './SearchForm.js'
import SearchResults from './SearchResults.js'

describe('Search Form Component', () => {
  it('Loads Search Form Component', () => {
    const searchComponent = mount(<SearchForm />)
    const applicationNumberLabel = searchComponent
      .find('#applicationNumber')
      .at(0)
//    console.log('ApplicationNumber:' + applicationNumberLabel.instance().id)
//    expect(applicationNumberLabel.instance().id).toEqual('applicationNumber')
    const searchButton = searchComponent.find('button').at(0)
  //  expect(searchButton.instance().name).toEqual('search')
  //  expect(searchComponent.find(SearchResults).length).toEqual(1)
  })

  it('Searches Based on Application Number', () => {
    const searchComponent = mount(<SearchForm />)
    const input = searchComponent.find('input').at(0)
    input.instance().value = '168'
    input.simulate('change')
  //  expect(searchComponent.state().applicationNumber).toEqual('168')
    const student = [
      {
        id: '168',
        name: 'Varun Karthik',
        fatherName: 'Senthilkumarr',
        motherName: 'Priya',
        email: 'senth542002@gmail.com',
        mobileNumber: '9940206385',
        dateOfBirth: '2019-07-14T08:04:00.000Z'
      }
    ]

    const searchButton = searchComponent.find('button').at(0)
    searchButton.simulate('click')

   // searchComponent.setState({ student: student })
//    console.log('student:' + searchComponent.state().student[0])
//    expect(searchComponent.state().student[0].id).toEqual('168')
//    expect(searchComponent.find(SearchResults).length).toEqual(1)
  })
})
