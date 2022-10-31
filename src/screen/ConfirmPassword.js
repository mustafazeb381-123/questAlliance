import { View, Text, StyleSheet, Pressable , TouchableOpacity} from 'react-native'
import React from 'react'
import CorporateAccountHeader from '../component/CorporateAccountHeader'
import { NativeBaseProvider, Input, Icon, Stack } from 'native-base'
import fonts from '../theme/fonts'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'


const ConfirmPassword = () => {

    const [show, setShow] = React.useState(false);
    const navigation = useNavigation()

  return (
    <View style={styles.mainView}>
          <CorporateAccountHeader />
          
          <View style={{justifyContent:'center', alignItems:'center', marginTop:59}}>
              <Text style={{fontSize:16, fontFamily:fonts.bold, color:'black'}}>
                  Reset Your Personal Account's Password
              </Text>
              <Text style={{fontSize:fonts.regular, fontSize:16, color:'black', paddingTop:20}}>
                  Enter your new password below
              </Text>
              <Text style={{ fontSize: fonts.regular, fontSize: 16, color: 'black' }} >
                  and it will replace the old password 
              </Text>
          </View>

          <View style={{width:'100%', justifyContent:'center', alignItems:'center', marginTop:23}}>
              <Stack space={4} w="100%" alignItems="center">
              <Input w="327" height="52" type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                  <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                      </Pressable>} placeholder="Enter Your new password" />
                  


                  <Input w="327" height="52" type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                      <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                  </Pressable>} placeholder="Conform your new password" />
              </Stack>
          </View>

          <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 55 }}>
              <TouchableOpacity onPress={()=> {navigation.navigate("ResetPasswordSuccessfull")}} style={{ width:327, height:40, justifyContent:'center', alignItems:'center', backgroundColor:'#2662b0', borderRadius:10}}>
                  <Text style={{color:'white'}}>
                      Reset
                  </Text>
              </TouchableOpacity>
              
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1, 
        backgroundColor:'white'
    }
})

export default () => {
    return (
    <NativeBaseProvider>
        <ConfirmPassword />
        </NativeBaseProvider>
    )
}