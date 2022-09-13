import React from "react";

import { View, StyleSheet, Text, Image } from "react-native";
import fonts from "../theme/fonts";
import SVGICON from "../theme/SVGICON";
import Slider from "@react-native-community/slider";
import ColorsTheme from "../theme/ColorsTheme";

function SliderTrack(props) {
  const [onChangeValue, setOnChangeValue] = React.useState(0);

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "column", width: "75%" }}>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={props.maxValue}
          minimumTrackTintColor={ColorsTheme.Primary}
          maximumTrackTintColor={ColorsTheme.grey}
          onValueChange={(val) => {
            if (props.parseInt) {
              setOnChangeValue(parseInt(val));
            } else {
              setOnChangeValue(val.toFixed(1));
            }
          }}
        />
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={styles.metervalue}>0</Text>
          <Text style={styles.metervalue}>{props.maxValue}</Text>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 5,
          width: "20%",
          alignSelf: "flex-start",
        }}
      >
        <Text
          style={{
            fontFamily: fonts.bold,
            fontSize: 16,
            alignSelf: "center",
            paddingVertical: 5,
          }}
        >
          {onChangeValue}
        </Text>
      </View>
    </View>
  );
}

export default SliderTrack;

const styles = StyleSheet.create({
  metervalue: {
    marginLeft: 10,
    color: ColorsTheme.grey,
    fontFamily: fonts.regular,
  },
});
