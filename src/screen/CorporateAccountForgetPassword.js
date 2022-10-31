import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import QALogo from '../theme/Images/QALogo.png'
import { NativeBaseProvider, Radio, Box, Input, Icon, HStack, Checkbox, Divider } from 'native-base'
import fonts from '../theme/fonts'
import CorporateAccountHeader from '../component/CorporateAccountHeader'
import { useNavigation } from '@react-navigation/native'

const CorporateAccountForgetPassword = () => {

    const navigation = useNavigation()
  return (
      <View style={styles.mainView}>
          <ScrollView>
             <CorporateAccountHeader />

              <View style={{width:'100%', paddingHorizontal:20, justifyContent:'center', alignItems:'center', marginTop:60}}>
                  <Text style={{fontFamily:fonts.bold, fontSize:16, color:'black'}}>
                      Forget Your password?
                  </Text>
                  <Text style={{paddingTop:10, color:'black', fontFamily:fonts.semibold, fontSize:16}}>
                      Enter your email below and we'll get you
                  </Text>
                  <Text style={{ color: 'black', fontFamily: fonts.semibold, fontSize: 16 }}>
                      back on track.
                  </Text>
              </View>

              <View style={{width:'100%', justifyContent:'center', alignItems:'center', paddingHorizontal:20, marginTop:20}}>
                  <Box alignItems="center">

                      <Input mx="3" style={{ height: 48 }} placeholder="Enter Your Email" w="100%" />
                  </Box>
              </View>

              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, marginTop: 20, }}>
                  <TouchableOpacity onPress={() =>  navigation.navigate("ResetPasswordSuccess") } style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#2662b0', width: '100%', height: 52, borderRadius: 10 }}>
                      <Text style={{ color: 'white', fontFamily: fonts.regular, fontSize: 16 }}>
                         Send Code
                      </Text>

                  </TouchableOpacity>
              </View>

              <View style={{width:'100%', justifyContent:'center', alignItems:'center', paddingHorizontal:10, marginTop:'60%'}}>
                  <Text style={{ color:'#999999', fontFamily:fonts.regular, fontSize:14}}>
                      Having an account? <Text style={{color:'#2662b0'}}>Login</Text>
                  </Text>
              </View>
          </ScrollView>
          </View>
  )
}

const styles = StyleSheet.create({
    logoView: {
        justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 40
    },
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    }

})

export default () => {
    return (
        <NativeBaseProvider>
            <CorporateAccountForgetPassword />
        </NativeBaseProvider>
    )
}