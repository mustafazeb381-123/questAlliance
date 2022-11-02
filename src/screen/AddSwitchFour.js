import { View, Text, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Stack, Input, Box, } from 'native-base'
import fonts from '../theme/fonts'
import { useNavigation } from '@react-navigation/native'
import ColorsTheme from "../theme/ColorsTheme";
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import MoreHeader from '../component/MoreHeader'


const AddSwitchFour = () => {
    const navigation = useNavigation();
    const [tab, setTab] = React.useState("")

    const lineDraw = (color) => {
        return (
            <View
                style={{
                    width: 104,
                    maxWidth: 104,
                    minHeight: 5,
                    marginRight: 20,
                    backgroundColor: color,
                }}
            ></View>
        );
    };
    return (
        <View style={styles.mainView}>
            <MoreHeader />
            <View style={styles.mainHeading}>
                <Text style={styles.headingText}>
                    ADD A NEW COMPANY
                </Text>

                <Text style={{ paddingTop: 26, fontFamily: fonts.regular, fontSize: 14, color: 'black' }}>
                    Main Nominee who login first time are required to set up the company profile first in order to create the corporate account. The other directors created under the company will not be required to do so.
                </Text>
            </View>

            <View
                style={{
                    marginStart: 20,
                    flexDirection: "row",
                    marginTop: 34
                }}
            >
                {lineDraw(ColorsTheme.Primary)}
                {lineDraw(ColorsTheme.Primary)}
                {lineDraw(ColorsTheme.Primary)}

            </View>

            <ScrollView>

                <View style={{ marginTop: 64, width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                    <AntDesign name="checkcircleo" size={151} color="#00b900" />

                    <Text style={{ color: "#00b900", fontFamily: fonts.bold, fontSize: 28, paddingTop: 20 }}>
                        You have added a

                    </Text>
                    <Text style={{ color: "#00b900", fontFamily: fonts.bold, fontSize: 28, }}>new company!</Text>

                    <Text style={{ fontFamily: fonts.regular, fontSize: 14, paddingTop: 20 }}>
                        You are now the main nominee of a company.
                    </Text>
                    <Text style={{ fontFamily: fonts.regular, fontSize: 14, }}>
                        Director's account that is registered will also
                    </Text>
                    <Text style={{ fontFamily: fonts.regular, fontSize: 14, }}>
                        be under the company.
                    </Text>
                </View>

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
                    <TouchableOpacity onPress={()=> navigation.navigate("AddSwitchCompany")} style={{ backgroundColor: '#2662b0', width: 335, height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                        <Text style={{ fontSize: 16, fontFamily: fonts.semibold, color: 'white' }}>
                            Back To Add/Switch Company
                        </Text>
                    </TouchableOpacity>
                </View>



            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontFamily: fonts.bold,
        fontSize: 26,
        color: "#2662b0"

    },
    mainHeading: {
        width: '100%',
        justifyContent: 'center',
        marginTop: 20,
        paddingHorizontal: 20

    },
    mainView: {
        flex: 1,

    }
})

export default () => {
    return (
        <NativeBaseProvider>
            <AddSwitchFour />
        </NativeBaseProvider>
    )
}