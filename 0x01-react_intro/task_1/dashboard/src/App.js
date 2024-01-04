import React from 'react'
import holberton_logo from './holberton_logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils';

const App = () => {
  return (
    <main>
      <div className='App-header'>
        <img src={holberton_logo} alt=''/>
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </main>
  )
}

export default App
