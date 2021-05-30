import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import Router from './src/router/Router'
import Store from './src/redux/Store'
import { NavigationContainer } from '@react-navigation/native'

export class App extends Component {
  render() {
    return (
        <Provider store={Store}>
        <NavigationContainer>
          <Router/>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App