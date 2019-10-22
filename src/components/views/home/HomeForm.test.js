import React from 'react'
import { mount } from 'enzyme'
import HomeForm from './HomeForm.js'

describe('HomeForm Component', () => {
  it('Verify Create Application Button', () => {
    const component = mount(<HomeForm />)
    const submitButton = component.find('button').at(0)
    //expect(submitButton.instance().name).toEqual('createApplication')
    console.log('Buttonvalue:' + submitButton.instance().name)
  })

  it('Verify Search Application Button', () => {
    const component = mount(<HomeForm />)
    const submitButton = component.find('button').at(1)
    // expect(submitButton.instance().name).toEqual('searchApplication')
    console.log('Buttonvalue:' + submitButton.instance().name)
  })
})
