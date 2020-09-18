import React from 'react'
import {Text, Image, View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
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

// const FiturUtamaSub = (props) => {
//     return (
//        <View style={{width: '25%', alignItems: 'center'}}>
//            <View>
//                <Image style={styles.imageFiturUtama} source={props.image}/>
//                 <Text style={styles.textFeatureUtama}>{props.title}</Text>
//            </View>
//        </View>
//     )
// }

class FiturUtamaSub extends React.Component{
    render(){
        return (
            <View style={{width: '25%', alignItems: 'center'}}>
                <Image style={styles.imageFiturUtama} source={this.props.image}/>
                 <Text style={styles.textFeatureUtama}>{this.props.title}</Text>
        </View>
        )
    }
}


export default FiturUtamaSub