import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React from 'react'
import uploadpic from '../theme/Images/uploadpic.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import fonts from '../theme/fonts'
import signature from '../theme/Images/signature.png'
import { NativeBaseProvider, Box, Input, Icon } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import PersonalAccountHeader from '../component/PersonalAccountHeader'

const PersonalProfileEdit = () => {

  const [show, setShow] = React.useState(false);
  return (
    <View style={styles.mainView}>

      <PersonalAccountHeader />
      <ScrollView>

        <View style={styles.profilepicView}>
          <Text style={{ fontFamily: fonts.semibold, fontSize: 26, color: '#2662b0' }}>MY PROFILE</Text>
        </View>
        <View style={styles.uploadPicView}>
          <Image style={{ height: 150, width: 150 , borderRadius:100}} source={uploadpic} />

          <View style={{ justifyContent: 'center', alignItems: 'center', width: 38, heighth: 38 }} >
            <View style={{ position: 'relative', bottom: 40, left: 60, height: 38, width: 38, backgroundColor: '#2662b0', justifyContent: 'center', alignItems: 'center', borderRadius: 45 }}>
              <Ionicons name="cloud-upload-outline" size={30} color="white" />
            </View>
          </View>
        </View>
        <View style={styles.detailView}>

          <View >

          <Text style={styles.blueText}>
            User ID
          </Text>

          <Box alignItems="center">
            <Input mx="3" bg="white" placeholderTextColor="black"  placeholder="UserID" w="100%" />
            </Box>
          </View>

          
    <View style={{marginTop:20}}>
          <Text style={styles.blueText}>
            First Name
          </Text>
          <Box alignItems="center">
            <Input mx="3" bg="white" placeholderTextColor="black" placeholder="First Name" w="100%" />
            </Box>
          </View>
            
    
          <View style={{marginTop:20}}>
          <Text style={styles.blueText}>
            Last Name
          </Text>
          <Box alignItems="center">
            <Input mx="3" bg="white" placeholderTextColor="black" placeholder="Last Name" w="100%" />
            </Box>
          </View>
          
          <View style={{marginTop:20}}>
          <Text style={styles.blueText}>
            Gender
          </Text>
          <Box alignItems="center">
            <Input mx="3" bg="white" placeholderTextColor="black" placeholder="Gender" w="100%" />
            </Box>
          </View>
          

          <View style={{marginTop:20}}>
          <Text style={styles.blueText}>
            Country
          </Text>
          <Box alignItems="center">
            <Input mx="3" bg="white" placeholderTextColor="black" placeholder="Country" w="100%" />
            </Box>
          </View>
          

          <View style={{marginTop:20}}>
          <Text style={styles.blueText}>
            Mobile No
          </Text>
          <Box alignItems="center">
            <Input mx="3" bg="white" placeholderTextColor="black" placeholder="Mobile No" w="100%" />
            </Box>
          </View>
          

          <View style={{marginTop:20}}>
          <Text style={styles.blueText}>
            Home No
          </Text>
          <Box alignItems="center">
            <Input mx="3" bg="white" placeholderTextColor="black" placeholder="Home No" w="100%" />
            </Box>
          </View>

         

          <View style={{marginTop:20}}>
          <Text style={styles.blueText}>
            Email
          </Text>
          <Box alignItems="center">
            <Input mx="3" bg="white" placeholderTextColor="black" placeholder="Email" w="100%" />
            </Box>
          </View>

         <View style={{marginTop:20}}>
          <Text style={styles.blueText}>
            Date of birth
          </Text>
          <Box alignItems="center">
            <Input mx="3" bg="white" placeholderTextColor="black" placeholder="Date of Birth" w="100%" />
            </Box>
          </View>


          <View style={{marginTop:20}}>
          <Text style={styles.blueText}>
            Password
          </Text>
          <Input bg="white" w="100%" type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
          </Pressable>} placeholder="Password" placeholderTextColor="black" />
          </View>

          <View style={{marginTop:20}}>
          <Text style={styles.blueText}>
            Monthly Salary
          </Text>

          <Box alignItems="center">
            <Input mx="3" bg="white"  placeholderTextColor="black" placeholder="Monthly Salary" w="100%" />
            </Box>
          </View>
          
          <View style={{marginTop:20}}>
          <Text style={styles.blueText}>
            signature
          </Text>

          <View style={styles.signatureView}>
            <View style={styles.signatureinner}>
              <Image source={signature} />
            </View>
            </View>
          </View>

          <View style={{ width: '100%', justifyContent: 'center', alignItems: "center", marginTop: 20 }}>

            <TouchableOpacity style={styles.editbutton}>
              <Text style={{ color: 'white', fontFamily: fonts.semibold, fontSize: 14 }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor:'white'


  },
  editbutton: {
    width: '100%',
    backgroundColor: '#2662b0',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },

  blueText: {
    fontFamily: fonts.semibold,
    fontSize: 14,
    color: '#2662b0',
    paddingVertical: 10,

  },

  blackText: {
    fontFamily: fonts.semibold,
    fontSize: 14,
    color: 'black',
    paddingVertical: 10,
  },
  detailView: {
    paddingHorizontal: 20,
    marginTop: 20, marginBottom: 200

  },
  uploadPicView: {
    justifyContent: 'center',
    alignItems: 'center', marginTop: 20

  },
  profilepicView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // height:100
    marginTop:20

  },
  mainView: {
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1
  }
})

export default () => {
  return (
    <NativeBaseProvider>
      <PersonalProfileEdit />
    </NativeBaseProvider>
  )
}