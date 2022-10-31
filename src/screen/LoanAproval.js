import { View, Text, StyleSheet, TouchableOpacity, Image,  } from 'react-native'
import React from 'react'
import QuestAllianceLo from '../theme/Images/QuestAllianceLo.png'
import personalpic from  '../theme/Images/personalpic.png'
import fonts from '../theme/fonts'
import { NativeBaseProvider, VStack, Select, CheckIcon, ScrollView } from 'native-base'
import Navigation from '../Navigation'
import { useNavigation } from '@react-navigation/native'
import PersonalAccountHeader from '../component/PersonalAccountHeader'


const LoanAproval = () => {

    const navigation = useNavigation()
    let [service, setService] = React.useState("");

    const [tabName, setTabName] = React.useState("tab-1");
  return (
      <View style={styles.mainView}>
          
          <PersonalAccountHeader />
          
          {/* <View style={styles.header}>
              <Image source={QuestAllianceLo} />
              <View style={{flexDirection:'row', justifyContent:'space-between', width:'50%', alignItems:'center'}}>
              <Text style={{fontSize:15, fontFamily:fonts.semibold, color:"#2662b0"}}>Personal Account</Text>
                  <Image style={{borderRadius:100, width:40, height:40}} source={personalpic} />
              </View>
          </View> */}
          
          <ScrollView>
              <View style={{width:'94%', justifyContent:'center', alignItems:'center',marginBottom:120}}>
          <View style={styles.mianHeading}>
              <Text style={{fontFamily:fonts.bold, fontSize:26, color:'#2662b0'}}>
                  Loan Approval
              </Text>
          </View>

          <View style={styles.tabView}>
              <View style={{ width: '50%' }}>
                          <TouchableOpacity style={{ width: '100%',  justifyContent:'center', alignItems:'center'}} onPress={() => { setTabName("tab-1") }}>
                              
                              {
                                  tabName == "tab-1" &&
                            
              
                                  <Text style={{ fontFamily: fonts.bold, fontSize: 20, color: '#2662b0', }}>InProcess</Text>
                              }

                              {
                                  tabName == "tab-2" &&


                                  <Text style={{ fontFamily: fonts.bold, fontSize: 20, color: '#707070', }}>InProcess</Text>
                              }

                          </TouchableOpacity>
                          { tabName== "tab-1" &&
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
                          <TouchableOpacity style={{ width: '100%', justifyContent:'center', alignItems:'center' }} onPress={() => setTabName("tab-2")} >
                              
                              { tabName == "tab-2" &&
                                  <Text style={{ fontFamily: fonts.bold, fontSize: 20, color: '#2662b0' }}>Completed</Text>
                              
                              }

                              {tabName == "tab-1" &&
                                  <Text style={{ fontFamily: fonts.bold, fontSize: 20, color: '#707070' }}>Completed</Text>

                              }
                          </TouchableOpacity>
                          
                          {
                              
                              tabName == "tab-1" &&
                          <View style={{width:'100%', backgroundColor:'white', height:10}} >
                              
                          </View>

                          }
                          
                          {
                              tabName == "tab-2" &&
                              <View style={{ width: '100%', backgroundColor: '#2662b0', height: 10 }} >
                                      </View>
                          }
                      </View>
                      
                     
              
          </View>

          <View style={styles.filterView}>
              <Text style={{fontFamily:fonts.regular, fontSize:14, color:'black', }}>Filter by status</Text>
              <VStack w="60%"   alignItems="center" space={4}>
                  <Select borderRadius='10' height="10" shadow={2} selectedValue={service} w="100%" accessibilityLabel="Choose Service" placeholder="All" placeholderTextColor="black" bg="#ffffff" _selectedItem={{
                      bg: "teal.600",
                      endIcon: <CheckIcon size="5" />
                  }} _light={{
                      bg: "coolGray.100",
                      _hover: {
                          bg: "coolGray.200"
                      },
                      _focus: {
                          bg: "coolGray.200:alpha.70"
                      }
                  }} _dark={{
                      bg: "coolGray.800",
                      _hover: {
                          bg: "coolGray.900"
                      },
                      _focus: {
                          bg: "coolGray.900:alpha.70"
                      }
                  }} onValueChange={itemValue => setService(itemValue)}>
                      <Select.Item shadow={2} label="UX Research" value="ux" />
                      <Select.Item shadow={2} label="Web Development" value="web" />
                      <Select.Item shadow={2} label="Cross Platform Development" value="cross" />
                      <Select.Item shadow={2} label="UI Designing" value="ui" />
                      <Select.Item shadow={2} label="Backend Development" value="backend" />
                  </Select>
              </VStack>
          </View>

          {
              tabName == "tab-1" &&
                      <View style={styles.tabOne}>
                              
                            

                              <View style={{ width: '100%', height: 139, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', borderRadius: 10, }}>
                                  
                                  
                                  <View style={{ width: '5%', height: '100%', backgroundColor:'#f0b13c', borderBottomStartRadius:10, borderTopStartRadius:10}}></View>
                                  <View style={{ width: '95%' }}>
                                      <TouchableOpacity onPress={()=> navigation.navigate("ApplicationStatus")}>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal:20, }}>
                              <Text style={styles.text}>
                                  Status
                                  
                              </Text>
                                          <Text style={[styles.text, { color:'#f0b13c'}]}>
                                  Pending
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
                      

                              <View style={{ width: '100%', height: 139, backgroundColor: 'white', marginTop: 20, flexDirection: 'row', alignItems: 'center', borderRadius:10 }}>
                                  
                                  <View style={{ width: '5%', height: '100%', backgroundColor:'red', borderBottomStartRadius:10, borderTopStartRadius:10}}></View>
                                  
                                <View style={{width:'95%'}}>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                          <Text style={styles.text}>
                                  Status

                              </Text>
                                          <Text style={[styles.text, { color:'#ff0000'}]}>
                                  Request Documnets
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
                                  </View>



                      </View>


                      {/* third View*/}



                              <View style={{ width: '100%', height: 139, backgroundColor: 'white', marginTop: 20, flexDirection:'row', alignItems:'center' , borderRadius:10}}>
                                  
                                  <View style={{ width: '5%', height: '100%', backgroundColor: 'red' , borderBottomStartRadius:10, borderTopStartRadius:10}}></View>

                                  <View style={{ width: '95%' }}>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                          <Text style={styles.text}>
                                  Status

                              </Text>
                                          <Text style={[styles.text, { color:'#ff0000'}]}>
                                              Offer Proposed
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
                                      </View>



                              </View>
                              
                              {/*fourth one*/}



                              <View style={{ width: '100%', height: 139, backgroundColor: 'white', marginTop: 20, flexDirection: 'row', alignItems: 'center' , borderRadius:10}}>
                                  
                                  <View style={{ width: "5%", height: '100%', backgroundColor:"#f0b13c", borderBottomStartRadius:10, borderTopStartRadius:10}}>
                                      
                                  </View>

                                  <View style={{width:"95%"}}>
                                  

                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                          <Text style={styles.text}>
                                  Status

                              </Text>
                                          <Text style={[styles.text, { color:'#f0b13c'}]}>
                                              Under Review
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

                                  </View>

                      </View>
            

              </View>
                  }
                  
                  {
                      
                      tabName == "tab-2" &&
                      <View style={styles.tabOne}>



                          <View style={{ width: '100%', height: 139, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', borderRadius: 10, }}>


                              <View style={{ width: '5%', height: '100%', backgroundColor: '#f0b13c', borderBottomStartRadius: 10, borderTopStartRadius: 10 }}></View>
                              <View style={{ width: '95%' }}>
                                  <TouchableOpacity onPress={() => navigation.navigate("ApplicationStatus")}>
                                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, }}>
                                          <Text style={styles.text}>
                                              Status

                                          </Text>
                                          <Text style={[styles.text, { color: '#f0b13c' }]}>
                                              Approved
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


                          <View style={{ width: '100%', height: 139, backgroundColor: 'white', marginTop: 20, flexDirection: 'row', alignItems: 'center', borderRadius: 10 }}>

                              <View style={{ width: '5%', height: '100%', backgroundColor: 'red', borderBottomStartRadius: 10, borderTopStartRadius: 10 }}></View>

                              <View style={{ width: '95%' }}>
                                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                      <Text style={styles.text}>
                                          Status

                                      </Text>
                                      <Text style={[styles.text, { color: '#ff0000' }]}>
                                          Rejected
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
                              </View>



                              </View>
                              </View>
                  }
              </View>
          </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
    tabTwo: {
        width: '100%', justifyContent: 'center',
        alignItems:'center'

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
        alignItems:'center'

    },
    filterView: {
        width: '100%', 
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        paddingHorizontal:20, marginTop:20
    },

    tabView: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row', alignItems: 'center',
        marginTop:20

    },
    mianHeading: {
        width: '100%',
        marginTop:20, paddingHorizontal:20

    },
    mainView: {
        width: '100%',
        alignItems:'center',
         flex:1,
    },
    header: {
        backgroundColor:"white",
        flexDirection:'row',
        height: 70, 
        width: '100%',
        paddingHorizontal:20,
        justifyContent:'space-between', alignItems:'center',
    }
})

export default () => {
    return (
        <NativeBaseProvider>
            <LoanAproval />
        </NativeBaseProvider>
    )
}