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

function BusinessLoan(props) {
  return (
    <View style={{ flex: 1 ,backgroundColor:'white'}}>
      <Header
        props={props}
        back={true}
        headerTitle={"Services"}
        backonPress={() => {
          props.navigation.pop();
        }}
      />
      <ScrollView style={{ marginBottom: 10 }}>
        <ImageBackground source={SVGICON.HomeBanner} style={{ height: 'auto' }}>
          <View
            style={{
              backgroundColor: ColorsTheme.lightBlue,
              padding: 16,
              flex: 1,
            }}
          >
            <Text style={styles.title}>
              Business Financing
              {"\n"}
              Different solutions to serve your needs
            </Text>
            <Text style={styles.subTitle}>
              Working capital is vital for businesses, especially in times of
              uncertainty. We are here to help business owners during the
              challenging times, to provide support with various financing
              measures enabling you to concentrate on the business at hand
            </Text>
            <Pressable
              style={styles.btn}
              onPress={() => {
                props.navigation.navigate("BusinessForm");
              }}
            >
              <Text style={styles.btntitle}> {"APPLY NOW"}</Text>
            </Pressable>
          </View>
        </ImageBackground>
        <View style={{ padding: 16 }}>
          <Text style={styles.blacktitle}>Business Financing</Text>
          <Text style={styles.blacksubTitle}>
            Business financing is an umbrella term to describe any kind of loan
            offered to a company for business purposes. There are actually many
            types of business loans: Some are just offered for whatever business
            needs you might have (such as for managing cash flow, or for
            furthering your growth), while others are offered specifically for
            certain business needs (such as machinery/equipment or property
            loans) or even types of businesses (start-ups).
          </Text>
          <Text style={styles.blacksubTitle}>
            {"\n\n"}
            The most common types as below:{"\n"} • Business loan{"\n"}  • SME working
            capital loan{"\n"}  • Invoice financing {"\n"} • Temporary Bridging loan {"\n"} • Private
            lending
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default BusinessLoan;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 28,
    marginTop: 10,
    fontFamily: fonts.regular,
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
