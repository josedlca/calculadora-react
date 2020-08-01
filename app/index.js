import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Main from './Main'

class App extends React.Component {
  render() {
    return (
        <React.Fragment>
            <Main/>
        </React.Fragment>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'))