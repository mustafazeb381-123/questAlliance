import {
    Alert,
    Animated,
    StyleSheet,
    Text,
    View,
    Pressable,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ColorsTheme from "../theme/ColorsTheme";
import SVGICON from "../theme/SVGICON";

// import ColorsTheme from '../theme/ColorsTheme';
// import SVGICON from '../theme/SVGICON';
import Header from '../component/Header';
// import fonts from '../theme/fonts';
import fonts from "../theme/fonts";
import Button from "../component/Button";
import CommonTextInput from "../component/CommonTextInput";
import CommonDropdown from "../component/CommonDropdown";
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { NativeBaseProvider } from "native-base";
const MorganLoanEnd = (props) => {


    const lineDraw = (color) => {
        return (
            <View
                style={{
                    width: 30,
                    maxWidth: 30,
                    minHeight: 5,
                    marginRight: 20,
                    backgroundColor: color,
                }}
            ></View>
        );
    };

    const navigation = useNavigation
    const [name, setName] = useState("");
    return (
        <View style={{ flex: 1, backgroundColor: "white", width: '100%' }}>
            <Header
                props={props}
                back={true}
                headerTitle={"Mortgage Loan"}
                backonPress={() => {
                    props.navigation.pop();
                }}
            />
            <ScrollView style={{ marginBottom: 10 }}>
                <View
                    style={{
                        padding: 16,
                        flex: 1,
                    }}
                >
                    <Text style={styles.title}>MORTGAGE LOAN APPLICATION FORM</Text>
                </View>
                <View
                    style={{
                        marginStart: 20,
                        flexDirection: "row",
                    }}
                >
                    {lineDraw(ColorsTheme.Primary)}
                    {lineDraw(ColorsTheme.Primary)}
                    {lineDraw(ColorsTheme.Primary)}
                    {lineDraw(ColorsTheme.Primary)}
                    {lineDraw(ColorsTheme.Primary)}
                    {lineDraw(ColorsTheme.Primary)}
                    {lineDraw(ColorsTheme.Primary)}
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 45, }}>
                    <AntDesign name="checkcircleo" size={100} color="#00b900" />

                    <Text style={{ fontFamily: fonts.bold, fontSize: 28, paddingTop: 20, color: '#00b900' }}>Your application </Text>

                    <Text style={{ fontFamily: fonts.bold, fontSize: 28, paddingTop: 10, color: '#00b900' }}> has been Submitted</Text>


                    <Text style={{ paddingTop: 18, fontFamily: fonts.semibold, fontSize: 14, color: 'black' , paddingHorizontal:20}}>
                        Thank you for your submission!
                       
                    </Text>
                    <Text style={{ paddingTop: 5, fontFamily: fonts.semibold, fontSize: 14, color: 'black', paddingHorizontal: 20 }} >
                        We will inform you the result within 3 working days.
                    </Text>

                    <TouchableOpacity style={{ width: 280, backgroundColor: '#2662b0', justifyContent: 'center', alignItems: 'center', height: 40, borderRadius: 5, marginTop: 36 }}>
                        <Text style={{ color: 'white', fontFamily: fonts.semibold, fontSize: 16 }}>Back To Home</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

  


    title: {
        color: ColorsTheme.Primary,
        fontSize: 28,
        marginTop: 10,
        fontFamily: fonts.bold,
    },
    blacktitle: {
        color: "black",
        fontSize: 24,
        fontFamily: fonts.semibold,
    },
})

export default () => {
    return (
        <NativeBaseProvider>
            <MorganLoanEnd />
        </NativeBaseProvider>
    )
}