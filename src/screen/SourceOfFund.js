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

function SourceOfFund(props) {
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
          {lineDraw(ColorsTheme.Primary)}
          {lineDraw("grey")}
          {lineDraw("grey")}
          {lineDraw("grey")}
        </View>

        <View style={{ padding: 16 }}>
          <Text style={styles.blacktitle}>Source of Funds Downpayment</Text>

          <Text style={styles.textlbl}>
            I/We hereby declare the following information on my/our source of
            funds for down payment on the property to be financed:
          </Text>

          <CheckBoxText checked={false} text1={"Directorship Fees/Dividends"} />

          <CheckBoxText checked={false} text1={"Inherited Wealth"} />

          <CheckBoxText checked={false} text1={"Rental Income "} />

          <CheckBoxText checked={false} text1={"Salary/Business Income "} />

          <CheckBoxText checked={false} text1={"Sale of Investment(s) "} />

          <CheckBoxText checked={false} text1={"Savings"} />

          <CheckBoxText checked={false} text1={"Others:"} 
           textInput={"5"}/>


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

export default SourceOfFund;

const styles = StyleSheet.create({
  textlbl: {
    color: "black",
    fontSize: 12,
    fontFamily: fonts.semibold,
  },
  btnstart: {
    backgroundColor: ColorsTheme.Primary,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 25,
  },
  btn: {
    backgroundColor: ColorsTheme.Primary, //"#2662B070",
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
  title: {
    color: ColorsTheme.Primary,
    fontSize: 28,
    marginTop: 10,
    fontFamily: fonts.bold,
  },
  blacktitle: {
    color: "black",
    fontSize: 24,
    fontFamily: fonts.semibold,
  },
});
