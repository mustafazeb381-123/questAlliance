import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { Input, NativeBaseProvider, ScrollView } from 'native-base'
import PersonalAccountHeader from '../component/PersonalAccountHeader';
import contactusBackgroundImage from '../theme/Images/contactusBackgroundImage.png'
import fonts from '../theme/fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Zocial from 'react-native-vector-icons/Zocial'

const ContactUs = () => {
  return (
      <View style={styles.mainView}>
          <PersonalAccountHeader />

          <ScrollView >
          <View style={{width:'100%',}}>
              {/* <ImageBackground style={{height:'auto'}} source={contactusBackgroundImage} /> */}
              <Image style={{ width: '100%', height: 350, backgroundColor:'#C9D8EA' }} source={contactusBackgroundImage} />
              <View style={{ position: 'absolute',  width: '100%', paddingHorizontal:20, marginTop:20 }}>
                  <Text style={{ fontFamily: fonts.bold, fontSize: 26, color: '#2662b0' }}>CONTACT US</Text>
                  
                  <Text style={{fontFamily:fonts.bold, fontSize:20, color:'#2662b0', paddingTop:36 }}>
                      You've any question?
                      
                  </Text>
                  <Text style={{ fontFamily: fonts.bold, fontSize: 20, color: '#2662b0' }}>feel free to contact with us.</Text>
                  
                  <View style={{flexDirection:'row', alignItems:'center', marginTop:34}}>
                      <FontAwesome name="phone" size={36}  color="black" />

                      <View style={{ paddingStart:15}}>
                          <Text style={{fontFamily:fonts.regular, color:'#7a7a7a', fontSize:15}}>
                              Call us for immediate support
                          </Text>
                          <Text style={{fontFamily:fonts.bold, fontSize:22, color:'#2662b0'}}>
                              +65 9123 4567
                          </Text>
                          
                      </View>
                  </View>



                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:30 }}>
                      <Zocial name="email" size={36} color="black" />

                      <View style={{ paddingStart: 15 }}>
                          <Text style={{ fontFamily: fonts.regular, color: '#7a7a7a', fontSize: 15 }}>
                              Send us email for any kind of inquiry
                          </Text>
                          <Text style={{ fontFamily: fonts.bold, fontSize: 22, color: '#2662b0' }}>
                              Questalliance@gmail.com
                          </Text>

                      </View>
                  </View>


              </View>    
          </View>
          

          <View style={{width:'100%'}}>
                  <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 20 }}>
                      
                      <Text style={{paddingVertical:10, fontFamily:fonts.bold, color:'black', fontSize:14}}>Name</Text>
                      <Input backgroundColor="white"   />
                      
                  </View>
                  
                  <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 20 }}>

                      <Text style={{ paddingVertical: 10, fontFamily: fonts.bold, color: 'black', fontSize: 14 }}>Email</Text>
                      <Input backgroundColor="white" />

                  </View>

                


                  <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 20 }}>

                      <Text style={{ paddingVertical: 10, fontFamily: fonts.bold, color: 'black', fontSize: 14 }}>Subject</Text>
                      <Input backgroundColor="white" />

                  </View>


                  <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 20, }}>

                      <Text style={{ paddingVertical: 10, fontFamily: fonts.bold, color: 'black', fontSize: 14 }}>Content</Text>
                      <Input  backgroundColor="white" height="335" width="100%" />

                  </View>
              </View>
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' , marginVertical:30}}>
                  <TouchableOpacity style={{width:180,  height:45, backgroundColor:'#2662b0', justifyContent:'center', alignItems:'center', borderRadius:25 }}>
                      <Text style={{fontFamily:fonts.regular, fontSize:16, color:'white'}}>Send Message</Text>
                  </TouchableOpacity>
                  
              </View>

          </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    mainView: {
        flex: 1, 
        backgroundColor:'white'
       
    }


})


export default () => {
    return (
    <NativeBaseProvider>
        <ContactUs />
        </NativeBaseProvider>
    )
}