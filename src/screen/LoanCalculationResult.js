import React from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";
import Button from "../component/Button";
import Header from "../component/Header";
import ColorsTheme from "../theme/ColorsTheme";
import fonts from "../theme/fonts";

function LoanCalculationResult(props) {
  return (
    <View>
      <Header
        props={props}
        title={"Login"}
        headerTitle={"Loan Calculator"}
        back={true}
        onPress={() => {
          props.navigation.navigate("Login");
        }}
        backonPress={() => {
          props.navigation.pop();
        }}
      />

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={styles.loanTap}>
          LOAN PAYMENT{"\n"}
          BREAKDOWN
        </Text>

        <View style={{ paddingVertical: 20 }}>
          <Text style={styles.greylabel}>
            Loan pay off by <Text style={styles.highlightLabel}>2046</Text>
          </Text>

          <Text style={styles.greylabel}>Total interest paid</Text>
          <Text
            style={styles.doller}
          >
            $ {"  "}
            <Text style={styles.highlightLabel}>28,622</Text>
          </Text>

          <Text style={styles.greylabel}>Total amount you pay in payments</Text>
          <Text
            style={styles.doller}
          >
            $ {"  "}
            <Text style={styles.highlightLabel}>28,622</Text>
          </Text>


          <Text style={styles.greylabel}>Your monthly repayment</Text>
          <Text
            style={styles.doller}
          >
            $ {"  "}
            <Text style={styles.highlightLabel}>429</Text>
          </Text>
        </View>

        <Button
          title={"Back"}
          onPress={() => {
            props.navigation.pop();
          }}
          marginTop={20}
          marginHorizontal={1}
        />
      </ScrollView>
    </View>
  );
}

export default LoanCalculationResult;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: -10,
  },
  loanTap: {
    color: ColorsTheme.Primary,
    fontSize: 20,
    alignSelf: "flex-start",
    fontFamily: fonts.bold,
    marginTop: 10,
  },
  greylabel: {
    color: ColorsTheme.grey,
    fontFamily: fonts.regular,
    fontSize: 18,
    marginTop: 20,
  },
  highlightLabel: {
    color: "black",
  },
  doller :{
    marginRight: 20,
    fontSize: 20,
    fontFamily: fonts.regular,
    color: ColorsTheme.Primary,
  },
});
