import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {Home, Activity} from '../../page'

const MaterialBottom = createMaterialBottomTabNavigator();

export default class index extends Component {
    render() {
        return (
            <NavigationContainer>
                <MaterialBottom.Navigator>
                    <MaterialBottom.Screen name="Home" component={Home}/>
                    <MaterialBottom.Screen name="Activity" component={Activity}/>
                </MaterialBottom.Navigator>
            </NavigationContainer>
        )
    }
}
