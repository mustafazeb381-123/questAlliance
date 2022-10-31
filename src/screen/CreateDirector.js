import { View, Text, StyleSheet, TouchableOpacity, Pressable, ScrollView  } from 'react-native'
import React from 'react'
import fonts from '../theme/fonts'
import { NativeBaseProvider, Stack, Input, Box, Center, Select, CheckIcon } from 'native-base'
import { useNavigation } from '@react-navigation/native'


const CreateDirector = () => {
    const navigation = useNavigation()
    const [service, setService] = React.useState("");

  return (
      <View style={styles.mainView}>
          <ScrollView>
          <View style={styles.header}>
              <Text style={{color:'#2662b0', fontFamily:fonts.bold, fontSize:26}}>
                  CREATE DIRECTOR
              </Text>
              
          </View>

          <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 20 }}>
              <Text style={{fontFamily:fonts.regular, fontSize:18}}>
                  Director 1's Particular Form
              </Text>

          </View>

          <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 20 }}>
              <Stack space={4} w="100%" maxW="100%" mx="auto">
                      <Text style={styles.inputTitle}>FirstName</Text>
                  <Input size="md" placeholder="Input" />

                      <Text style={styles.inputTitle}>Last Name</Text>
                  <Input size="md" placeholder="Input" />

                      <Text style={styles.inputTitle}>
                      ID Type
                  </Text>
                      {/* <Input size="md" placeholder="Input" /> */}
                      <Center>
                          <Box w="100%">
                              <Select selectedValue={service} w="100%" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
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
                      NRIC No.
                  </Text>
                  <Input size="md" placeholder="Input" />
                      <Text style={styles.inputTitle}>
                      Gender
                  </Text>
                      {/* <Input size="md" placeholder="Input" /> */}

                      <Center>
                          <Box w="100%">
                              <Select selectedValue={service} w="100%" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
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
                      Country
                  </Text>
                      {/* <Input size="md" placeholder="Input" /> */}
                      
                      <Center>
                          <Box w="100%">
                              <Select selectedValue={service} w="100%" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
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
                      Mobile No.
                  </Text>
                  <Input size="md" placeholder="Input" />
                      <Text style={styles.inputTitle}>Home No
                  </Text>
                  <Input size="md" placeholder="Input" />
                      <Text style={styles.inputTitle}>Email</Text>
                  <Input size="md" placeholder="Input" />

                      <Text style={styles.inputTitle}> Date of Birth</Text>
                  <Input size="md" placeholder="Input" />
                  
              </Stack>
          </View>
          <View style={{width:'100%', justifyContent:"space-between",  alignItems:'center', flexDirection:'row', paddingHorizontal:20, marginVertical:20}}>
                  <TouchableOpacity onPress={() => { navigation.navigate("AddNewCopmany") }} style={{width:150, height:45, backgroundColor:'#2662b0', borderRadius:5, justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontFamily:fonts.semibold, fontSize:16, color:"white" }}>Canel</Text>
              </TouchableOpacity>

                  <TouchableOpacity onPress={() => { navigation.navigate("AddNewCompany") }} style={{ width: 150, height: 45, backgroundColor: '#2662b0', borderRadius:5, justifyContent:'center', alignItems:'center' }}>
                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: "white" }}>Save</Text>
              </TouchableOpacity>
          </View>
          </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    inputTitle: { fontFamily: fonts.regular, fontSize: 14, color: 'black' },
    header: {
        width: '100%', 
        paddingHorizontal: 20,
        marginTop: 20,
        

    }, 
    mainView: {
        flex:1,
    }
})
export default () => {
    return (
        <NativeBaseProvider>
            <CreateDirector />
        </NativeBaseProvider>
    )
}