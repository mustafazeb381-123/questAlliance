import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import * as React from "react";
import ColorsTheme from "../theme/ColorsTheme";
import fonts from "../theme/fonts";
import SVGICON from "../theme/SVGICON";

function CheckBoxText(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 10,
      }}
    >
      <View style={styles.square}>
        {props.checked && <SVGICON.rightIcon style={{ alignSelf: "center" }} />}
      </View>

      <Text style={styles.textlbl1}>{props.text1}</Text>
      {props.textInput && (
        <TextInput
          placeholder={"123"}
          placeholderTextColor={ColorsTheme.grey}
          color={ColorsTheme.grey}
          onChangeText={(e) => {}}
          value={"1"}
          style={[styles.textinput, { minWidth: 80 }]}
        />
      )}
      {props.text2 && <Text style={styles.textlbl}>{props.text2}</Text>}
    </View>
  );
}

export default CheckBoxText;

const styles = StyleSheet.create({
  square: {
    borderWidth: 1,
    width: 40,
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
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
  textlbl1: {
    color: "black",
    fontSize: 14,
    fontFamily: fonts.semibold,
    alignSelf: "center",
    marginHorizontal: 5,
  },
});
