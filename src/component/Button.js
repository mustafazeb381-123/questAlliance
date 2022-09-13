import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import * as React from "react";
import ColorsTheme from "../theme/ColorsTheme";
import fonts from "../theme/fonts";

function Button(props) {
  return (
    <Pressable
      onPress={() => {
        props.onPress();
      }}
      style={{
        borderRadius: 5,
        backgroundColor: ColorsTheme.Primary,
        marginHorizontal: props?.marginHorizontal ? 
        props?.marginHorizontal : 30,
        marginTop : props?.marginTop ? props?.marginTop : 0
      }}
    >
      <Text
        style={{
          paddingHorizontal: 30,
          paddingVertical: 10,
          alignSelf: "center",
          color: "white",
          fontSize: 16,
          fontFamily: fonts.regular,
        }}
      >
        {props.title}
      </Text>
    </Pressable>
  );
}

export default Button;
