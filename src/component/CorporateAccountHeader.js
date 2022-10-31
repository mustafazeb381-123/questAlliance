import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import QALogo from '../theme/Images/QALogo.png'
import { NativeBaseProvider, Radio, Box, Input, Icon, HStack, Checkbox, Divider } from 'native-base'
import fonts from '../theme/fonts'

const CorporateAccountHeader = () => {
  return (
      <View style={styles.mainView}>
        
              <View style={styles.logoView}>
                  <Image source={QALogo} />
              </View>
             
    </View>
  )
}

const styles = StyleSheet.create({
    logoView: {
        justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 40
    },
    mainView: {
        width:'100%',
        backgroundColor: 'white'
    }

})

export default CorporateAccountHeader