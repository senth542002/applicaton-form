import React from 'react'
import './App.css'
import ApplicationForm from './ApplicationForm'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Application Form</h2>
      </header>
      <div className='Application-header'>
      <ApplicationForm style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}/>
      </div>
      <div className='rows' script='display:inline;'>
      </div>
    </div>
  )
}

export default App
