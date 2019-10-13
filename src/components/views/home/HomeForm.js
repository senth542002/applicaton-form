import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'

export default class HomeForm extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h2>Home Page</h2>
        </header>
        <form className='demoForm'>
          <table className='responsive-table App-home-header'>
            <tbody>
              <tr className='form-group'>
                <td>
                  <Link to='/create'>
                    <button type='Submit' name='createApplication'>
                      {' '}
                      Create Application{' '}
                    </button>
                  </Link>
                </td>
              </tr>
              <tr className='form-group'>
                <td>
                  <Link to='/search'>
                    <button type='Submit' name='searchApplication'>
                      {' '}
                      Search Application{' '}
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}
