import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import MoreHeader from '../component/MoreHeader'
import { NativeBaseProvider } from 'native-base'
import fonts from '../theme/fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const AddSwitchCompany = () => {
    const navigation = useNavigation()
  return (
      <View style={styles.mainView}>
          <MoreHeader />
          <View style={styles.mainheader}>
              <Text style={{fontFamily:fonts.bold, fontSize:26, color:'#2662b0'}}>
                  ADD/SWITCH COMPANY
              </Text>
              
          </View>
          <ScrollView>
              <View style={styles.select}>
                  <View style={{ width: '90%', height: 159, borderRadius: 10, borderWidth: 1, backgroundColor: 'white' }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal:20,marginTop:10 }}>
                          <Text style={{fontFamily:fonts.regular, fontSize:20, color:'black'}}>
                              Test Pte Ltd
                          </Text>
                          <AntDesign name="checkcircleo" size={24} color="#00b900" />
                          
                      </View>
                      <View style={{paddingHorizontal:20,  width:'100%'}}>
                          <Text style={{fontSize:14, fontFamily:fonts.regular, }}>
                              201023709H
                          </Text> 
                      </View>

                      <View style={{width:'100%', paddingHorizontal:20, marginTop:8}}>
                          <Text style={{color:'#2662b0', fontFamily:fonts.regular, fontSize:20 }}>
                              Role: Mian Nominee
                          </Text>
                      </View>
                      <View style={{width:'100%', justifyContent:'center', alignItems:'center', marginTop:10}}>
                          <TouchableOpacity style={{ width: '90%', height: 45, justifyContent: 'center', alignItems: "center", backgroundColor:'#93B1D8',borderRadius:10}}>
                              <Text style={{color:'white'}}>
                                  Select
                              </Text>
                              
                          </TouchableOpacity>
                      </View>
                      
                  </View>
                  
              
              </View>



              <View style={styles.select}>
                  <View style={{ width: '90%', height: 159, borderRadius: 10,  backgroundColor: 'white' }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 10 }}>
                          <Text style={{ fontFamily: fonts.regular, fontSize: 20, color: 'black' }}>
                              Test Pte Ltd
                          </Text>
                          {/* <AntDesign name="checkcircleo" size={24} color="#00b900" /> */}

                      </View>
                      <View style={{ paddingHorizontal: 20, width: '100%' }}>
                          <Text style={{ fontSize: 14, fontFamily: fonts.regular, }}>
                              201023709H
                          </Text>
                      </View>

                      <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 8 }}>
                          <Text style={{ color: '#2662b0', fontFamily: fonts.regular, fontSize: 20 }}>
                              Role: Mian Nominee
                          </Text>
                      </View>
                      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                          <TouchableOpacity style={{ width: '90%', height: 45, justifyContent: 'center', alignItems: "center", backgroundColor: '#2662b0', borderRadius: 10 }}>
                              <Text style={{ color: 'white' }}>
                                  Select
                              </Text>

                          </TouchableOpacity>
                      </View>

                  </View>


              </View>


              <View style={styles.newCompany}>
                  <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:'100%'}} onPress={()=> navigation.navigate("AddSwitchOne")}>
                  <View style={{ width: '90%', borderWidth: 1, borderStyle: 'dashed', borderRadius: 10, height: 91, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal:26  }}>
                      
                      <Text style={{fontSize:16, fontFamily:fonts.regular, color:'#2662b0'}}>
                          Create a New Company{'\n'}
                          as a Main Nominee
                      </Text>

                      <Feather name="plus" size={48} color="#2662b0" />
                      
                      
                      </View>
                  </TouchableOpacity>
                  
                  
              </View>
              
              
          </ScrollView>
     
    </View>
  )
}
const styles = StyleSheet.create({
    newCompany: {
        width: '100%', 
        justifyContent: 'center', alignItems: 'center', 
        marginTop:30

    },
    select: {
        width: '100%',
        justifyContent:'center', alignItems:'center', marginTop:20

    },
    mainheader: {
        width: '100%', 
        marginTop: 20,
        paddingHorizontal:20

    },
    mainView: {
        flex:1
    }
})

export default () => {
    return (
        <NativeBaseProvider>
            <AddSwitchCompany />
        </NativeBaseProvider>
    )
}