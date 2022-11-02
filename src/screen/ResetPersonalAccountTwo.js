import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import QALogo from '../theme/Images/QALogo.png'
import { NativeBaseProvider, Radio, Box, Input, Icon, HStack, Checkbox, Divider, Stack } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import fonts from '../theme/fonts'
import { useNavigation } from '@react-navigation/native'
import CorporateAccountHeader from '../component/CorporateAccountHeader'



const ResetPersonalAccountTwo = () => {

    const navigation = useNavigation();

    const [value, setValue] = React.useState("one");
    const [show, setShow] = React.useState(false);


    return (
        <View style={styles.mainView}>
            <ScrollView>
                <CorporateAccountHeader />

                <View style={styles.radioButton}>

                    <Radio.Group style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }} name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
                        setValue(nextValue);
                    }}>
                        <Radio value="one" my={1}>
                            Personal Account
                        </Radio>
                        <Radio value="two" my={1}>
                            Coporate Account
                        </Radio>
                    </Radio.Group>

                </View>


                <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 20, }}>
                    <Box alignItems="center">

                        <Input mx="3" style={{ height: 48 }} placeholder="Enter Your Email" w="100%" />
                    </Box>
                </View>

                <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 20, }}>
                    <Box alignItems="center">

                        <Stack space={4} w="100%" alignItems="center">
                            <Input w="100%" style={{ height: 48 }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                            </Pressable>} placeholder="Enter your password" />

                            <Input w="100%" style={{ height: 48 }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                            </Pressable>} placeholder="Confirm your password" />
                        </Stack>
                    </Box>
                </View>

                <View style={styles.remembarView}>
                    <View style={{ flexDirection: 'row', width: '50%', }}>
                        <HStack >
                            <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" >
                                Remember me
                            </Checkbox>
                        </HStack>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => { navigation.navigate("") }}>


                            <Text style={{ color: '#2662b0', fontFamily: fonts.regular, fontSize: 14 }}>
                                ForgotPassword
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, marginTop: 20, }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("ResetPersonalAccountThree") }} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#2662b0', width: '100%', height: 52, borderRadius: 10 }}>
                        <Text style={{ color: 'white', fontFamily: fonts.regular, fontSize: 16 }}>
                            Signup
                        </Text>

                    </TouchableOpacity>
                </View>

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingHorizontal: 20 }}>

                    <Divider style={{ width: '30%' }} />

                    <Text style={{ fontFamily: fonts.regular, fontSize: 14 }}>
                        Or continue with
                    </Text>

                    <Divider style={{ width: '30%' }} />

                </View>

                <View style={{ width: '100%', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, marginTop: 20 }}>

                    <TouchableOpacity style={{ width: 155, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 48, backgroundColor: '#FF5B45', borderRadius: 10 }}>
                        <AntDesign name="google" color="white" size={24} />
                        <Text style={{ color: 'white', paddingStart: 10, fontFamily: fonts.regular, fontSize: 14 }}>Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 155, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 48, backgroundColor: '#1984FA', borderRadius: 10 }}>
                        <FontAwesome name="facebook" color="white" size={24} />
                        <Text style={{ color: 'white', paddingStart: 10, fontFamily: fonts.regular, fontSize: 14 }}>Facebook</Text>

                    </TouchableOpacity>

                </View>

                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, marginTop: 20 }}>
                    <Text style={{ color: 'black', fontFamily: fonts.regular, fontSize: 16 }}>
                        Don't have an account ?  <Text style={{ color: '#2662b0' }}>signup</Text>
                    </Text>

                    <Text style={{ paddingTop: 20, color: '#2662b0', fontFamily: fonts.regular, fontSize: 14 }}>Back to homepage</Text>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    remembarView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20

    },
    radioButton: {
        justifyContent: 'space-between',
        flexDirection: "row",
        width: '100%', alignItems: 'center',
        marginTop: 20

    },
    logoView: {
        justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 40
    },
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default () => {
    return (
        <NativeBaseProvider>
            <ResetPersonalAccountTwo />
        </NativeBaseProvider>
    )
}