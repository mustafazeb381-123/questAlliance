import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Divider, Center, Box, Select, CheckIcon } from 'native-base'
import PersonalAccountHeader from '../component/PersonalAccountHeader'
import fonts from '../theme/fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'


const Notification = () => {

    const [service, setService] = React.useState("");
    const navigation = useNavigation();

  return (
    <View style={styles.mainView}>
          <PersonalAccountHeader />
          <Divider />
          
          <ScrollView>
              
              <View style={{ justifyContent: 'center',  backgroundColor: 'white', paddingHorizontal:20, height:160}}>
                  <Text style={{fontFamily:fonts.bold, fontSize:26, color:'#2662b0'}}>
                      Notifications
                  </Text>

                  <Center style={{ marginTop: 30, borderWidth:0.5, borderRadius:10, flexDirection:"row" }}   justifyContent="space-around" >
                      <Text style={{fontFamily:fonts.regular, fontSize:16, color:'black'}}>Filter by month</Text>
                      <Box w="50%">
                          <Select borderWidth="0" selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Last 4 Week"
                              fontSize="16" fontFamily={fonts.regular} color="black"
                             placeholderTextColor="black"
                              _selectedItem={{
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
                 
              </View>
                <TouchableOpacity onPress={()=> {navigation.navigate("NotificationStatus")}}>
              <View style={{width:'100%', paddingHorizontal:20, paddingVertical:20}}>
                  <Text style={{fontFamily:fonts.regular, color:'black', fontSize:15}}>
                      Your loan is approved
                  </Text>

                  <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 13 , paddingTop:8}}>
                      Your personal loan is just approved. The loan will be transferred to your bank account shortly.
                  </Text>

                  <View style={{flexDirection:'row', alignItems:'center', marginTop:8}}>
                      <AntDesign name="clockcircleo" size={15} />
                      <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 13, paddingStart: 10 }}>29-07-2021 12-40</Text>
                  </View>
                  </View>
              </TouchableOpacity>

              <View style={{ width: '100%', paddingHorizontal: 20, paddingVertical: 20, backgroundColor:'white' }}>
                  <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 15 }}>
                      Your loan is Submitted
                  </Text>

                  <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 13, paddingTop: 8 }}>
                      Your personal loan is just approved. The loan will be transferred to your bank account shortly.
                  </Text>

                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                      <AntDesign name="clockcircleo" size={15} />
                      <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 13, paddingStart: 10 }}>29-07-2021 12-40</Text>
                  </View>
              </View>



              <View style={{ width: '100%', paddingHorizontal: 20, paddingVertical: 20 }}>
                  <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 15 }}>
                      Your loan is approved
                  </Text>

                  <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 13, paddingTop: 8 }}>
                      Your personal loan is just approved. The loan will be transferred to your bank account shortly.
                  </Text>

                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                      <AntDesign name="clockcircleo" size={15} />
                      <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 13, paddingStart: 10 }}>29-07-2021 12-40</Text>
                  </View>
              </View>

              <View style={{ width: '100%', paddingHorizontal: 20, paddingVertical: 20, backgroundColor:'white' }}>
                  <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 15 }}>
                      Your loan is approved
                  </Text>

                  <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 13, paddingTop: 8 }}>
                      Your personal loan is just approved. The loan will be transferred to your bank account shortly.
                  </Text>

                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                      <AntDesign name="clockcircleo" size={15} />
                      <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 13, paddingStart: 10 }}>29-07-2021 12-40</Text>
                  </View>
              </View>


              <View style={{ width: '100%', paddingHorizontal: 20, paddingVertical: 20 }}>
                  <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 15 }}>
                      Your loan is approved
                  </Text>

                  <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 13, paddingTop: 8 }}>
                      Your personal loan is just approved. The loan will be transferred to your bank account shortly.
                  </Text>

                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                      <AntDesign name="clockcircleo" size={15} />
                      <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 13, paddingStart: 10 }}>29-07-2021 12-40</Text>
                  </View>
              </View>
              
          </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    mainView: {
        flex:1
    }

})

export default () => {
    return (
        <NativeBaseProvider>
            <Notification />
        </NativeBaseProvider>
    )
}