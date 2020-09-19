import React, {Component} from 'react';
import {View, Text, Image, Dimensions, StyleSheet, StatusBar, ScrollView} from 'react-native';

import Routes from './source/config/routes'

class Home extends Component{
  render(){
    return (
        <Routes/>
    )
  }
}

export default Home