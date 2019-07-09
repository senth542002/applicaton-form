import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

describe('AppTest', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />)

    expect(component).toMatchSnapshot()
  })
})

describe('Addition', () => {
  it('knows that 2 and 2  make 4', () => {
    expect(2 + 2).toBe(4)
  })
})
