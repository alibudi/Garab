import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import {Home, Activity, Account, Inbox, Payment, Food} from '../../page'
const MaterialBottom = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => 
    <Stack.Navigator 
        headerMode="none"
        >
            <Stack.Screen name="Home" component={ButtomTabs}/>
            <Stack.Screen name="Food" component={Food}/>
        </Stack.Navigator>
        

const ButtomTabs = () => {
    return (
        <MaterialBottom.Navigator
        shifting={false}
        activeColor="#09AB54"
        inactiveColor="#676767"
        initialRouteName="Home"
        barStyle={{backgroundColor:'white', borderWidth:.3,borderColor:'lightgrey'}}
        >
        <MaterialBottom.Screen name="Home" component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                    <View style={{marginTop: -4}}>
                        {
                        color == "#09AB54" ?
                        
                        <Image source={require('../../assets/icon/nav-home-active.jpg')} style={{height:30, width: 30}}/>
                        :
                        <Image source={require('../../assets/icon/nav-home.jpg')} style={{height:30, width: 30}}/>
                        }
                        </View>
                )
            }}
        />
        <MaterialBottom.Screen name="Activity" component={Activity}
             options={{
                tabBarIcon: ({color}) => (
                    <View style={{marginTop: -4}}>
                        {
                        color == "#09AB54" ?
                        
                        <Image source={require('../../assets/icon/nav-activity-active.jpg')} style={{height:30, width: 30}}/>
                        :
                        <Image source={require('../../assets/icon/nav-activity.jpg')} style={{height:30, width: 30}}/>
                        }
                        </View>
                )
            }}
        />
   
        <MaterialBottom.Screen name="Inbox" component={Inbox}
         options={{
            tabBarIcon: ({color}) => (
                <View style={{marginTop: -4}}>
                    {
                    color == "#09AB54" ?
                    
                    <Image source={require('../../assets/icon/nav-inbox-active.jpg')} style={{height:30, width: 30}}/>
                    :
                    <Image source={require('../../assets/icon/nav-inbox.jpg')} style={{height:30, width: 30}}/>
                    }
                    </View>
            ),
            tabBarBadge:1
        }}/>
        <MaterialBottom.Screen name="Payment" component={Payment}
             options={{
                tabBarIcon: ({color}) => (
                    <View style={{marginTop: -4}}>
                        {
                        color == "#09AB54" ?
                        
                        <Image source={require('../../assets/icon/nav-payment-active.jpg')} style={{height:30, width: 30}}/>
                        :
                        <Image source={require('../../assets/icon/nav-payment.jpg')} style={{height:30, width: 30}}/>
                        }
                        </View>
                )
            }}
        />
       <MaterialBottom.Screen name="Account" component={Account}
         options={{
            tabBarIcon: ({color}) => (
                <View style={{marginTop: -4}}>
                    {
                    color == "#09AB54" ?
                    
                    <Image source={require('../../assets/icon/nav-account-active.jpg')} style={{height:30, width: 30}}/>
                    :
                    <Image source={require('../../assets/icon/nav-account.jpg')} style={{height:30, width: 30}}/>
                    }
                    </View>
            )
        }}
        />
    </MaterialBottom.Navigator>
    )
}
export default class index extends Component {
    render() {
        return (
            <NavigationContainer>
                <HomeStack/>
            </NavigationContainer>
        )
    }
}
