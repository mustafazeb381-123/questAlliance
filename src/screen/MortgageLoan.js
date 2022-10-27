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
import * as React from "react";
import ColorsTheme from "../theme/ColorsTheme";
import SVGICON from "../theme/SVGICON";
import Header from "../component/Header";
import fonts from "../theme/fonts";
import Button from "../component/Button";
// const Tab = createMaterialBottomTabNavigator();

function MortgageLoan(props) {
  return (
    <View style={{ flex: 1 }}>
      <Header
        props={props}
        back={true}
        headerTitle={"Services"}
        backonPress={() => {
          props.navigation.pop();
        }}
      />
      <ScrollView style={{ marginBottom: 10 }}>
        <ImageBackground source={SVGICON.HomeBanner} style={{ height: 300 }}>
          <View
            style={{
              backgroundColor: ColorsTheme.lightBlue,
              padding: 16,
              flex: 1,
            }}
          >
            <Text style={styles.title}>Mortgage Loan</Text>
            <Text style={styles.subTitle}>We find the right loan for you.</Text>
            <Pressable
              style={styles.btn}
              onPress={() => {
                props.navigation.navigate("PersonalparticularForm");
              }}
            >
              <Text style={styles.btntitle}> {"APPLY NOW"}</Text>
            </Pressable>
          </View>
        </ImageBackground>
        <View style={{ padding: 16 }}>
          <Text style={styles.blacktitle}>Mortgage Loan</Text>
          <Text style={styles.blacksubTitle}>
            Buying a home can be one of the most exciting — and stressful —
            moments of your life. But finding a home you can call your own makes
            it all worthwhile. At Quest Alliance we find the right loans, with
            rates that work for you. You can be sure that we have a real stake
            in providing you with the best experience possible.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default MortgageLoan;

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
    backgroundColor: ColorsTheme.orange,
    borderRadius: 10,
    alignSelf: "flex-start",
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
