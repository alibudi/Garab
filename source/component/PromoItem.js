import React, {Component} from 'react'
import {Text, Image, View, StyleSheet} from 'react-native'
import PromoItemSub from './PromoItemSub'
const PromoItem = () =>{
    return (
        <View style={{marginHorizontal: 18, width: '100%', flexWrap:'wrap', flexDirection:'row'}}>
            <PromoItemSub/>       
        </View>
    )
}