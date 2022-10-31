import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import ColorsTheme from '../theme/ColorsTheme';
import SVGICON from '../theme/SVGICON';
import Header from '../component/Header';
import fonts from '../theme/fonts';
import CommonTextInput from '../component/CommonTextInput';
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider, Divider } from 'native-base';
import signature from '../theme/Images/signature.png'
import Ionicons from 'react-native-vector-icons/Ionicons'

const JointApplicationSenarioFour = (props) => {
  const navigation = useNavigation()
  const [name, setname] = useState('');
  const [Birth, setBirth] = useState('');
  const [Address, setAddress] = useState('');
  const [mob, setmob] = useState('');
  const [home, sethome] = useState('');
  const [Office, setOffice] = useState('');
  const [Email, setEmail] = useState('');
  const [Mailing, setMailing] = useState('');
  const [Passport, setPassport] = useState('');

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

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header
        props={props}
        back={true}
        headerTitle={'Mortgage Loan'}
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
            flexDirection: 'row',
          }}
        >
          {lineDraw(ColorsTheme.Primary)}
          {lineDraw(ColorsTheme.Primary)}
          {lineDraw(ColorsTheme.Primary)}
          {lineDraw(ColorsTheme.Primary)}

        </View>

        <View style={{ padding: 16 , marginTop:50}}>
          <Text style={styles.blacktitle}>Summary</Text>

          <Divider my="5" />

        </View>
        <View style={{ width: '100%', paddingHorizontal: 20 }}>
          <Text style={{color: 'black', fontSize: 16, fontFamily: fonts.semibold,}}>Personal Particular :</Text>
          <Text style={{ color: 'black', fontSize: 16, fontFamily: fonts.semibold, paddingTop:20 }}> Main Applicant :</Text>
        </View>

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop:20 }}>
          
          <View style={{ width: "91%",  paddingHorizontal: 20, height: 237, backgroundColor: "#e5e4e4", borderRadius: 5,  paddingTop:20 }}>
            
            <Text style={styles.text}>
              John Doe

            </Text>

            <View style={{paddingTop:20}}>


              <Text style={styles.text}>
              ID type : NRIC

            </Text >
         
              
            
              <Text style={styles.text}>
              
              NRIC no.: S1234567Z
            </Text>
              <Text style={styles.text}>

              Nationality (Country/Region) : Singapore
            </Text>
              <Text style={styles.text}>

              Date of birth : 22/06/1995d
            </Text>
              <Text style={styles.text}>

              Place of birth : Singapore
            </Text>
              <Text style={styles.text}>

              Gender : Male
            </Text>
              <Text style={styles.text}>

              Marital status : Single
            </Text>
              <Text style={styles.text}>

              No. of children : 0
            </Text>
              <Text style={styles.text}>

              Highest qualification : University / Tertiary
            </Text>
              <Text style={styles.text}>

              Residential address: 123 Marsiling Road #12-34
            </Text>
              <Text style={styles.text}>

              Residential address postal code : 654460
            </Text>
              <Text style={styles.text}>

              Country/Region of present address : Singapore  
              </Text>
            </View>
            

          </View>

        </View>




        <View style={{ width: '100%', paddingHorizontal: 20 }}>
          <Text style={{ color: 'black', fontSize: 16, fontFamily: fonts.semibold, }}>Employment</Text>
          <Text style={{ color: 'black', fontSize: 16, fontFamily: fonts.semibold, paddingTop: 20 }}> Main Applicant :</Text>
        </View>

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>

          <View style={{ width: "91%", paddingHorizontal: 20, height: 150, backgroundColor: "#e5e4e4", borderRadius: 5, paddingTop: 20 }}>

            <Text style={styles.text}>
              Employed, Full Time {'\n'}
              Test Company Pte Ltd {'\n'}
              1 North Bridge Road S123456 {'\n'}
              Singapore{'\n'}
              Developer{'\n'}
              Tech{'\n'}
              1 years 2 month{'\n'}
              $60000
              </Text>
            </View>
        </View>



        <View style={{ width: '100%', paddingHorizontal: 20 }}>
          <Text style={{ color: 'black', fontSize: 16, fontFamily: fonts.semibold, paddingTop: 20 }}> Property Information :</Text>
        </View>

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>

          <View style={{ width: "91%", paddingHorizontal: 20, height: 150, backgroundColor: "#e5e4e4", borderRadius: 5, paddingTop: 20 }}>

            <Text style={styles.text}>
              Approval In Principle?: Yes{'\n'}
              1 North Bridge Road{'\n'}
              Usage of Property: Owner Occupation{'\n'}
              Main Applicant: Property Owner & Borrower{'\n'}
              Joint Applicant: Property Owner & Borrower{'\n'}
              Type of Residential Property: Landed, Bungalow, 3 Stories{'\n'}
              Property Size: Built-in Area{'\n'}
            </Text>
          </View>
        </View>



        <View style={{ width: '100%', paddingHorizontal: 20 }}>
          <Text style={{ color: 'black', fontSize: 16, fontFamily: fonts.semibold, paddingTop: 20 }}> Financial Request :</Text>
        </View>

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>

          <View style={{ width: "91%", paddingHorizontal: 20, height: 90, backgroundColor: "#e5e4e4", borderRadius: 5, paddingTop: 20 }}>

            <Text style={styles.text}>
              Benefit Received: {'\n'}
              Yes, the amount/value of item that I/we receive is S$      100{'\n'}
              Item Received: Lucky Draw 
            </Text>
          </View>
        </View>



        <View style={{ width: '100%', paddingHorizontal: 20 }}>

          <Text style={{ color: 'black', fontSize: 16, fontFamily: fonts.semibold, paddingTop: 20 }}> Personal Particular:</Text>
          <Text style={{ color: 'black', fontSize: 16, fontFamily: fonts.semibold, paddingTop: 20 }}> Joint Applicant :</Text>
        </View>

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>

          <View style={{ width: "91%", paddingHorizontal: 20, height: 237, backgroundColor: "#e5e4e4", borderRadius: 5, paddingTop: 20 }}>

           
              <Text style={styles.text}>
                John Doe

              </Text>

              <View style={{ paddingTop: 20 }}>


                <Text style={styles.text}>
                  ID type : NRIC

                </Text >



                <Text style={styles.text}>

                  NRIC no.: S1234567Z
                </Text>
                <Text style={styles.text}>

                  Nationality (Country/Region) : Singapore
                </Text>
                <Text style={styles.text}>

                  Date of birth : 22/06/1995d
                </Text>
                <Text style={styles.text}>

                  Place of birth : Singapore
                </Text>
                <Text style={styles.text}>

                  Gender : Male
                </Text>
                <Text style={styles.text}>

                  Marital status : Single
                </Text>
                <Text style={styles.text}>

                  No. of children : 0
                </Text>
                <Text style={styles.text}>

                  Highest qualification : University / Tertiary
                </Text>
                <Text style={styles.text}>

                  Residential address: 123 Marsiling Road #12-34
                </Text>
                <Text style={styles.text}>

                  Residential address postal code : 654460
                </Text>
                <Text style={styles.text}>

                  Country/Region of present address : Singapore
                </Text>
              </View>
           
          </View>
        </View>



        <View style={{ width: '100%', paddingHorizontal: 20 }}>

          <Text style={{ color: 'black', fontSize: 16, fontFamily: fonts.semibold, paddingTop: 20 }}>Employment  :</Text>
          <Text style={{ color: 'black', fontSize: 16, fontFamily: fonts.semibold, paddingTop: 20 }}>Joint Applicant :</Text>
        </View>

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>

          <View style={{ width: "91%", paddingHorizontal: 20, height: 90, backgroundColor: "#e5e4e4", borderRadius: 5, paddingTop: 20 }}>

            <Text style={styles.text}>
              Employed, Full Time {'\n'}
              Test Company Pte Ltd {'\n'}
              1 North Bridge Road S123456 {'\n'}
              Singapore{'\n'}
              Developer{'\n'}
              Tech{'\n'}
              1 years 2 month{'\n'}
              $60000
            </Text>
          </View>
        </View>


        <View style={{ width: '100%', paddingHorizontal: 20 }}>

          <Text style={{ color: 'black', fontSize: 16, fontFamily: fonts.semibold, paddingTop: 20 }}>Joint Applicant's Confirmation & Declaration  :</Text>
          <Text style={{ color: 'black', fontSize: 16, fontFamily: fonts.semibold, paddingTop: 20 }}>Signature :</Text>
        </View>



        <View style={styles.signatureView}>
          <View style={styles.signatureinner}>
            <Image source={signature} />
          </View>
        </View>


        <View style={{ width: '100%', paddingHorizontal: 20 }}>

          
          <Text style={{ color: 'black', fontSize: 16, fontFamily: fonts.semibold, paddingTop: 20 }}>Supporting Documents Required :</Text>
        </View>

        <View sgtyle={{ width: '100%', justifyContent: "center", }}>
          <Text style={{fontFamily:fonts.bold, fontSize:12, paddingHorizontal:20, paddingTop:20, }}>
            • NRIC Front{'\n'}
            • NRIC Back{'\n'}
            • Last 12 months of CPF Contribution History{'\n'}
            • Latest 3 months Payslip{'\n'}
            • Standard Residential Tenancy Agreement (optional)

          </Text>

        </View>

        <View style={{width:'100%', justifyContent:'center', alignItems:"center"}}>
          <View style={{
            width: '91%', height: 138, borderWidth: 1, borderColor: '#2662b0', borderStyle:'dashed', borderRadius:5, marginTop
            : 20, justifyContent:'center', alignItems:'center'
          }}>
            
            <Ionicons name="cloud-upload-outline" size={40} color="#2662b0" />
            <Text>Drag & drop to upload</Text>
            
          </View>
        </View>



        <View style={styles.signaturebuttonView}>
          <TouchableOpacity style={{
            backgroundColor: '#2662b0', height: 45, width: 160, flexDirection: 'row', justifyContent: 'space-around',
            alignItems: 'center',
            paddingHorizontal: 20,
            borderRadius: 5
          }}>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: fonts.regular }}>
              Save draft
            </Text>
           
          </TouchableOpacity>
        </View>

        <View style={styles.bottomButton}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{
            backgroundColor: '#2662b0', height: 45, width: 150, justifyContent: 'center', alignItems: 'center', borderRadius: 5
          }}>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: fonts.regular }}>
              Back
            </Text>

          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate('JointApplicationSenarioFour')} style={{
            backgroundColor: '#2662b0', height: 45, width: 150, justifyContent: 'center', alignItems: 'center', borderRadius: 5
          }}>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: fonts.regular }}>
             Submit
            </Text>

          </TouchableOpacity>
        </View>





        


          </ScrollView>

          </View>
  )
}

const styles = StyleSheet.create({

  bottomButton: {
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal:20,
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 20

  },
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
    width: '90%',
    justifyContent: "center",
    alignItems: 'center'

  },
  signatureView: {
    marginTop: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',


  },
  text: { fontFamily: fonts.semibold, fontSize: 10, color: '#7a7a7a' },

  blacktitle: {
    color: 'black',
    fontSize: 26,
    fontFamily: fonts.bold,
  },
  

})

export default JointApplicationSenarioFour