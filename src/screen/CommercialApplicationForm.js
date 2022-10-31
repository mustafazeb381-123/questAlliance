import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ColorsTheme from "../theme/ColorsTheme";
import SVGICON from "../theme/SVGICON";
import Header from "../component/Header";
import fonts from "../theme/fonts";
import Button from "../component/Button";
import CommonTextInput from "../component/CommonTextInput";
import CommonDropdown from "../component/CommonDropdown";

function CommercialApplicationForm(props) {
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
        <View style={{ padding: 16 }}>
          <CommonTextInput
            PlaceHolder={"Name"}
            marginTop={10}
            headerTitle={"Name"}
            marginStart={1}
            data={name}
            updateMasterState={(name, value) => {
              setName(value);
            }}
          />
          <CommonTextInput
            PlaceHolder={"Company you are applying on behalf"}
            marginTop={10}
            headerTitle={"Company you are applying on behalf"}
            marginStart={1}
            data={name}
            updateMasterState={(name, value) => {
              setName(value);
            }}
          />
          <CommonTextInput
            PlaceHolder={"Email"}
            marginTop={10}
            headerTitle={"Email"}
            marginStart={1}
            data={name}
            updateMasterState={(name, value) => {
              setName(value);
            }}
          />

          <CommonDropdown
            PlaceHolder={"Subject"}
            marginTop={10}
            headerTitle={"Subject:"}
            marginStart={1}
            data={""}
          />

<CommonTextInput
            PlaceHolder={"Content"}
            marginTop={10}
            headerTitle={"Content"}
            marginStart={1}
            data={name}
            updateMasterState={(name, value) => {
              setName(value);
            }}
          />

<Pressable
            style={styles.btn}
            onPress={() => {
              props.navigation.navigate('SubmitApplication');
            }}
          >
            <Text style={styles.btntitle}> {'SEND MESSAGE'}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default CommercialApplicationForm;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 28,
    marginTop: 10,
    fontFamily: fonts.bold,
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
    backgroundColor: ColorsTheme.Primary,
    borderRadius: 40,
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 20,
  },
  btntitle: {
    color: "white",
    paddingVertical: 15,
    fontFamily: fonts.bold,
    fontSize: 18,
    paddingHorizontal: 30,
  },
  choosetext: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: "white",
    paddingVertical: 10,
  },
  blacktitle: {
    color: "black",
    fontSize: 28,
    marginTop: 10,
    fontFamily: fonts.bold,
  },
  blacksubTitle: {
    color: "black",
    fontSize: 16,
    marginTop: 15,
    fontFamily: fonts.regular,
  },
});
