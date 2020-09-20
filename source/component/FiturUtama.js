import React from 'react'
import {Text, Image, View, StyleSheet} from 'react-native'
import FiturUtamaSub from './FiturUtamaSub'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    wrapperFiturUtama:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
      flexWrap: 'wrap',
      width: '100%'
    }
  })

const FiturUtama = () => {
  const navigation = useNavigation();
    return (
       <View style={styles.wrapperFiturUtama}>
           <FiturUtamaSub onPress={() => navigation.navigate('Food')} image={require('../assets/icon/food.jpg')} title="Food"/>
           <FiturUtamaSub image={require('../assets/icon/bike.jpg')} title="Bike"/>
           <FiturUtamaSub image={require('../assets/icon/car.jpg')} title="Car"/>
           <FiturUtamaSub image={require('../assets/icon/send.jpg')} title="Delivery"/>
           <FiturUtamaSub image={require('../assets/icon/subscribe.jpg')} title="Food"/>
           <FiturUtamaSub image={require('../assets/icon/doctor.jpg')} title="Bike"/>
           <FiturUtamaSub image={require('../assets/icon/pulsa.jpg')} title="Car"/>
           <FiturUtamaSub image={require('../assets/icon/more.jpg')} title="Delivery"/>
       </View>
    )
}

export default FiturUtama