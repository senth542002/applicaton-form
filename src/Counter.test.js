import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'
import renderer from 'react-test-renderer'

describe('Counter Component', () => {
  it('Starts with a count of 0', () => {
    const wrapper = shallow(<Counter />)
    const text = wrapper.find('p').text()
    expect(text).toEqual('Count: 0')
  })

  it('increments count by 1 when the increment button is clicked', () => {
    const wrapper = shallow(<Counter />)
    const incrementButton = wrapper.find('button.increment')
    incrementButton.simulate('click')
    const text = wrapper.find('p').text()
    expect(text).toEqual('Count: 1')
  })

  it('decrements count by 1 when the decrement button is clicked', () => {
    const wrapper = shallow(<Counter />)
    const decrementButton = wrapper.find('button.decrement')
    decrementButton.simulate('click')
    const text = wrapper.find('p').text()
    expect(text).toEqual('Count: -1')
  })

  it('matches the snapshot', () => {
    const tree = renderer.create(<Counter />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
