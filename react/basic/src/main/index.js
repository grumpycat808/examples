import React, { Component } from 'react'
import { render } from 'react-dom'

import EmailEditor from 'react-email-editor'

import './index.css'

class App extends Component {
  render() {
    return (
      <EmailEditor
        projectId={1071}
      />
    )
  }
}

render(<App />, document.getElementById('app'))
