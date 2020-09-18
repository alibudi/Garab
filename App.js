import React, {Component} from 'react';
import {View, Text, Image, Dimensions, StyleSheet, StatusBar, ScrollView} from 'react-native';
import imgBanner from './source/assets/images/awan.jpg'
import OvoComponent from './source/component/OvoComponent'
import FiturUtama from './source/component/FiturUtama'
import PromoItem from './source/component/PromoItem'

const {height,width} = Dimensions.get('window')
const styles = StyleSheet.create({
  imageBanner: {
    height: 140, width: width,
  },
  greetingText: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    top: 30,
    color: '#383838'
  },
  wrapperOvo: {
    marginHorizontal: 18,
    height: 150,
    marginTop: -60,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 10
  },
  textovo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10 
  },
  gerisOvo:{
    height: .8,
    backgroundColor: '#adadad',
    marginTop: 10,
  },
  divider: {
    width: width,
    height: 15,
    backgroundColor: '#ededed',
    marginVertical: 15
  }
})
class Home extends Component{
  render(){
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)"/>
        <Image style={styles.imageBanner} source={imgBanner}/>
        <Text style={styles.greetingText}>Selamat Siang</Text>
        <View style={styles.wrapperOvo}>
          <View style={styles.textovo}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#383838'}}>Ovo Balance</Text>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#383838'}}>Rp 1.000.000</Text>
          </View>
          <View style={styles.gerisOvo}></View>
          <OvoComponent/>
         
        </View>
        <View style={{marginHorizontal: 18}}>
              <FiturUtama/>
          </View>
        <View style={styles.divider}></View>
           <PromoItem/>
      </ScrollView>
    )
  }
}

export default Home