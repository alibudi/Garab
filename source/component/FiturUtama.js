import React from 'react'
import {Text, Image, View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    wrapperFiturUtama:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15
    },
    imageFiturUtama:{
      height: 55,
      width: 55,
      marginTop: 10,
    },
    textFeatureUtama:{
        textAlign: 'center',
        marginTop: 4,
    }
  })

const FiturUtama = () => {
    return (
       <View style={styles.wrapperFiturUtama}>
           <View>
               <Image style={styles.imageFiturUtama} source={require('../assets/icon/food.jpg')}/>
               <Text style={styles.textFeatureUtama}>Food</Text>
           </View>
           <View>
               <Image style={styles.imageFiturUtama} source={require('../assets/icon/bike.jpg')}/>
               <Text style={styles.textFeatureUtama}>Bike</Text>
           </View>
           <View>
               <Image style={styles.imageFiturUtama} source={require('../assets/icon/car.jpg')}/>
               <Text style={styles.textFeatureUtama}>Car</Text>
           </View>
           <View>
               <Image style={styles.imageFiturUtama} source={require('../assets/icon/send.jpg')}/>
               <Text style={styles.textFeatureUtama}>Delivery</Text>
           </View>
       </View>
    )
}

export default FiturUtama