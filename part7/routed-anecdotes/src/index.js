import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'

export const useField = (type) => {
    const [value, setValue] = useState('')
  
    const onChange = (event) => {
      setValue(event.target.value)
    }

    const reset = () => {
        setValue('')
    }
  
    return {
      type,
      value,
      onChange,
      reset
    }
  }

ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'))