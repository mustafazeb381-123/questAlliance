import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import personalpic from '../theme/Images/personalpic.png'
import fonts from '../theme/fonts'

const NotificationHeader = () => {
    return (
        <View style={styles.headerView}>
            <View style={styles.headerFirstrow}>
                <AntDesign color="#2662b0" name="left" size={25} />
                <Text style={{ color: '#2662b0', fontFamily: fonts.semibold, fontSize: 19, paddingHorizontal: 10 }}>Notifications </Text>
            </View>
            <View style={styles.headerSecondrow}>
                <Image style={{ height: 40, width: 40, borderRadius: 40 }} source={personalpic} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headerSecondrow: {
        width: '40%',
        flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'

    },
    headerFirstrow: {
        width: "60%", flexDirection: 'row',
        alignItems: "center"

    },
    mainView: {
        width: "100%", flex: 1
    },
    headerView: {
        width: '100%',
        flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20,
        height: 70,
        justifyContent: 'space-between',
        backgroundColor: 'white'

    }
})

export default NotificationHeader