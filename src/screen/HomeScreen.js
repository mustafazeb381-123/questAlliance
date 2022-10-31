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
import { useNavigation } from "@react-navigation/native";
// const Tab = createMaterialBottomTabNavigator();

function HomeScreen(props) {

  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <Header
        props={props}
        title={"Login"}
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      />
      <ScrollView style={{ marginBottom: 100 }}>
        <ImageBackground source={SVGICON.HomeBanner} style={{ height: 300 }}>
          <View style={{ backgroundColor: ColorsTheme.lightBlue, padding: 10 }}>
            <Text style={styles.title}>Quest Alliance</Text>
            <Text style={styles.subTitle}>
              Turn your dream home into reality by purchasing or refinancing
              your property. Let QUEST Alliance helps you make a better decision
              by comparing the best home loan interest rates that is suited to
              your needs.
            </Text>
          </View>
        </ImageBackground>
        <SVGICON.loanProvider style={{ alignSelf: "center", margin: 30 }} />
        <Text style={styles.loanTap}>Your One-Stop Loan Provider</Text>
        <Text style={styles.loanTapSub}>Get Your rate in minutes</Text>
        <Text style={styles.loanTapDesc}>
          At QUEST Alliance, you will get the most updated & most comprehensive
          rate
          {"\n"}– Official as well as Deviated, right to you.
          {"\n\n"}
          You can call the banks directly BUT are you ready to be randomly
          assigned to any mortgage specialist who just want to sell you his or
          her package? Here, you get our independent expert advice and work with
          our entire network of senior bankers, law firms, financial advisors,
          etc.  Don’t leave it to chance.  Work with a trusted broker all
          through the interest rate cycle-based approach effectively.
        </Text>

        <Pressable style={styles.btn} onPress={() => navigation.navigate("JointApplicationSenario")} >
          <Text style={styles.btntitle}>LOAN CALCULATOR</Text>
        </Pressable>

        <View style={{ backgroundColor: ColorsTheme.darkBlue, padding: 20 }}>
          <Text style={styles.title}>Why Choose Us</Text>

          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <SVGICON.update style={{ alignSelf: "center" }} />
            <View style={{ width: "80%", paddingLeft: 10 }}>
              <Text style={styles.choosetext}>Most Updated Rates</Text>
              <Text style={styles.subTitle}>
                Not only our bank rates are the most updated, but we also get
                special deviated rates from banks at times because of the volume
                of business we refer.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <SVGICON.Comparision style={{ alignSelf: "center" }} />
            <View style={{ width: "80%", paddingLeft: 10 }}>
              <Text style={styles.choosetext}>Comprehensive Comparision</Text>
              <Text style={styles.subTitle}>
                A comprehensive rate comparison summary for you to show breaks
                down of each package the subsidy, lock-in, penalty, min loan,
                hidden terms, etc.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <SVGICON.Services style={{ alignSelf: "center" }} />
            <View style={{ width: "80%", paddingLeft: 10 }}>
              <Text style={styles.choosetext}>One Stop Services</Text>
              <Text style={styles.subTitle}>
                From the point of application , to signing of letter of offer ,
                to fixing appointment with the law firm, leave all these hassles
                to us. We will arrange all for you .
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <SVGICON.Approval style={{ alignSelf: "center" }} />
            <View style={{ width: "80%", paddingLeft: 10 }}>
              <Text style={styles.choosetext}>Gauranteed Loan Approval</Text>
              <Text style={styles.subTitle}>
                Follow our expert advise and we make sure your loan will be
                approved .
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.titleService}>Our Services</Text>

        <ScrollView horizontal>
          {[0, 1, 3, 2].map((e) => {
            return (
              <ImageBackground
                source={SVGICON.HomeBanner}
                imageStyle={{ borderRadius: 10 }}
                style={{ width: 200, height: 300, marginRight: 20 }}
              >
                <View
                  style={{
                    backgroundColor: ColorsTheme.lightBlue,
                    flex: 1,
                    padding: 10,
                    borderRadius: 10,
                    justifyContent: "flex-end",
                  }}
                >
                  <Text style={[styles.choosetext,{alignSelf:'center'}]}>Personal Loan</Text>
                  <View style={{flexDirection:'row',justifyContent :'center'}}>
                  <Text style={[styles.viewMore]}>
                    View more</Text>
                     <SVGICON.right style={{ marginLeft: 20,alignSelf : 'center'}} />
                  
                  </View>
                </View>
              </ImageBackground>
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 40,
    alignSelf: "center",
    padding: 10,
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
    fontFamily: fonts.regular,
  },
  viewMore: {
    color: "white",
    fontSize: 16,
    fontFamily: fonts.regular,
    alignSelf: "center",
    textAlign :'center'
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
    backgroundColor: ColorsTheme.Primary,
    borderRadius: 10,
    alignSelf: "center",
    margin: 20,
  },
  btntitle: {
    color: "white",
    paddingVertical: 20,
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
});
