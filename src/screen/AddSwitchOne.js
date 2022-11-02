import { View, Text, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Stack, Input, Box, Center, Select, CheckIcon } from 'native-base'
import fonts from '../theme/fonts'
import { useNavigation } from '@react-navigation/native'
import ColorsTheme from "../theme/ColorsTheme";
import MoreHeader from '../component/MoreHeader'


const AddSwitchOne = () => {
    const navigation = useNavigation();
    const [service, setService] = React.useState("");


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

                {/* <Text style={{ paddingTop: 26, fontFamily: fonts.regular, fontSize: 14 }}>
                    Main Nominee who login first time are required to set up the company profile first in order to create the corporate account. The other directors created under the company will not be required to do so.
                </Text> */}
            </View>

            <View
                style={{
                    marginStart: 20,
                    flexDirection: "row",
                    marginTop: 34
                }}
            >
                {lineDraw(ColorsTheme.Primary)}
                {lineDraw("grey")}
                {lineDraw("grey")}

            </View>

            <ScrollView>



                <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 29 }}>
                    <Text style={{ fontSize: 18, fontFamily: fonts.semibold, color: '#292526' }}>Company Information</Text>
                </View>

                <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 29 }}>

                    <Stack space={4} w="100%" mx="auto">
                        <Text style={styles.inputTitle}>Company Name*</Text>
                        <Input size="md" placeholder=" Company Name" bg="white" />
                        <Text style={styles.inputTitle}>UEN</Text>
                        <Input bg="white" size="md" placeholder=" UEN" />

                        <Text style={styles.inputTitle}>Nationality of Company*</Text>
                        {/* <Input size="md" placeholder=" Nationality of Company" /> */}
                        <Center>
                            <Box w="100%">
                                <Select bg="white" selectedValue={service} w="100%" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />
                                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                    <Select.Item label="UX Research" value="ux" />
                                    <Select.Item label="Web Development" value="web" />
                                    <Select.Item label="Cross Platform Development" value="cross" />
                                    <Select.Item label="UI Designing" value="ui" />
                                    <Select.Item label="Backend Development" value="backend" />
                                </Select>
                            </Box>
                        </Center>

                        <Text style={styles.inputTitle}>
                            Date of Incorporation*
                        </Text>
                        <Input bg="white" size="md" placeholder=" Date of Incorporation*" />

                        <Text style={styles.inputTitle}>Incorporation Type</Text>
                        <Center>
                            <Box w="100%">
                                <Select bg="white" selectedValue={service} w="100%" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />
                                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                    <Select.Item label="UX Research" value="ux" />
                                    <Select.Item label="Web Development" value="web" />
                                    <Select.Item label="Cross Platform Development" value="cross" />
                                    <Select.Item label="UI Designing" value="ui" />
                                    <Select.Item label="Backend Development" value="backend" />
                                </Select>
                            </Box>
                        </Center>

                        <Text style={styles.inputTitle}>
                            Postal Code
                        </Text>
                        {/* <Input size="md" placeholder=" Postal Code" /> */}

                        <Center>
                            <Box w="100%">
                                <Select bg="white" selectedValue={service} w="100%" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />
                                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                    <Select.Item label="UX Research" value="ux" />
                                    <Select.Item label="Web Development" value="web" />
                                    <Select.Item label="Cross Platform Development" value="cross" />
                                    <Select.Item label="UI Designing" value="ui" />
                                    <Select.Item label="Backend Development" value="backend" />
                                </Select>
                            </Box>
                        </Center>

                        <Text style={styles.inputTitle}>
                            Contact No.
                        </Text>
                        <Input bg="white" size="md" placeholder=" Contact No." />

                        <Text style={styles.inputTitle}>
                            Address:
                        </Text>
                        <Input bg="white" size="md" placeholder=" Address:" />

                    </Stack>

                </View>

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'flex-end', marginVertical: 20, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("AddSwitchTwo") }} style={{ height: 45, width: 145, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2662b0', borderRadius: 5 }}>
                        <Text style={{ color: "white", fontFamily: fonts.semibold, fontSize: 16 }}>
                            Next
                        </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    inputTitle: {
        fontFamily: fonts.regular,
        fontSize: 14, color: "black"

    },
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
            <AddSwitchOne />
        </NativeBaseProvider>
    )
}