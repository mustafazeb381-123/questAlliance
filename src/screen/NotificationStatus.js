import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NotificationHeader from '../component/NotificationHeader'
import fonts from '../theme/fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'

const NotificationStatus = () => {
  return (
      <View style={styles.mainView}>
          <NotificationHeader />

          <View style={{ width: '100%', paddingHorizontal: 20, paddingVertical: 20 }}>
              <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 20 }}>
                  Your loan is approved
              </Text>

              <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 13, paddingTop: 8 }}>
                  Your personal loan is just approved. The loan will be transferred to your bank account shortly.
              </Text>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                  <AntDesign name="clockcircleo" size={15} />
                  <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 12, paddingStart: 10 }}>29-07-2021 12-40</Text>
              </View>
          </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
    }
})

export default NotificationStatus