import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";

import ColorsTheme from "../theme/ColorsTheme";
import SVGICON from "../theme/SVGICON";
import Header from "../component/Header";
import fonts from "../theme/fonts";
import CommonTextInput from "../component/CommonTextInput";
import CommonDropdown from "../component/CommonDropdown";
import CheckBoxText from "../component/CheckBoxText";
// const Tab = createMaterialBottomTabNavigator();

function PropertyinfoForm(props) {
  const [name, setname] = useState("");
  const [Birth, setBirth] = useState("");
  const [Address, setAddress] = useState("");
  const [mob, setmob] = useState("");
  const [home, sethome] = useState("");
  const [Office, setOffice] = useState("");
  const [Email, setEmail] = useState("");
  const [Mailing, setMailing] = useState("");
  const [Passport, setPassport] = useState("");

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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        props={props}
        back={true}
        headerTitle={"Mortgage Loan"}
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
            flexDirection: "row",
          }}
        >
          {lineDraw(ColorsTheme.Primary)}
          {lineDraw(ColorsTheme.Primary)}
          {lineDraw(ColorsTheme.Primary)}
          {lineDraw("grey")}
          {lineDraw("grey")}
          {lineDraw("grey")}
          {lineDraw("grey")}
        </View>

        <View style={{ padding: 16 }}>
          <Text style={styles.blacktitle}>Property Information</Text>

          <CommonDropdown
            PlaceHolder={"YES"}
            marginTop={10}
            headerTitle={"Approval In Principle?"}
            marginStart={1}
            data={""}
          />

          <CommonTextInput
            PlaceHolder={"1 North Bridge Road S123456"}
            marginTop={10}
            headerTitle={"Address of Property to be Financed:"}
            marginStart={1}
            data={name}
            updateMasterState={(name, value) => {
              setname(value);

              // if (value == '') {
              //   this.setState({
              //     errorEmailAddress: ErrorMessages.emailId.empty,
              //   });
              // } else {
              //   this.setState({errorEmailAddress: ''});
              // }
            }}
          />

          <CommonDropdown
            PlaceHolder={"Usage of Property"}
            marginTop={10}
            headerTitle={"Usage of Property:"}
            marginStart={1}
            data={""}
          />

          <CommonDropdown
            PlaceHolder={"Main Applicant"}
            marginTop={10}
            headerTitle={"Main Applicant:"}
            marginStart={1}
            data={""}
          />

          <CommonDropdown
            PlaceHolder={"Type of Property"}
            marginTop={10}
            headerTitle={"Type of Property:"}
            marginStart={1}
            data={""}
          />

          <CommonDropdown
            PlaceHolder={"Landed"}
            marginTop={10}
            headerTitle={"Type of Residential Property:"}
            marginStart={1}
            data={""}
          />

          <CommonDropdown
            PlaceHolder={"Bungalow"}
            marginTop={10}
            marginStart={1}
            data={""}
          />

          <CommonDropdown
            PlaceHolder={"3 Stories "}
            marginTop={10}
            marginStart={1}
            data={""}
          />

          <Text style={styles.blacksubTitle}>Property Size:</Text>

          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text style={styles.textlbl}>Built in Area</Text>
            <TextInput
              placeholder={"123"}
              placeholderTextColor={ColorsTheme.grey}
              color={ColorsTheme.grey}
              onChangeText={(e) => {}}
              value={"1"}
              style={[styles.textinput, { minWidth: 80 }]}
            />
            <Text style={styles.textlbl}>sq ft/sq m</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text style={styles.textlbl}>Land Area</Text>
            <TextInput
              placeholder={"123"}
              placeholderTextColor={ColorsTheme.grey}
              color={ColorsTheme.grey}
              onChangeText={(e) => {}}
              value={"1"}
              style={[styles.textinput, { minWidth: 80 }]}
            />
            <Text style={styles.textlbl}>sq ft/sq m</Text>
          </View>

          <Text style={styles.blacksubTitle}>Property/Land Status:</Text>

          <CheckBoxText
            checked={true}
            text1={"Completed, estimate age is "}
            textInput={"5"}
            text2={"year(s)."}
          />

          <CheckBoxText
            checked={false}
            text1={"Under construction, TOP date is "}
            textInput={"5"}
          />

          <CheckBoxText
            checked={false}
            text1={"Conservation Status "}
            
          />

          <CheckBoxText checked={false} text1={"Pre-War "}/>

          <CheckBoxText
            checked={false}
            text1={"Vacant Land "}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={styles.btnstart}
              onPress={() => {
                props.navigation.pop();
              }}
            >
              <Text style={styles.btntitle}> {"   BACK   "}</Text>
            </Pressable>
            <Pressable
              style={styles.btn}
              onPress={() => {
                props.navigation.navigate('SourceOfFund');
              }}
            >
              <Text style={styles.btntitle}> {"CONTINUE"}</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default PropertyinfoForm;

const styles = StyleSheet.create({
  title: {
    color: ColorsTheme.Primary,
    fontSize: 28,
    marginTop: 10,
    fontFamily: fonts.bold,
  },

  textinput: {
    borderColor: ColorsTheme.grey,
    borderWidth: 1.5,
    padding: Platform.OS == "ios" ? 10 : 5,
    borderRadius: 10,
    fontSize: 16,
    paddingStart: 15,
    padding: 15,
  },
  textlbl: {
    color: "black",
    fontSize: 16,
    fontFamily: fonts.semibold,
    alignSelf: "center",
    marginHorizontal: 5,
    width: "30%",
  },
  titleService: {
    color: ColorsTheme.Primary,
    fontSize: 40,
    alignSelf: "center",
    padding: 20,
    fontFamily: fonts.regular,
  },
  subTitle: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
    fontFamily: fonts.regular,
  },
  viewMore: {
    color: "white",
    fontSize: 16,
    fontFamily: fonts.regular,
    alignSelf: "center",
    textAlign: "center",
  },
  loanTap: {
    color: ColorsTheme.Primary,
    fontSize: 20,
    alignSelf: "center",
    fontFamily: fonts.bold,
  },
  loanTapSub: {
    color: ColorsTheme.Primary,
    fontSize: 16,
    alignSelf: "center",
    fontFamily: fonts.regular,
  },
  loanTapDesc: {
    color: "black",
    fontSize: 16,
    alignSelf: "center",
    fontFamily: fonts.regular,
    padding: 10,
  },
  btn: {
    backgroundColor: "#2662B070",
    borderRadius: 10,
    alignSelf: "flex-end",
    marginTop: 25,
    marginEnd: 10,
  },
  btntitle: {
    color: "white",
    paddingVertical: 15,
    fontFamily: fonts.bold,
    fontSize: 18,
    paddingHorizontal: 40,
  },
  choosetext: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: "white",
    paddingVertical: 10,
  },
  blacktitle: {
    color: "black",
    fontSize: 26,
    fontFamily: fonts.semibold,
  },
  blacksubTitle: {
    color: "black",
    fontSize: 16,
    marginTop: 15,
    fontFamily: fonts.semibold,
  },
  btnstart: {
    backgroundColor: ColorsTheme.Primary,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 25,
  },
});
