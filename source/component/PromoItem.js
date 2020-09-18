import React, {Component} from 'react'
import {Text, Image, View, StyleSheet} from 'react-native'
import PromoItemSub from './PromoItemSub'
const PromoItem = () =>{
    return (
        <View style={{marginHorizontal: 18, width: '100%', flexWrap:'wrap', flexDirection:'row'}}>
            <PromoItemSub
                image={{uri : "https://www.javatravel.net/wp-content/uploads/2020/01/Minuman-Makanan-Khas-Tegal.jpg"}}
                text="Makanan Khas tegal"
                diskon= "Diskon 70%"
            />  
            <PromoItemSub
                image={{uri : "https://www.javatravel.net/wp-content/uploads/2020/01/Minuman-Makanan-Khas-Tegal.jpg"}}
                text="Makanan Khas tegal"
                diskon= "Diskon 50%"
            />  
            <PromoItemSub
                image={{uri : "https://www.javatravel.net/wp-content/uploads/2020/01/Minuman-Makanan-Khas-Tegal.jpg"}}
                text="Makanan Khas tegal"
                diskon= "Diskon 30%"
            />  
            <PromoItemSub
                image={{uri : "https://www.javatravel.net/wp-content/uploads/2020/01/Minuman-Makanan-Khas-Tegal.jpg"}}
                text="Makanan Khas tegal"
                diskon= "Diskon 40%"
            />       
        </View>
    )
}

export default PromoItem