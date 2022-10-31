import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import fonts from '../theme/fonts'
import QuestAllianceLo from '../theme/Images/QuestAllianceLo.png'
import personalpic from '../theme/Images/personalpic.png'
import { NativeBaseProvider, VStack , Select, CheckIcon } from 'native-base'
import { useNavigation } from '@react-navigation/native'


const MyLoan = () => {

    const navigation = useNavigation();
    const [service, setService] = React.useState("")
    const [tabName, setTabName] = React.useState("tab-1");

    return (

        <View style={styles.mainView}>
            
            {/*header*/}
        <View style={styles.header}>
            <Image source={QuestAllianceLo} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '50%', alignItems: 'center' }}>
                <View style={{justifyContent:'center', alignItems:'flex-end'}}>
                    <Text style={{ fontSize: 15, fontFamily: fonts.semibold, color: "#2662b0" }}>Corporate Account</Text>
                    <Text style={{ fontSize: 15, fontFamily: fonts.semibold, color: "#2662b0" }}>Test Pte Ltd</Text>
                </View>
                <Image style={{ borderRadius: 100, width: 40, height: 40 }} source={personalpic} />
            </View>
            </View>



            <ScrollView>



                <View style={styles.mianHeading}>
                    <Text style={{ fontFamily: fonts.bold, fontSize: 26, color: '#2662b0' }}>
                       My Loan 
                    </Text>
                </View>

                <View style={styles.tabView}>
                    <View style={{ width: '50%' }}>
                        <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => { setTabName("tab-1") }}>

                            {
                                tabName == "tab-1" &&


                                <Text style={{ fontFamily: fonts.bold, fontSize: 20, color: '#2662b0', }}>Ongoing</Text>
                            }

                            {
                                tabName == "tab-2" &&


                                <Text style={{ fontFamily: fonts.bold, fontSize: 20, color: '#707070', }}>Ongoing</Text>
                            }

                        </TouchableOpacity>
                        {tabName == "tab-1" &&
                            <View style={{ width: '100%', backgroundColor: '#2662b0', height: 10 }} >
                            </View>
                        }

                        {
                            tabName == "tab-2" &&
                            <View style={{ width: '100%', backgroundColor: 'white', height: 10 }} >
                            </View>
                        }
                    </View>
                    <View style={{ width: '50%' }}>
                        <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setTabName("tab-2")} >

                            {tabName == "tab-2" &&
                                <Text style={{ fontFamily: fonts.bold, fontSize: 20, color: '#2662b0' }}>Ended</Text>

                            }

                            {tabName == "tab-1" &&
                                <Text style={{ fontFamily: fonts.bold, fontSize: 20, color: '#707070' }}>Ended</Text>

                            }
                        </TouchableOpacity>

                        {

                            tabName == "tab-1" &&
                            <View style={{ width: '100%', backgroundColor: 'white', height: 10 }} >

                            </View>

                        }

                        {
                            tabName == "tab-2" &&
                            <View style={{ width: '100%', backgroundColor: '#2662b0', height: 10 }} >
                            </View>
                        }
                    </View>



                </View>

                

                {
                    tabName == "tab-1" &&
                    <View style={styles.tabOne}>



                        <View style={{ width: '100%', height: 139, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', borderRadius: 10, }}>


                            <View style={{ width: '5%', height: '100%', backgroundColor: '#f0b13c', borderBottomStartRadius: 10, borderTopStartRadius: 10 }}></View>
                            <View style={{ width: '95%' }}>
                                <TouchableOpacity onPress={() => navigation.navigate("MyLoanStatus")}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, }}>
                                        <Text style={styles.text}>
                                            Status

                                        </Text>
                                        <Text style={[styles.text, { color: '#f0b13c' }]}>
                                           Ongoing
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                        <Text style={styles.text}>
                                            Approval No

                                        </Text>
                                        <Text style={styles.text}>
                                            PLA02930
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                        <Text style={styles.text}>
                                            Loan Type

                                        </Text>
                                        <Text style={styles.text}>
                                            Mortgage (Residential)
                                        </Text>
                                    </View>



                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                        <Text style={styles.text}>
                                            Preferred Loan Amount

                                        </Text>
                                        <Text style={styles.text}>
                                            $100,000
                                        </Text>
                                    </View>


                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                        <Text style={styles.text}>
                                            Application Date
                                        </Text>
                                        <Text style={styles.text}>
                                            28-07-2021
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>



                        </View>



                       



                       </View>
                }

                {

                    tabName == "tab-2" &&
                    <View style={styles.tabOne}>



                        <View style={{ width: '100%', height: 139, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', borderRadius: 10, }}>


                                <View style={{ width: '5%', height: '100%', backgroundColor: '#7a7a7a', borderBottomStartRadius: 10, borderTopStartRadius: 10 }}></View>
                            <View style={{ width: '95%' }}>
                                <TouchableOpacity onPress={() => navigation.navigate("ApplicationStatus")}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, }}>
                                        <Text style={styles.text}>
                                            Status

                                        </Text>
                                        <Text style={[styles.text, { color: '#f0b13c' }]}>
                                            Ended
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                        <Text style={styles.text}>
                                            Approval No

                                        </Text>
                                        <Text style={styles.text}>
                                            PLA02930
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                        <Text style={styles.text}>
                                            Loan Type

                                        </Text>
                                        <Text style={styles.text}>
                                            Mortgage (Residential)
                                        </Text>
                                    </View>



                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                        <Text style={styles.text}>
                                            Preferred Loan Amount

                                        </Text>
                                        <Text style={styles.text}>
                                            $100,000
                                        </Text>
                                    </View>


                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                        <Text style={styles.text}>
                                            Application Date
                                        </Text>
                                        <Text style={styles.text}>
                                            28-07-2021
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>



                        </View>



                        {/*second view*/}


                        
                    </View>
                }
       
          </ScrollView >


           
            
            </View>
    )
}

const styles = StyleSheet.create({

    tabTwo: {
        width: '100%', justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        fontFamily: fonts.regular,
        fontSize: 14,
        color: 'black'
    },
    tabOne: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'

    },
    filterView: {
        width: '100%',
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        paddingHorizontal: 20, marginTop: 20
    },

    tabView: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row', alignItems: 'center',
        marginTop: 20

    },
    mianHeading: {
        width: '100%',
        marginTop: 20, paddingHorizontal: 20

    },
    mainView: {
        width: '100%',
        alignItems: 'center',
        flex: 1,
    },

    mainView: {
        width: '100%',
        flex: 1,
        

    },

    header: {
        backgroundColor: "white",
        flexDirection: 'row',
        height: 70,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-between', alignItems: 'center',
    }
})

export default () => {
    return (
        <NativeBaseProvider>
            <MyLoan />
        </NativeBaseProvider>
    )
}