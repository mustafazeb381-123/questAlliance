import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import PersonalAccountHeader from '../component/PersonalAccountHeader'
import { NativeBaseProvider } from 'native-base'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import fonts from '../theme/fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
import flask from '../theme/Images/flask.png'
import contactus from '../theme/Images/contactus.png'
import insurance from '../theme/Images/insurance.png'
import logout from '../theme/Images/logout.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'


const More = () => {

  const navigation = useNavigation()
  return (
    <View style={styles.mainView}>

      <PersonalAccountHeader />

      <View style={styles.listView}>
        <TouchableOpacity onPress={()=> navigation.navigate("MyPersonalProfile")} style={{width:'100%'}}>

        <View style={{ width: '100%', flexDirection: 'row' , paddingHorizontal:20,marginTop:20, alignItems:'center'}}>
          
          <FontAwesome name="user-circle-o" color="white" size={14} />

          <Text style={{color:'white', fontFamily:fonts.semibold, fontSize:15, paddingStart:20}}>My Profile</Text>

          </View>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("LoanAproval")} style={{width:'100%'}}>
        <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center' }}>

          <AntDesign name="filetext1" color="white" size={14} />

          <Text style={{ color: 'white', fontFamily: fonts.semibold, fontSize: 15, paddingStart: 20 }}>Loan Approval</Text>

          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate("MyLoan")} style={{ width: '100%' }}>
        <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center' }}>

         <Image source={flask} style={{hieght:14, width:14}} />

          <Text style={{ color: 'white', fontFamily: fonts.semibold, fontSize: 15, paddingStart: 20 }}>My Loans</Text>

          </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={()=> {navigation.navigate("ContactUs")}}>
        <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center' }}>

          <Image source={contactus} style={{height:14, width:14}} />

          <Text style={{ color: 'white', fontFamily: fonts.semibold, fontSize: 15, paddingStart: 20 }}>Contact Us </Text>

          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {navigation.navigate("CorporateAccountLogin")}}>
          <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center' }}>

            {/* <Image source={contactus} style={{ height: 14, width: 14 }} /> */}

            <AntDesign name="setting" size={14}  color="white" />

            <Text style={{ color: 'white', fontFamily: fonts.semibold, fontSize: 15, paddingStart: 20 }}>Setting</Text>

          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=> {navigation.navigate("TermsAndCondition")}}>

        
        <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center' }}>

          <AntDesign name="filetext1" color="white" size={14}  />

          <Text style={{ color: 'white', fontFamily: fonts.semibold, fontSize: 15, paddingStart: 20 }}>Terms and Condition</Text>

          </View>
        </TouchableOpacity>



        <TouchableOpacity onPress={()=> {navigation.navigate("PrivacyPolicy")}}>
        <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center' }}>

          <Image source={insurance} />

          <Text style={{ color: 'white', fontFamily: fonts.semibold, fontSize: 15, paddingStart: 20 }}>Privacy and Policies</Text>

          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=> {navigation.navigate("Companyprofile")}}>
          
        <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center' }}>

          <Image source={logout} />

          <Text style={{ color: 'white', fontFamily: fonts.semibold, fontSize: 15, paddingStart: 20 }}>Log Out</Text>

          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("SetupCompanyProfile") }}>

          <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center' }}>

            <Image source={logout} />

            <Text style={{ color: 'white', fontFamily: fonts.semibold, fontSize: 15, paddingStart: 20 }}>SetUp Company profile</Text>

          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("AddSwitchCompany") }}>

          <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center' }}>

            <Image source={logout} />

            <Text style={{ color: 'white', fontFamily: fonts.semibold, fontSize: 15, paddingStart: 20 }}>Add/Switch Company</Text>

          </View>
        </TouchableOpacity>



        

      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  listView: {
    width: '100%', 
    backgroundColor:'#243474', flex:1
  },
  mainView: {
    width: '100%',
    flex:1
  
  }
})

export default () => {
  return(
  <NativeBaseProvider>
    <More />
    </NativeBaseProvider>
  )
}