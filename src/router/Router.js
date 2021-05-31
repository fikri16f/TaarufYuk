 import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../page/Home';
import Register from '../page/Register';
import Login from '../page/Login';
import Menu  from '../page/Menu';
import dataCalon from '../page/dataCalon';
import DetailCalon from '../page/DetailCalon';
import pilihCalon from '../page/pilihCalon';

const Stack = createStackNavigator();
export class Router extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Menu" component={Menu}/>
                <Stack.Screen name="dataCalon" component={dataCalon}/>
                <Stack.Screen name="DetailCalon" component={DetailCalon}/>
                <Stack.Screen name="pilihCalon" component={pilihCalon}/>
            </Stack.Navigator>
        )
    }
}

export default Router
