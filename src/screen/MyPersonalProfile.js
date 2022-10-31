import { View, Text, StyleSheet, Image, TouchableOpacity, PermissionsAndroid } from 'react-native'
import React from 'react'
import uploadpic from '../theme/Images/uploadpic.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import fonts from '../theme/fonts'
import { ScrollView } from 'react-native-gesture-handler'
import signature from '../theme/Images/signature.png'
import { useNavigation } from '@react-navigation/native'
import PersonalAccountHeader from '../component/PersonalAccountHeader'

const MyPersonalProfile = () => {

    const navigation = useNavigation()
  return (
      <View style={styles.mainView}>
          
          <PersonalAccountHeader />
          <ScrollView>
          
          <View style={styles.profilepicView}>
              <Text style={{fontFamily:fonts.semibold, fontSize:26, color:'#2662b0'}}>MY PROFILE</Text>
          </View>
          <View style={styles.uploadPicView }>
              <Image style={{ height: 150, width: 150 , borderRadius:100}} source={uploadpic} />
              
                  <View style={{ justifyContent: 'center', alignItems: 'center', width: 38, heighth: 38 }} >
                      <View style={{ position: 'relative', bottom: 40, left: 60, height:38, width:38, backgroundColor:'#2662b0' , justifyContent:'center' , alignItems:'center', borderRadius:45}}>
                          <Ionicons name="cloud-upload-outline" size={30} color="white" />
                      </View>
              </View>
          </View>
              <View style={styles.detailView}>
                  
                  <View>
              
              <Text style={styles.blackText}>
                  User ID
              </Text>

              <Text style={styles.blueText}>
                  00001
                      </Text>
                  </View>
            <View style={{marginTop:20}}>
              <Text style={styles.blackText}>
                  First Name
              </Text>
              <Text style={styles.blueText}>
                  John
                      </Text>
                  </View>

                  <View style={{ marginTop: 20 }}>

              <Text style={styles.blackText}>
                  Last Name
              </Text>
              <Text style={styles.blueText}>
                  Deo
                      </Text>
                  </View>
                      
                
                  <View style={{marginTop:20}}>
              <Text style={styles.blackText}>
                  Gender
              </Text>
              <Text style={styles.blueText}>
                  Male
                      </Text>
                  </View>

                  <View style={{marginTop:20}}>
              <Text style={styles.blackText}>
                  Country
              </Text>
              <Text style={styles.blueText}>
                  Sigapore
                      </Text>
                  </View>

                  <View style={{marginTop:20}}>
              <Text style={styles.blackText}>
                  Mobile No
              </Text>
              <Text style={styles.blueText}>
                  
                  +923120993243
                      </Text>
                  </View>

                  <View style={{marginTop:20}}>
              <Text style={styles.blackText}>
                  Home No
                  </Text>
                  
                  <Text style={styles.blueText}>
                      +92468111799
                      </Text>
                  </View>

                <View style={{marginTop:20}}>
                  <Text style={styles.blackText}>
                      Email
                  </Text>

                  <Text style={styles.blueText}>
                      mustafazeb381@gmail.com
                      </Text>
                  </View>

                  <View style={{marginTop:20}}>
              <Text style={styles.blackText}>
                  Date of birth
              </Text>
              <Text style={styles.blueText}>
                  07/07/1999
                      </Text>
                  </View>


                  <View style={{marginTop:20}}>
              <Text style={styles.blackText}>
                  Password
              </Text>
              <Text style={styles.blueText}>
                  ********
                      </Text>
                  </View>


                  <View style={{marginTop:20}}>
              <Text style={styles.blackText}>
                  Monthly Salary
              </Text>
              <Text style={styles.blueText}>
                  3000$
                      </Text>
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

<View style={{width:'100%', justifyContent:'center', alignItems:"center", marginTop:20}}>

              <TouchableOpacity onPress={()=> navigation.navigate("PersonalProfileEdit")} style={styles.editbutton}>
                  <Text style={{color:'white', fontFamily:fonts.semibold, fontSize:14}}>
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
        paddingVertical:10 ,

    },

    blackText:{
        fontFamily: fonts.semibold,
        fontSize: 14,
        color: 'black',
        paddingVertical:10,
},
    detailView: {
        paddingHorizontal: 20,
        marginTop: 20, marginBottom: 200

    }, 
    uploadPicView: {
        justifyContent: 'center',
        alignItems:'center', marginTop:20

    },
    profilepicView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop:20
        // height:100
        
    },
    mainView: {
        width: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1
    }
})

export default MyPersonalProfile