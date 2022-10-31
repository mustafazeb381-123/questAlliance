import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from 'react-native'
import React, {useState} from 'react'
import { Divider, NativeBaseProvider, Modal, FormControl, Input, Label, Button  } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import personalpic from '../theme/Images/personalpic.png'
import fonts from '../theme/fonts'
import ApplicationStatusHeader from '../component/ApplicationStatusHeader'

import signature from '../theme/Images/signature.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import AntDesign from 'react-native-vector-icons/AntDesign'
import v1 from '../theme/Images/v1.png'
import v2 from '../theme/Images/v2.png'
import cpf from '../theme/Images/cpf.png'
import payslip from '../theme/Images/payslip.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Path107 from '../theme/Images/Path107.png'
import DBS from '../theme/Images/DBS.png'
import uob from '../theme/Images/uob.png'
import ocbc from '../theme/Images/ocbc.png'

const ApplicationStatus = () => {

    const [tabName, setTabName] = React.useState("")
    const [placement, setPlacement] = useState(undefined);
    const [open, setOpen] = useState(false);



    const openModal = placement => {
        setOpen(true);
        setPlacement(placement);
    };
  return (
      <View style={styles.mainView}>
          <ApplicationStatusHeader />
          <ScrollView>

          <View style={styles.topText}>
              <Text style={{color:'#2662b0', fontFamily:fonts.bold, fontSize:26}}>PL029304</Text>

                  <Text style={{ fontFamily: fonts.regular, fontSize: 14, color:'#f0b13c'}}>Pending</Text>
              </View>

              <View style={styles.listView}>
                  
                  <View style={styles.firstlist}>
                      <TouchableOpacity onPress={()=> setTabName("tab-1")} style={{justifyContent:'center', alignItems:"center"}}>

                      <View style={{width:'100%', flexDirection:'row', paddingHorizontal:20 , justifyContent:"center", alignItems:'center' }}>
                      <View style={{width:"80%",  }}>
                              <Text style={{ color: "white", fontFamily:fonts.regular, fontSize:16 }}>Main Applicant - {'\n'}
                                  Joe Doe's Details</Text>
                      </View>
                      <View style={{width:'20%', flexDirection:"row" , justifyContent:'flex-end', }}>
                          <AntDesign name="caretright" size={20} color="white" />
                          </View>
                          </View>

                      </TouchableOpacity>
                  </View>


                  {
                      tabName == "tab-1" && 
                      <><View style={{
                          width: '100%', paddingHorizontal: 20,
                          paddingVertical: 20, backgroundColor: 'white'
                      }}>
                          <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 18 }}>Personal Particulars</Text>
                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Saluatation</Text>
                              <Text style={styles.detailText}>Mr</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Full Name</Text>
                              <Text style={styles.detailText}>John Deo</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Date of birth</Text>
                              <Text style={styles.detailText}>12/09/1999</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> NRIC/Passport No.</Text>
                              <Text style={styles.detailText}>S1234567Z</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Nationality/Citizenships</Text>
                              <Text style={styles.detailText}>Singaporean</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Marital Status:</Text>
                              <Text style={styles.detailText}>Single</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Residential Address </Text>
                              <Text style={styles.detailText}>123 Marsiling Road{'\n'}
                                  #12-34 S654460</Text>
                          </View>


                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Mailing Address</Text>
                              <Text style={styles.detailText}>123 Marsiling Road{'\n'}
                                  #12-34 S654460</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Residential Status:</Text>
                              <Text style={styles.detailText}>Self-owned & fully paid</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Mobile No:</Text>
                              <Text style={styles.detailText}>9123 4567</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Home No:</Text>
                              <Text style={styles.detailText}>-</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Office No:</Text>
                              <Text style={styles.detailText}>-</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Email address:</Text>
                              <Text style={styles.detailText}>johndoe@gmail.com</Text>
                          </View>

                      </View>
                          <Divider />

                          {/*Employment*/}
                          <View style={{
                          width: '100%', paddingHorizontal: 20,
                          paddingVertical: 20, backgroundColor: 'white'
                      }}>
                              <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 18 }}>Employment</Text>
                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Employment Status:</Text>
                                  <Text style={styles.detailText}>Employed, Full Time</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Name of Company:</Text>
                                  <Text style={styles.detailText}>Test Company Pte Ltd</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Job title / Occupation:</Text>
                                  <Text style={styles.detailText}>Developer</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Office postal code:</Text>
                                  <Text style={styles.detailText}>1 North Bridge Road{'\n'}
                                      S123456</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Monthly Fixed Income (S$):</Text>
                                  <Text style={styles.detailText}>60000</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Other Monthly Income (S$):</Text>
                                  <Text style={styles.detailText}>-</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Source of Other Income (S$):</Text>
                                  <Text style={styles.detailText}>-</Text>
                              </View>


                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Previous Occupation:</Text>
                                  <Text style={styles.detailText}>Employed, Full Time</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>Previous Company{'\n'}
                                      (if current is 1 year)</Text>
                                  <Text style={styles.detailText}>-</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Length of service:</Text>
                                  <Text style={styles.detailText}>1 year 2 months</Text>
                              </View>

                          </View>


                          {/*property information*/}

                      <Divider />

                          <View style={{
                              width: '100%', paddingHorizontal: 20,
                              paddingVertical: 20, backgroundColor: 'white'
                          }}>
                              <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 18 }}>Property information</Text>
                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Approval In Principle?</Text>
                                  <Text style={styles.detailText}>Yes</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Address of Property{'\n'}
                                      to be Financed:</Text>
                                  <Text style={styles.detailText}>1 North Bridge Road{'\n'}
                                      S123456</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>Usage of Property:</Text>
                                  <Text style={styles.detailText}>Owner's Occupation</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Main Applicant:</Text>
                                  <Text style={styles.detailText}>Property Owner{'\n'}
                                      & Borrower</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Type of Property:</Text>
                                  <Text style={styles.detailText}>Residential</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Type of{'\n'}
                                      Residential Property:</Text>
                                  <Text style={styles.detailText}>Landed,{'\n'}
                                      Bungalow,  3 Stories</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Property Size:</Text>
                                  <Text style={styles.detailText}></Text>
                              </View>


                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Built in Area:</Text>
                                  <Text style={styles.detailText}>123 sq ft/sq m</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>Land Area:</Text>
                                  <Text style={styles.detailText}>123 sq ft/sq m</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Property/Land Status:</Text>
                                  <Text style={styles.detailText}>Completed, estimate{'\n'}
                                      age is 5 years</Text>
                              </View>

                          </View>
                      
                      
                          

                          {/* Source of fund*/}
                      
                          <Divider />
                          <View style={{
                              width: '100%', paddingHorizontal: 20,
                              paddingVertical: 20, backgroundColor: 'white'
                          }}>
                              <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 18 }}>Source of Funds Downpayment </Text>
                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Source of{'\n'}
                                      Funds Downpayment: </Text>
                                  <Text style={styles.detailText}>Directorship Fees{'\n'}
                                      /Dividends  </Text>
                              </View>

                          

                          </View>

                          {/*financial request*/}


                          <Divider />
                          <View style={{
                              width: '100%', paddingHorizontal: 20,
                              paddingVertical: 20, backgroundColor: 'white'
                          }}>
                              <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 18 }}>Financial Request</Text>
                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>Financial Request:</Text>
                                  <Text style={styles.detailText}>Purchase of Completed/{'\n'}
                                      Uncompleted Properties </Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>Preferred Loan Amount (S$):</Text>
                                  <Text style={styles.detailText}>100,000</Text>
                              </View>

                             

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>Preferred Loan Period:</Text>
                                  <Text style={styles.detailText}>3 years 6 months</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>Do you want to use CPF{'\n'}
                                      for Monthly Installment?:</Text>
                                  <Text style={styles.detailText}>Yes</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>CPF for Stamp/Legal Fees (S$):</Text>
                                  <Text style={styles.detailText}>1000</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>CPF Initial Lumpsum{'\n'}
                                      Withdrawal (S$):</Text>
                                  <Text style={styles.detailText}>1000</Text>
                              </View>



                          </View>

                          <Divider />
                          <View style={{
                              width: '100%', paddingHorizontal: 20,
                              paddingVertical: 20, backgroundColor: 'white'
                          }}>
                              <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 18 }}>Supporting Documents</Text>
                              <View style={{ width: '100%',  alignItems: 'center', }}>
                                  

                                  <View style={{ width: '100%', justifyContent: 'center', alignItems: "center" }}>
                                      <View style={{
                                          width: '91%', height: 138, borderWidth: 1, borderColor: '#2662b0', borderStyle: 'dashed', borderRadius: 5, marginTop
                                              : 20, justifyContent: 'center', alignItems: 'center'
                                      }}>

                                          <Ionicons name="cloud-upload-outline" size={40} color="#2662b0" />
                                          <Text>Drag & drop to upload</Text>

                                      </View>
                                  </View>


                                  

                                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width:'100%', padding:20  }}>
                                              <Text>NRICFront.jpeg</Text>
                                                  <Image source={v1} />
                                      </View>
                                      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                                              <Text>NRICBack.jpeg</Text>
                                                  <Image source={v2} />
                                      </View>
                                      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                                              <Text>Latest12monthsCPFCH.jpeg</Text>
                                                  <Image source={cpf} />
                                      </View>
                                      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                                              <Text>Latest3monthsPayslip.jpeg</Text>
                                                  <Image source={payslip} />
                                      </View>
                                    </View>        
                          </View>
                          

                          {/*signature*/}

                          <Divider />
                          <View style={{
                              width: '100%', paddingHorizontal: 20,
                              paddingVertical: 20, backgroundColor: 'white'
                          }}>
                              <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 18 }}>Signature</Text>

                              <View style={styles.signatureView}>
                                  <View style={styles.signatureinner}>
                                      <Image source={signature} />
                                  </View>
                              </View>
                              </View>
                        

                          
                      
                      
                      
                      </>

                      

                      
                  }

                



                  <View style={styles.firstlist}>
                      <TouchableOpacity onPress={() => setTabName("tab-2")} style={{ justifyContent: 'center', alignItems: "center" }}>
                      <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20, justifyContent: "center", alignItems: 'center' }}>
                          <View style={{ width: "80%", }}>
                              <Text style={{ color: "white", fontFamily: fonts.regular, fontSize: 16 }}>Joint Applicant - {'\n'}
                                  Joe Doe's Details</Text>
                          </View>
                          <View style={{ width: '20%', flexDirection: "row", justifyContent: 'flex-end', }}>
                              <AntDesign name="caretright" size={20} color="white" />
                          </View>
                          </View>
                          
                          </TouchableOpacity>
                  </View>

                  {
                      tabName == "tab-2" &&
                      <><View style={{
                          width: '100%', paddingHorizontal: 20,
                          paddingVertical: 20, backgroundColor: 'white'
                      }}>
                          <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 18 }}>Personal Particulars</Text>
                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Saluatation</Text>
                              <Text style={styles.detailText}>Mr</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Full Name</Text>
                              <Text style={styles.detailText}>John Deo</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Date of birth</Text>
                              <Text style={styles.detailText}>12/09/1999</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> NRIC/Passport No.</Text>
                              <Text style={styles.detailText}>S1234567Z</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Nationality/Citizenships</Text>
                              <Text style={styles.detailText}>Singaporean</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Marital Status:</Text>
                              <Text style={styles.detailText}>Single</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Residential Address </Text>
                              <Text style={styles.detailText}>123 Marsiling Road{'\n'}
                                  #12-34 S654460</Text>
                          </View>


                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Mailing Address</Text>
                              <Text style={styles.detailText}>123 Marsiling Road{'\n'}
                                  #12-34 S654460</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Residential Status:</Text>
                              <Text style={styles.detailText}>Self-owned & fully paid</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Mobile No:</Text>
                              <Text style={styles.detailText}>9123 4567</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Home No:</Text>
                              <Text style={styles.detailText}>-</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Office No:</Text>
                              <Text style={styles.detailText}>-</Text>
                          </View>

                          <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={styles.titleText}> Email address:</Text>
                              <Text style={styles.detailText}>johndoe@gmail.com</Text>
                          </View>

                      </View>
                          <Divider />

                          {/*Employment*/}
                          <View style={{
                              width: '100%', paddingHorizontal: 20,
                              paddingVertical: 20, backgroundColor: 'white'
                          }}>
                              <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 18 }}>Employment</Text>
                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Employment Status:</Text>
                                  <Text style={styles.detailText}>Employed, Full Time</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Name of Company:</Text>
                                  <Text style={styles.detailText}>Test Company Pte Ltd</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Job title / Occupation:</Text>
                                  <Text style={styles.detailText}>Developer</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Office postal code:</Text>
                                  <Text style={styles.detailText}>1 North Bridge Road{'\n'}
                                      S123456</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Monthly Fixed Income (S$):</Text>
                                  <Text style={styles.detailText}>60000</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Other Monthly Income (S$):</Text>
                                  <Text style={styles.detailText}>-</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Source of Other Income (S$):</Text>
                                  <Text style={styles.detailText}>-</Text>
                              </View>


                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Previous Occupation:</Text>
                                  <Text style={styles.detailText}>Employed, Full Time</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>Previous Company{'\n'}
                                      (if current is 1 year)</Text>
                                  <Text style={styles.detailText}>-</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Length of service:</Text>
                                  <Text style={styles.detailText}>1 year 2 months</Text>
                              </View>

                          </View>


                          {/*property information*/}

                          <Divider />

                          <View style={{
                              width: '100%', paddingHorizontal: 20,
                              paddingVertical: 20, backgroundColor: 'white'
                          }}>
                              <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 18 }}>Property information</Text>
                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Approval In Principle?</Text>
                                  <Text style={styles.detailText}>Yes</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Address of Property{'\n'}
                                      to be Financed:</Text>
                                  <Text style={styles.detailText}>1 North Bridge Road{'\n'}
                                      S123456</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>Usage of Property:</Text>
                                  <Text style={styles.detailText}>Owner's Occupation</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Main Applicant:</Text>
                                  <Text style={styles.detailText}>Property Owner{'\n'}
                                      & Borrower</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Type of Property:</Text>
                                  <Text style={styles.detailText}>Residential</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Type of{'\n'}
                                      Residential Property:</Text>
                                  <Text style={styles.detailText}>Landed,{'\n'}
                                      Bungalow,  3 Stories</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Property Size:</Text>
                                  <Text style={styles.detailText}></Text>
                              </View>


                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Built in Area:</Text>
                                  <Text style={styles.detailText}>123 sq ft/sq m</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>Land Area:</Text>
                                  <Text style={styles.detailText}>123 sq ft/sq m</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Property/Land Status:</Text>
                                  <Text style={styles.detailText}>Completed, estimate{'\n'}
                                      age is 5 years</Text>
                              </View>

                          </View>




                          {/* Source of fund*/}

                          <Divider />
                          <View style={{
                              width: '100%', paddingHorizontal: 20,
                              paddingVertical: 20, backgroundColor: 'white'
                          }}>
                              <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 18 }}>Source of Funds Downpayment </Text>
                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}> Source of{'\n'}
                                      Funds Downpayment: </Text>
                                  <Text style={styles.detailText}>Directorship Fees{'\n'}
                                      /Dividends  </Text>
                              </View>



                          </View>

                          {/*financial request*/}


                          <Divider />
                          <View style={{
                              width: '100%', paddingHorizontal: 20,
                              paddingVertical: 20, backgroundColor: 'white'
                          }}>
                              <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 18 }}>Financial Request</Text>
                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>Financial Request:</Text>
                                  <Text style={styles.detailText}>Purchase of Completed/{'\n'}
                                      Uncompleted Properties </Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>Preferred Loan Amount (S$):</Text>
                                  <Text style={styles.detailText}>100,000</Text>
                              </View>



                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>Preferred Loan Period:</Text>
                                  <Text style={styles.detailText}>3 years 6 months</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>Do you want to use CPF{'\n'}
                                      for Monthly Installment?:</Text>
                                  <Text style={styles.detailText}>Yes</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>CPF for Stamp/Legal Fees (S$):</Text>
                                  <Text style={styles.detailText}>1000</Text>
                              </View>

                              <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                  <Text style={styles.titleText}>CPF Initial Lumpsum{'\n'}
                                      Withdrawal (S$):</Text>
                                  <Text style={styles.detailText}>1000</Text>
                              </View>



                          </View>

                          <Divider />
                          <View style={{
                              width: '100%', paddingHorizontal: 20,
                              paddingVertical: 20, backgroundColor: 'white'
                          }}>
                              <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 18 }}>Supporting Documents</Text>
                              <View style={{ width: '100%', alignItems: 'center', }}>


                                  <View style={{ width: '100%', justifyContent: 'center', alignItems: "center" }}>
                                      <View style={{
                                          width: '91%', height: 138, borderWidth: 1, borderColor: '#2662b0', borderStyle: 'dashed', borderRadius: 5, marginTop
                                              : 20, justifyContent: 'center', alignItems: 'center'
                                      }}>

                                          <Ionicons name="cloud-upload-outline" size={40} color="#2662b0" />
                                          <Text>Drag & drop to upload</Text>

                                      </View>
                                  </View>




                                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: 20 }}>
                                      <Text>NRICFront.jpeg</Text>
                                      <Image source={v1} />
                                  </View>
                                  <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                                      <Text>NRICBack.jpeg</Text>
                                      <Image source={v2} />
                                  </View>
                                  <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                                      <Text>Latest12monthsCPFCH.jpeg</Text>
                                      <Image source={cpf} />
                                  </View>
                                  <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                                      <Text>Latest3monthsPayslip.jpeg</Text>
                                      <Image source={payslip} />
                                  </View>
                              </View>
                          </View>


                          {/*signature*/}

                          <Divider />
                          <View style={{
                              width: '100%', paddingHorizontal: 20,
                              paddingVertical: 20, backgroundColor: 'white'
                          }}>
                              <Text style={{ fontFamily: fonts.bold, color: 'black', fontSize: 18 }}>Signature</Text>

                              <View style={styles.signatureView}>
                                  <View style={styles.signatureinner}>
                                      <Image source={signature} />
                                  </View>
                              </View>
                          </View>






                      </>




                  }


                 


                  

                  <View style={styles.firstlist}>
                      <TouchableOpacity onPress={() => setTabName("tab-3")} style={{ justifyContent: 'center', alignItems: "center" }}>
                      <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20, justifyContent: "center", alignItems: 'center' }}>
                          <View style={{ width: "80%", flexDirection:"row", alignItems:'center' }}>
                              <Text style={{ color: "white", fontFamily: fonts.regular, fontSize: 16,  }}>Loan propasal </Text>
                              <AntDesign name="exclamationcircle" size={20} color="red" />
                          </View>
                          <View style={{ width: '20%', flexDirection: "row", justifyContent: 'flex-end', }}>
                              <AntDesign name="caretright" size={20} color="white" />
                          </View>
                          </View>
                          </TouchableOpacity>
                  </View>

                  {
                      tabName == "tab-3" &&
                    <>
                          <View style={{
                              width: '100%', paddingHorizontal: 20,
                              paddingVertical: 20, backgroundColor: 'white'
                              , marginTop: 20, borderRadius:10
                          }}>
                              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                  
                                  <Image source={Path107} />
                                  <View style={{paddingStart:10}}>
                                      <Image source={DBS} />
                                  </View>
                              </View>

                              <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems:'center' , paddingTop:10}}>
                                  <Text style={{fontFamily:fonts.semibold, fontSize:16, color:'black'}}>Amount Offered</Text>
                                  <Text style={{fontFamily:fonts.regular, color:'black'}}>
                                      $10,000
                                  </Text>
                              </View>


                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop:10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Interest Rate</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      1.1%
                                  </Text>
                              </View>


                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop:10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Interest</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      $1252.93
                                  </Text>
                              </View>

                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' , paddingTop:10}}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Period</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      24 Months
                                  </Text>
                              </View>


                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop:10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Rate Type</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      Fixed
                                  </Text>
                              </View>



                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop:10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Total Repayment{'\n'}
                                      Amount</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      $11,252.93
                                  </Text>
                              </View>

                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Expires In</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      7 Days and 3 Hours
                                  </Text>
                              </View>


                              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height:50 , paddingTop:20}}>
                                  
                                  <TouchableOpacity style={{justifyContent:'center', alignItems:'center', height:50, width:166, borderRadius:10, backgroundColor:'#2662b0'}} >
                                      <Text style={{color:"white"}}>Select</Text>
                                  </TouchableOpacity>
                                  
                              </View>

                              

                          </View>
                          

{/*Uob bank*/}

                          <View style={{
                              width: '100%', paddingHorizontal: 20,
                              paddingVertical: 20, backgroundColor: 'white'
                              , marginTop: 20, borderRadius:10
                          }}>
                              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                  <Image source={uob} />
                                 
                              </View>

                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Amount Offered</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      $10,000
                                  </Text>
                              </View>


                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Interest Rate</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      1.1%
                                  </Text>
                              </View>


                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Interest</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      $1252.93
                                  </Text>
                              </View>

                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Period</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      24 Months
                                  </Text>
                              </View>


                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Rate Type</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      Fixed
                                  </Text>
                              </View>



                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Total Repayment{'\n'}
                                      Amount</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      $11,252.93
                                  </Text>
                              </View>

                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Expires In</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      7 Days and 3 Hours
                                  </Text>
                              </View>


                              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 50, paddingTop: 20 }}>

                                  <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: 166, borderRadius: 10, backgroundColor: '#2662b0' }} >
                                      <Text style={{ color: "white" }}>Select</Text>
                                  </TouchableOpacity>

                              </View>



                          </View>


{/*ocbc bank*/}



                          <View style={{
                              width: '100%', paddingHorizontal: 20,
                              paddingVertical: 20, backgroundColor: 'white'
                              , marginTop: 20, borderRadius:10
                          }}>
                              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                  <Image source={ocbc} />
                                  
                              </View>

                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Amount Offered</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      $10,000
                                  </Text>
                              </View>


                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Interest Rate</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      1.1%
                                  </Text>
                              </View>


                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Interest</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      $1252.93
                                  </Text>
                              </View>

                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Period</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      24 Months
                                  </Text>
                              </View>


                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Rate Type</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      Fixed
                                  </Text>
                              </View>



                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Total Repayment{'\n'}
                                      Amount</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      $11,252.93
                                  </Text>
                              </View>

                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                                  <Text style={{ fontFamily: fonts.semibold, fontSize: 16, color: 'black' }}>Expires In</Text>
                                  <Text style={{ fontFamily: fonts.regular, color: 'black' }}>
                                      7 Days and 3 Hours
                                  </Text>
                              </View>


                              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 50, paddingTop: 20 }}>

                                  <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: 166, borderRadius: 10, backgroundColor: '#2662b0' }} >
                                      <Text style={{ color: "white" }}>Select</Text>
                                  </TouchableOpacity>

                              </View>

                             

                          </View>

                          <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: "center" , marginTop:20, }}>
                              <TouchableOpacity onPress={() => openModal("center")} style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2662b0', borderRadius: 10 }}>
                                  <Text style={{ color: 'white' }}>
                                      confirm
                                  </Text>
                              </TouchableOpacity>
                          </View>


                          <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
                              <Modal.Content justifyContent="center" alignItem="center"  w="80%" {...styles[placement]}>
                                  

                                  
                                  
                                  
                                <View style={{width:'100%', justifyContent:'center', alignItems:'center', marginVertical:20}}>
                                      <AntDesign name="checkcircleo" size={83} color="#00b900" />

                                    <View style={{marginTop:15, justifyContent:'center', alignItems:'center'}}>
                                      <Text style={{ fontFamily: fonts.bold, fontSize: 30, color:'#00b900'}}>
                                          You have confirmed 
                                          
                                      </Text>
                                      <Text style={{ fontFamily: fonts.bold, fontSize: 30, color: '#00b900' }}>the Loan Proposal</Text>
                                      </View>
                                    <View style={{marginTop:20, justifyContent:'center', alignItems:'center'}}>
                                      <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 16 }}>Thank you for your confirmation!
                                      </Text>
                                      <Text style={{fontFamily:fonts.regular, color:'black', fontSize:16}}>
                                          We will credit the loan to your
                                      </Text>
                                      <Text style={{ fontFamily: fonts.regular, color: 'black', fontSize: 16 }}>
                                              bank accounts shortly.</Text>
                                      </View>
                                      
                                    <View style={{marginTop:10, justifyContent:'center', alignItems:'center'}}>
                                          <TouchableOpacity onPress={() => {
                                              setOpen(false)
                                          }}
                                              style={{ height: 50, width: 242, backgroundColor: '#2662b0', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                          <Text style={{color:"white", fontFamily:fonts.regular, fontSize:18}}>Back To Home</Text>
                                          </TouchableOpacity>
                                      </View>
                                  </View>


                                  
                                
                              </Modal.Content>
                          </Modal>


                       
                      
                      </>
                  }



                  
              </View>
              
          </ScrollView>
        
    </View>
  )
}


const styles = StyleSheet.create({

    signaturebuttonView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 45, marginTop: 15,
        paddingEnd: 20
    },
    signatureinner: {

        borderWidth: 1,
        borderRadius: 5,
        height: 240,
        width: '100%',
        justifyContent: "center",
        alignItems: 'center'

    },
    signatureView: {
        marginTop: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',


    },
    detailText: {
        fontSize: 14, fontFamily: fonts.bold, color: 'black',
        paddingTop:10

    },
    titleText: {
        
        fontSize:14, fontFamily:fonts.regular, color:'black', paddingTop:20
        
    },
    firstlist: {
        width: '100%',
        flexDirection:'row', marginTop:20,
       
       
        backgroundColor:'#2662b0',height:65
        

    },
    listView: {
        width: '100%', paddingHorizontal: 20,
        alignItems:'center', justifyContent:'center', marginVertical:20
    },
    topText: {
        width: "100%", paddingHorizontal: 20, marginTop: 20,
        flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'
        

    },
   
    mainView: {
        width:"100%", flex:1
    },
   
    
})
export default () => {
    return(
        <NativeBaseProvider>
            <ApplicationStatus />
        </NativeBaseProvider>
    )
}