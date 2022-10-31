import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import Header from "../component/Header";
import ColorsTheme from "../theme/ColorsTheme";
import fonts from "../theme/fonts";
import SVGICON from "../theme/SVGICON";

function ServiceScreen(props) {
  const [DATA, setDATA] = useState([
    {
      icon: <SVGICON.PersonalLoan style={{ alignSelf: "center" }} />,
      title: "PERSONAL LOAN",
    },
    {
      icon: <SVGICON.mortgage style={{ alignSelf: "center" }} />,
      title: "MORTGAGE LOAN",
    },
    {
      icon: <SVGICON.commercial style={{ alignSelf: "center" }} />,
      title: "Commercial Property & Equity Loan LOAN",
    },
    {
      icon: <SVGICON.business style={{ alignSelf: "center" }} />,
      title: "BUSINESS FINANCING",
    },
    {
      icon: <SVGICON.finance style={{ alignSelf: "center" }} />,
      title: "AUTO-FINANCING",
    },
  ]);
  return (
    <View style={{ flex: 1 }}>
      <Header
        props={props}
        title={"Login"}
        onPress={() => {
          props.navigation.navigate("Login");
        }}
        backonPress={() => {
          props.navigation.pop();
        }}
      />

      <Text style={styles.loanTap}>SERVICES</Text>

      <FlatList
        data={DATA}
        numColumns={2}
        style={{ marginHorizontal: 10, marginBottom: 100 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              style={styles.card}
              onPress={() => {
                index == 1
                  ? props.navigation.navigate("MortgageLoan")
                  : index == 2
                  ? props.navigation.navigate("CommercialLoan")
                  : index == 3
                      ? props.navigation.navigate("BusinessLoan")
                      : index == 4
                          ? props.navigation.navigate("AutoFinancing")
                          : null;
              }}
            >
              <View>
                {item.icon}
                <Text style={styles.titleLabel}>{item.title}</Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

export default ServiceScreen;

const styles = StyleSheet.create({
  loanTap: {
    color: ColorsTheme.Primary,
    fontSize: 24,
    alignSelf: "flex-start",
    fontFamily: fonts.bold,
    margin: 20,
  },
  titleLabel: {
    color: ColorsTheme.white,
    fontSize: 20,
    alignSelf: "center",
    fontFamily: fonts.bold,
    marginTop: 10,
    textAlign: "center",
  },
  card: {
    backgroundColor: ColorsTheme.Primary,
    borderRadius: 10,
    padding: 15,
    width: "45%",
    margin: 10,
  },
});
