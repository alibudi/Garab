import React, {useState} from 'react'
import { Text, View, StyleSheet, StatusBar, TextInput } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

const Login = ()=> {
    const [displaySosmed,setDisplaySosmed] = useState("flex")
    const [nohp,setNohp] = useState("")
    const [actionButton, setActionButton] = useState("Or continue with a social media ")
    return (
        <View style={{flex: 1, backgroundColor: '#09AB54'}}>
            <StatusBar backgroundColor="#09AB54"/>
           <View style={{marginHorizontal: 18, flex: 1}}>
                <Text style={{fontSize: 50, color: 'white', marginTop: 20}}>Garab</Text>
                <Text style={{fontSize: 25, color: 'white', marginTop:80}}>Welcome</Text>
                <Text style={{fontSize: 15, color: 'white', marginTop:5}}>Enter your mobile number to continue</Text>
           
                <View style={{width:300, height: 53, backgroundColor:'white', marginTop: 10}}>
                    <TextInput style={{fontSize: 25}} placeholder="628593288"
                    onChangeText={(nohp) =>{
                        setNohp(nohp)
                    
                    }}
                    keyboardType="number-pad"
                    onFocus = {()=> setDisplaySosmed("none")}
                    onBlur = {()=> setDisplaySosmed("none")}
                    value={nohp}
                    />
                </View> 
           </View>
           <TouchableRipple style={{alignItems:'center', marginBottom: 15}} 
                onPress={()=> null}
            >
                <Text style={{fontSize:15, color:'white'}}>Or continue with a social media </Text>
            </TouchableRipple>
           <View style={{display: displaySosmed, height: 90, backgroundColor:'white', flexDirection:'row', justifyContent: 'space-around',alignItems:'center'}}>
                <TouchableRipple style={{backgroundColor:'#2166b0', width: 110, height:50,
                    justifyContent: 'center',elevation:4}}>
                        <Text style={{color:'white', textAlign:'center'}}>Facebook</Text>
                </TouchableRipple>
                <TouchableRipple style={{backgroundColor:'white', width: 110, height:50,
                    justifyContent: 'center',elevation:4}}>
                        <Text style={{color:'grey', textAlign:'center'}}>Google</Text>
                </TouchableRipple>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    
})