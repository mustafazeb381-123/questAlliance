import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MoreHeader from '../component/MoreHeader'
import fonts from '../theme/fonts'
import { NativeBaseProvider, Divider } from 'native-base'


const PrivacyPolicy = () => {
  return (
    <View style={styles.mainView}>
      <MoreHeader />
      <Divider />

      <View style={styles.mianBodyView}>
        <Text style={{ color: '#2662b0', fontFamily: fonts.bold, fontSize: 26 }}>PRIVACY POLICY</Text>


        <Text style={{ paddingTop: 20, fontFamily: fonts.regular, color: 'black', fontSize: 14 }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
        <Text style={{ paddingTop: 20, fontFamily: fonts.regular, color: 'black', fontSize: 14 }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        </Text>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white'
  },
  mianBodyView: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,

  }

})

export default () => {
  return (
    <NativeBaseProvider>
      <PrivacyPolicy />
    </NativeBaseProvider>
  )
}