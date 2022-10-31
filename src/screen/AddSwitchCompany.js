import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import MoreHeader from '../component/MoreHeader'
import { NativeBaseProvider } from 'native-base'

const AddSwitchCompany = () => {
  return (
      <View style={styles.mainView}>
          <MoreHeader />
     
    </View>
  )
}
const styles = StyleSheet.create({
    mainView: {
        flex:1
    }
})

export default () => {
    return (
        <NativeBaseProvider>
            <AddSwitchCompany />
        </NativeBaseProvider>
    )
}