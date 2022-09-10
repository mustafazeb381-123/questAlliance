import { Checkbox, Icon, Input, Radio } from "native-base";
import React from "react";
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import ColorsTheme from "../theme/ColorsTheme";
import SVGICON from "../theme/SVGICON";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import fonts from "../theme/fonts";

function Login(props) {
  const [value, setValue] = React.useState("one");
  const [show, setShow] = React.useState(false);

  return (
    <ScrollView style={{ flex: 1, padding: 10, backgroundColor: "white" }}>
      <SVGICON.QuestAllianceLogoLarge
      style={{alignSelf :'center'}}
      />

      <Radio.Group
        name="myRadioGroup"
        style={{ flexDirection: "row",marginVertical:30, justifyContent: "space-between" }}
        accessibilityLabel="favorite number"
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
        }}
        fontStyle={{fontFamily :fonts.regular,}}
      >
        <Radio fontFamily={fonts.regular} color={ColorsTheme.Primary} value="1" my={1}>
          Personal Account
        </Radio>
        <Radio color={ColorsTheme.Primary} value="2" my={1}>
          Corporate Account
        </Radio>
      </Radio.Group>

      <Input
        p={4}
        borderRadius={5}
        placeholder="Enter your email"
        fontSize={16}
        _focus={{
          borderColor: ColorsTheme.Primary,
          backgroundColor: "white",
        }}
        placeholderTextColor={ColorsTheme.grey}
      />

      <Input
        p={4}
        borderRadius={5}
        placeholderTextColor={ColorsTheme.grey}
        marginTop={3}
        placeholder="Enter your password"
        fontSize={16}
        _focus={{
          borderColor: ColorsTheme.Primary,
          backgroundColor: "white",
        }}
        type={show ? "text" : "password"}
        //   InputRightElement={
        //     <Pressable onPress={() => setShow(!show)}>
        //       <Icon
        //         as={
        //           <MaterialIcons
        //             name={show ? "visibility" : "visibility-off"}
        //           />
        //         }
        //         size={5}
        //         mr="2"
        //         color="muted.400"
        //       />
        //     </Pressable>
        //   }
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{alignSelf:'center',flexDirection:'row'}}>
        <Checkbox  isChecked={false} colorScheme="green" style={{alignSelf:'center'}} />
          <Text
            style={{
              fontFamily: fonts.light,
              color: ColorsTheme.grey,
              fontSize: 18,
              paddingLeft :15,
              marginTop :-5
            }}
          >
            Remember me
          </Text>
        </View>
        <Text
          style={{
            color: ColorsTheme.Primary,
            textAlign: "right",
            paddingVertical: 30,
            fontSize: 16,
            fontFamily:fonts.regular
          }}
        >
          Forgot password?
        </Text>
      </View>

      <Pressable style={styles.btn}>
        <Text style={styles.btntitle}>Login</Text>
      </Pressable>
      <SVGICON.or style={{ alignSelf: "center", marginTop: 30 }} />

      <View
        style={{
          flexDirection: "row",
          margin: 20,
          justifyContent: "space-between",
        }}
      >
        <Image source={SVGICON.GoogleIcon} />
        <SVGICON.facebook />
      </View>

      <Text
        style={{
          color: "black",
          fontFamily: fonts.regular,
          fontSize: 16,
          alignSelf: "center",
        }}
      >
        Don’t Have an Account?
        <Text style={{ color: ColorsTheme.Primary }}> Signup</Text>
      </Text>

      <Pressable
        onPress={() => {
          props.navigation.pop();
        }}
      >
        <Text
          style={{
            color: ColorsTheme.Primary,
            alignSelf: "center",
            padding: 30,
            fontSize: 16,
          }}
        >
          Back to homepage
        </Text>
      </Pressable>
    </ScrollView>
  );
}

export default Login;

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
});
