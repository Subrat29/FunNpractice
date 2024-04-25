import React from 'react'
import Login from './components/login'
import Profile from './components/Profile'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Login />
        <br />
        <Profile />
      </div>
    </Provider>
  )
}

export default App
