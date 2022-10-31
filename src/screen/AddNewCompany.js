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


const AddNewCompany = () => {
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
            <View style={styles.mainHeading}>
                <Text style={styles.headingText}>
                   ADD A NEW COMPANY
                </Text>

                <Text style={{ paddingTop: 26, fontFamily: fonts.regular, fontSize: 14 , color:'black'}}>
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
                {lineDraw("grey")}

            </View>

            <ScrollView>



                <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 29 }}>
                    

                    <Text style={{ fontSize: 18, fontFamily: fonts.semibold, color: '#292526' }}>Director's Particular</Text>


                    <View style={{ width: '100%', height: 61, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderStyle: 'dashed', marginTop: 24, flexDirection: 'row', backgroundColor:'#E2EFFF' }}>
                        <Text style={{ fontFamily: fonts.semibold, fontSize: 16, paddingEnd: 10, color:'#292526', }}>
                            Darren Tan Hong Wei 
                        </Text>
                        <TouchableOpacity onPress={()=> {navigation.navigate("EditDirector")}}>
                            <Feather style={{ paddingStart: 10 }} name="edit" size={20} color="#2662b0" />
                        </TouchableOpacity>
                        <MaterialCommunityIcons style={{paddingStart:10}}
                            name="close-thick" color="red" size={22} />
                        </View>
              
                    <TouchableOpacity onPress={()=> {navigation.navigate("CreateDirector")}}>

                    
                    <View style={{ width: '100%', height: 61, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderStyle: 'dashed', marginTop: 24 , flexDirection:'row',  }}>
                        <Text style={{fontFamily:fonts.semibold, fontSize:20, color:'#2662b0', paddingEnd:10}}>
                            Create Director 
                        </Text>
                        <FontAwesome5 name="plus" size={36} color="#2662b0" />

                        </View>
                    </TouchableOpacity>

                </View>

                

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'flex-end', marginTop: 250, paddingHorizontal: 20,  }}>

                    <Text style={{fontFamily:fonts.regular, fontSize:14, color:'black'}}>
                        Note: You can add more directors if needed at the company profile screen later.
                    </Text>

                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'100%', marginVertical:20}}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ height: 45, width: 145, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2662b0', borderRadius: 5 }}>
                        <Text style={{ color: "white", fontSize:16, fontFamily:fonts.semibold}}>
                            Previous
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("CompletedPage") }} style={{ height: 45, width: 145, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2662b0', borderRadius: 5 }}>
                            <Text style={{ color: "white", fontSize: 16, fontFamily: fonts.semibold }}>
                            Completed
                        </Text>
                        </TouchableOpacity>
                        
                    </View>

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
            <AddNewCompany />
        </NativeBaseProvider>
    )
}