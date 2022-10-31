import { View, Text, StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import CorporateAccountHeader from '../component/CorporateAccountHeader'
import AntDesign from 'react-native-vector-icons/AntDesign'
import fonts from '../theme/fonts'

import { useNavigation } from '@react-navigation/native'

const ResetPasswordSuccess = () => {

    const navigation = useNavigation()
  return (
      <View style={styles.mainView}>
          <CorporateAccountHeader />

          <View style={{width:'100%', justifyContent:'center', alignItems:'center', marginTop:58,  paddingHorizontal:20}}>
              
              <AntDesign name="checkcircle" size={100} color="#2662B0" />

              <Text style={{ fontSize: 16, fontFamily: fonts.bold, color: 'black', paddingTop: 20 }}>Password Reset Email Sent</Text>
              
              <Text style={{fontFamily:fonts.regular, fontSize:16, color:'black', paddingTop:20}}>
                  An email has been sent to 
              </Text>
              <Text style={{ fontFamily: fonts.regular, fontSize: 16, color: 'black' }}>
                  <Text style={{color:'#2662b0', textDecorationLine:'underline'}}>JohnDoe@gmail.com.</Text>Follow the instructions
              </Text>
              <Text style={{ fontFamily: fonts.regular, fontSize: 16, color: 'black' }}>
                  in your email to reset your password. 
              </Text>
          </View>

          <View style={{ width: '100%', marginTop: 49, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={()=> navigation.navigate("ConfirmPassword")} style={{justifyContent:'center', alignItems:'center', backgroundColor:'#2662b0', height:40, width:280, borderRadius:10}}>
                  <Text style={{color:'white'}}>Back to Login</Text>
              </TouchableOpacity>
              
          </View>
          
    </View>
  )
}

const styles = StyleSheet.create({
    mainView: {
      flex:1,
       backgroundColor:'white'
    }

})

export default () => {
    return (
        <NativeBaseProvider>
            <ResetPasswordSuccess />
        </NativeBaseProvider>
    )
}