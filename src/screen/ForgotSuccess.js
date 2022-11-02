import { ScrollView, StyleSheet, Pressable, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SVGICON from "../theme/SVGICON";
import ColorsTheme from "../theme/ColorsTheme";
import fonts from "../theme/fonts";
import { Input } from "native-base";
import Button from "../component/Button";
import { useNavigation } from "@react-navigation/native";

function ForgotSuccess(props) {
  const navigation = useNavigation()
  return (
    <ScrollView
      style={{ flex: 1, padding: 10, backgroundColor: "white" }}
      contentContainerStyle={{ flex: 1 }}
    >
      <SVGICON.QuestAllianceLogoLarge style={{ alignSelf: "center" }} />

      <SVGICON.success style={{ alignSelf: "center",marginTop :30 }} />

      <Text style={styles.labelheader}>Password Reset Email Sent</Text>

      <Text style={styles.labeltag}>
        An email has been sent to {"\n"}
        Follow the instructions {"\n"}
        in your email to reset your password.
      </Text>

      <View style={{ width: '100%', marginTop: 49, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate("ResetPersonalAccount")} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#2662b0', height: 40, width: 280, borderRadius: 10 }}>
          <Text style={{ color: 'white' }}>Back to Login</Text>
        </TouchableOpacity>

      </View>
      {/* <Button title={'Back to Login'}
      onPress={() => {
        // props.navigation.popToTop()
        navigation.navigate("ResetPersonalAccount")
      }}
      /> */}
    </ScrollView>
  );
}

export default ForgotSuccess;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: ColorsTheme.Primary,
    borderRadius: 10,
    marginTop: 10,
  },
  btntitle: {
    color: "white",
    paddingVertical: 20,
    fontFamily: fonts.regular,
    fontSize: 18,
    paddingHorizontal: 30,
    alignSelf: "center",
  },
  labelheader: {
    fontSize: 18,
    alignSelf: "center",
    fontFamily: fonts.bold,
    marginTop: 30,
  },
  labeltag: {
    fontSize: 16,
    alignSelf: "center",
    fontFamily: fonts.regular,
    marginTop: 10,
    textAlign: "center",
    marginBottom: 50,
  },
});
