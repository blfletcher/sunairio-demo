import { Component } from 'react';

import './app.styles.scss'

import SessionProvider from './context/SessionContext';

import Demo from './components/pages/Demo';

class App extends Component {
  render() {
    return (
      <SessionProvider>
        <Demo />
      </SessionProvider>
    )
  }
}

export default App
