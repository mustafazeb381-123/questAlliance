import { ScrollView, StyleSheet, Pressable, View, Text } from "react-native";
import React from "react";
import SVGICON from "../theme/SVGICON";
import ColorsTheme from "../theme/ColorsTheme";
import fonts from "../theme/fonts";
import { Input } from "native-base";
import Button from "../component/Button";

function ForgotPassword(props) {
  return (
    <ScrollView
      style={{ flex: 1, padding: 10, backgroundColor: "white" }}
      contentContainerStyle={{ flex: 1 }}
    >
      <SVGICON.QuestAllianceLogoLarge style={{ alignSelf: "center" }} />

      <Text style={styles.labelheader}>Forgot Your Password?</Text>

      <Text style={styles.labeltag}>
        Enter your email below and we'll get you {"\n"}
        back on track.
      </Text>

      <Input
        p={4}
        mb={10}
        borderRadius={5}
        placeholder="Enter your email"
        fontSize={16}
        _focus={{
          borderColor: ColorsTheme.Primary,
          backgroundColor: "white",
        }}
        placeholderTextColor={ColorsTheme.grey}
      />

    
      <Button title={'Send Code'} 
        onPress={() => {
          props.navigation.navigate('ForgotSuccess')
        }}
        />

      <View style={{ position: "absolute", bottom: 0, alignSelf: "center" }}>
        <Text
          style={{
            color: "black",
            fontFamily: fonts.regular,
            fontSize: 16,
            alignSelf: "center",
          }}
        >
          Have an Account?
          <Text style={{ color: ColorsTheme.Primary }}> Login</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

export default ForgotPassword;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: ColorsTheme.Primary,
    borderRadius: 10,
    marginTop: 20,
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
    marginTop: 50,
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
