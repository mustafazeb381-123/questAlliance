import { ScrollView, StyleSheet, Pressable, View, Text } from "react-native";
import React from "react";
import SVGICON from "../theme/SVGICON";
import ColorsTheme from "../theme/ColorsTheme";
import fonts from "../theme/fonts";
import { Input } from "native-base";
import Button from "../component/Button";

function SignupSuccess(props) {
  return (
    <ScrollView
      style={{ flex: 1, padding: 10, backgroundColor: "white" }}
      contentContainerStyle={{ flex: 1 }}
    >
      <SVGICON.QuestAllianceLogoLarge style={{ alignSelf: "center" }} />

      <SVGICON.success style={{ alignSelf: "center", marginTop: 30 }} />

      <Text style={styles.labelheader}>
        Sign Up Personal Account Successful
      </Text>

      <Text style={styles.labeltag}>
        You have sign up for an personal account{"\n"} successfully. Proceed to
        login to access{"\n"} more features.
      </Text>

      <Button
        title={"Back to Login"}
        onPress={() => {
          props.navigation.navigate("Login");
        }}
      />
    </ScrollView>
  );
}

export default SignupSuccess;

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
