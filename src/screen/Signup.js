import { Checkbox, Icon, Input, Radio } from "native-base";
import React from "react";
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  Touchable,
} from "react-native";
import ColorsTheme from "../theme/ColorsTheme";
import SVGICON from "../theme/SVGICON";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import fonts from "../theme/fonts";
import { TouchableOpacity } from "react-native-gesture-handler";

function Signup(props) {
  const [value, setValue] = React.useState("one");
  const [show, setShow] = React.useState(false);
  

  // const [check, setCheck] = React.useState("");

  return (
    <ScrollView style={{ flex: 1, padding: 10, backgroundColor: "white" }}>
      <SVGICON.QuestAllianceLogoLarge style={{ alignSelf: "center" }} />

      <Text style={styles.labelheader}>New User Sign Up</Text>

      <Radio.Group
        name="myRadioGroup"
        style={{
          flexDirection: "row",
          marginVertical: 30,
          justifyContent: "space-between",
        }}
        accessibilityLabel="favorite number"
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
        }}
        fontStyle={{ fontFamily: fonts.regular }}
      >
     
        <Radio
          fontFamily={fonts.regular}
          color={ColorsTheme.Primary}
          value="one"
         
          my={1}
        >
          Personal Account
          </Radio>
      
        <Radio color={ColorsTheme.Primary}
          value="two"
         
          my={1}>
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
      />
      {
        value == "one" &&
      <View>
      <Pressable
       onPress={() => {
        props.navigation.navigate('SignupSuccess');
      }}
       style={styles.btn}>
        <Text style={styles.btntitle}>Sign Up</Text>
        </Pressable>
      </View>
      }

      {
       value == "two" &&
        <View>
        <Pressable
          onPress={() => {
            props.navigation.navigate('CorporateSignupSuccess');
          }}
          style={styles.btn}>
          <Text style={styles.btntitle}>Sign Up</Text>
            </Pressable>
            
          </View>
      }
      <SVGICON.or style={{ alignSelf: "center", marginTop: 40 }} />

      <View
        style={{
          flexDirection: "row",
          margin: 20,
          marginTop :30,
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
        Have an Account?
        <Text
         onPress={() => {
            props.navigation.pop();
          }}
           style={{ color: ColorsTheme.Primary }}> Login</Text>
      </Text>
    </ScrollView>
  );
}

export default Signup;

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
    marginTop: 10,
  },
});
