import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import CorporateAccountHeader from '../component/CorporateAccountHeader'
import AntDesign from 'react-native-vector-icons/AntDesign'
import fonts from '../theme/fonts'

import { useNavigation } from '@react-navigation/native'
import ResetPersonalAccount from './ResetPersonalAccount'

const ResetPersonalAccountOne = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.mainView}>
            <CorporateAccountHeader />

            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 58, paddingHorizontal: 20 }}>

                <AntDesign name="checkcircle" size={100} color="#2662B0" />

                <Text style={{ fontSize: 16, fontFamily: fonts.bold, color: 'black', paddingTop: 20 }}>Password Has been Reset Successfully</Text>

                <Text style={{ fontFamily: fonts.regular, fontSize: 16, color: 'black', paddingTop: 20 }}>
                    you may login using your new email
                </Text>

            </View>

            <View style={{ width: '100%', marginTop: 49, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={()=> {navigation.navigate("ResetPersonalAccountTwo")}} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#2662b0', height: 40, width: 280, borderRadius: 10 }}>
                    <Text style={{ color: 'white' }}>Back to Login</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    }

})

export default () => {
    return (
        <NativeBaseProvider>
            <ResetPersonalAccountOne />
        </NativeBaseProvider>
    )
}