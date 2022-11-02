import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import fonts from '../theme/fonts'
import QuestAllianceLo from '../theme/Images/QuestAllianceLo.png'
import personalpic from '../theme/Images/personalpic.png'
import SVGICON from '../theme/SVGICON'


const PersonalAccountHeader = () => {
    
  return (
      <View style={styles.header}>
          {/* <Image source={QuestAllianceLo} /> */}
          <SVGICON.QuestAllianceLogo />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '50%', alignItems: 'center' }}>
              <Text style={{ fontSize: 15, fontFamily: fonts.semibold, color: "#2662b0" }}>Personal Account</Text>
              <Image style={{ borderRadius: 100, width: 40, height: 40 }} source={personalpic} />
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    
    header: {
        backgroundColor: "white",
        flexDirection: 'row',
        height: 70,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-between', alignItems: 'center',
    }
})

export default PersonalAccountHeader