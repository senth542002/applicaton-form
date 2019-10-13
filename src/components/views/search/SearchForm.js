import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import applicationFormAPI from '../../api/ApplicationFormApi'
import SearchResults from './SearchResults.js'

export default class SearchForm extends Component {
  constructor () {
    super()
    this.state = {
      applicationNumber: '',
      student: []
    }
    this.handleChange.bind(this)
    this.submitFormHandler.bind(this)
  }

  handleChange = value => event => {
    this.setState({ applicationNumber: event.target.value })
  }

  submitFormHandler = event => {
    event.preventDefault()
    applicationFormAPI
      .get('api/applications/' + this.state.applicationNumber)
      .then(res => {
        console.log('Res:' + res.data.data)
        this.setState({
          student: res.data.data
        })
      })
      .catch(error => {
        console.log('Error:' + error)
      })
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h2>Search Application</h2>
        </header>
        <Link className='App-link' to='/'>
          Home
        </Link>
        <div className='Application-header'>
          <form className='searchForm'>
            <table className='responsive-table' style={{ width: '110%' }}>
              <tbody>
                <tr className='form-group'>
                  <td>
                    <label className='applicationNumber'>
                      Application Number:{' '}
                    </label>
                  </td>
                  <td>
                    <input
                      type='text'
                      name='applicationNumber'
                      value={this.state.applicationNumber}
                      onChange={this.handleChange('name')}
                      style={{ width: 300 }}
                    />
                  </td>
                  <td>
                    <button
                      className='submit'
                      type='Submit'
                      onClick={this.submitFormHandler}
                    >
                      Search
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <div className='App-empty-gap' />
          <div
            hidden={this.state.student.length === 0}
            className='Application-header'
          >
            <SearchResults student={this.state.student} />
          </div>
        </div>
      </div>
    )
  }
}
