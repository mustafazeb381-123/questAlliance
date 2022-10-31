import {
    Alert,
    Animated,
    StyleSheet,
    Text,
    View,
    Pressable,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ColorsTheme from "../theme/ColorsTheme";
import SVGICON from "../theme/SVGICON";
import Header from "../component/Header";
import fonts from "../theme/fonts";
import Button from "../component/Button";
import CommonTextInput from "../component/CommonTextInput";
import CommonDropdown from "../component/CommonDropdown";
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign'
const SubmitApplication = (props) => {

    const navigation = useNavigation
    const [name, setName] = useState("");
  return (
      <View style={{ flex: 1 }}>
          <Header
              props={props}
              back={true}
              headerTitle={"Mortgage Loan (Commerical)"}
              backonPress={() => {
                  props.navigation.pop();
              }}
          />
          <ScrollView style={{ marginBottom: 10 }}>
              <ImageBackground source={SVGICON.HomeBanner} style={{ height: "auto" }}>
                  <View
                      style={{
                          backgroundColor: ColorsTheme.lightBlue,
                          padding: 16,
                          flex: 1,
                      }}
                  >
                      <Text style={styles.title}>
                          Commercial Property
                          {"\n"}& Equity Loan
                          {"\n"}
                          Application Form
                      </Text>
                  </View>
              </ImageBackground>
              
              
              <View style={{width:'100%', justifyContent:'center', alignItems:'center', marginTop:45, }}>
                  <AntDesign name="checkcircle" size={100} color="#2662b0" />

                  <Text style={{ fontFamily: fonts.bold, fontSize: 16, paddingTop: 20, color: 'black' }}>Application Form Sent</Text>
                  

                  <Text style={{paddingTop:18, fontFamily:fonts.semibold, fontSize:16, color:'black'}}>
                      You have send out the application form {'\n'}
                      successfully. We will respond to your{'\n'}queries via email or contact you directly.
                  </Text>

                  <TouchableOpacity style={{ width: 280, backgroundColor:'#2662b0', justifyContent:'center', alignItems:'center', height:40, borderRadius:5, marginTop:36}}>
                      <Text style={{color:'white', fontFamily:fonts.semibold, fontSize:16}}>Back To Home</Text>
                  </TouchableOpacity>
              </View>
              
          </ScrollView>
          </View>
  )
}

const styles = StyleSheet.create({

    title: {
        color: "white",
        fontSize: 28,
        marginTop: 10,
        fontFamily: fonts.bold,
    },
})

export default SubmitApplication