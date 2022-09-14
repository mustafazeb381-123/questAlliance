import { ScrollView, StyleSheet, Pressable, View, Text } from "react-native";
import React, { useState } from "react";
import SVGICON from "../theme/SVGICON";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ColorsTheme from "../theme/ColorsTheme";
import fonts from "../theme/fonts";
import { Icon, Input } from "native-base";
import Button from "../component/Button";
import Header from "../component/Header";
import SliderTrack from "../component/SliderTrack";

function LoanCalculator(props) {
  const [value, setvalue] = useState(0);
  const [addInterest, setaddInterest] = useState(false);
  const [addInterestInner, setaddInterestInner] = useState(false);
  const [addAnotherLoan, setaddAnotherLoan] = useState(false);

  function renderYourLoan() {
    return (
      <View>
        <Text style={styles.loanTap}>Your loan</Text>

        <Text style={styles.smallLabel}>Loan amount:</Text>

        <Input
          w={{
            base: "100%",
            md: "25%",
          }}
          borderColor={ColorsTheme.grey}
          placeholderTextColor={ColorsTheme.grey}
          fontFamily={fonts.regular}
          fontSize={14}
          padding={3}
          InputLeftElement={
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: fonts.regular,
                color: ColorsTheme.grey,
              }}
            >
              $
            </Text>
          }
          keyboardType={"number-pad"}
          placeholder="Enter an amount"
        />

        <Text style={styles.smallLabel}>Loan period (in years):</Text>
        <SliderTrack value={value} parseInt={true} maxValue={35} />

        <Text style={styles.smallLabel}>Annual interest rate (%):</Text>
        <SliderTrack value={value} maxValue={5} />

        {!addInterest ? (
          <Pressable
            onPress={() => {
              setaddInterest(!addInterest);
            }}
            style={styles.row}
          >
            <SVGICON.plus />

            <Text style={styles.labelplus}>
              Add interest rates for subsequent years
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              setaddInterest(!addInterest);
            }}
            style={styles.row}
          >
            <SVGICON.minus />

            <Text style={styles.labelplus}>Show Less</Text>
          </Pressable>
        )}

        {addInterest && (
          <View>
            <Input
              w={{
                base: "100%",
                md: "25%",
              }}
              borderColor={ColorsTheme.grey}
              placeholderTextColor={ColorsTheme.grey}
              fontFamily={fonts.regular}
              fontSize={14}
              padding={3}
              InputRightElement={
                <Text
                  style={{
                    paddingRight: 10,
                    fontFamily: fonts.regular,
                    color: ColorsTheme.grey,
                  }}
                >
                  %
                </Text>
              }
              keyboardType={"number-pad"}
              placeholder="Subsequent Year"
            />

            <Input
              w={{
                base: "100%",
                md: "25%",
              }}
              borderColor={ColorsTheme.grey}
              placeholderTextColor={ColorsTheme.grey}
              fontFamily={fonts.regular}
              fontSize={14}
              padding={3}
              marginTop={5}
              InputRightElement={
                <Text
                  style={{
                    paddingRight: 10,
                    fontFamily: fonts.regular,
                    color: ColorsTheme.grey,
                  }}
                >
                  %
                </Text>
              }
              keyboardType={"number-pad"}
              placeholder="3ed Year"
            />

            <Input
              w={{
                base: "100%",
                md: "25%",
              }}
              borderColor={ColorsTheme.grey}
              placeholderTextColor={ColorsTheme.grey}
              fontFamily={fonts.regular}
              fontSize={14}
              marginTop={5}
              padding={3}
              InputRightElement={
                <Text
                  style={{
                    paddingRight: 10,
                    fontFamily: fonts.regular,
                    color: ColorsTheme.grey,
                  }}
                >
                  %
                </Text>
              }
              keyboardType={"number-pad"}
              placeholder="4th Year"
            />

            <Input
              w={{
                base: "100%",
                md: "25%",
              }}
              borderColor={ColorsTheme.grey}
              placeholderTextColor={ColorsTheme.grey}
              fontFamily={fonts.regular}
              fontSize={14}
              marginTop={5}
              padding={3}
              InputRightElement={
                <Text
                  style={{
                    paddingRight: 10,
                    fontFamily: fonts.regular,
                    color: ColorsTheme.grey,
                  }}
                >
                  %
                </Text>
              }
              keyboardType={"number-pad"}
              placeholder="5th Year"
            />

            <Input
              w={{
                base: "100%",
                md: "25%",
              }}
              borderColor={ColorsTheme.grey}
              placeholderTextColor={ColorsTheme.grey}
              fontFamily={fonts.regular}
              fontSize={14}
              padding={3}
              marginTop={5}
              InputRightElement={
                <Text
                  style={{
                    paddingRight: 10,
                    fontFamily: fonts.regular,
                    color: ColorsTheme.grey,
                  }}
                >
                  %
                </Text>
              }
              keyboardType={"number-pad"}
              placeholder="Thereafter"
            />
          </View>
        )}
      </View>
    );
  }

  function renderAddLoan() {
    return (
      <View>
        {!addAnotherLoan ? (
          <Pressable
            onPress={() => {
              setaddAnotherLoan(!addAnotherLoan);
            }}
            style={styles.row}
          >
            <SVGICON.square />
            <Text style={styles.labelplus}>
              Add another loan for comparision
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              setaddAnotherLoan(!addAnotherLoan);
            }}
            style={styles.row}
          >
            <SVGICON.minus />
            <Text style={styles.labelplus}>Show Less</Text>
          </Pressable>
        )}

        {addAnotherLoan && 
        <View>

        <Text style={styles.loanTap}>New loan</Text>

        <Text style={styles.smallLabel}>Loan amount:</Text>

        <Input
          w={{
            base: "100%",
            md: "25%",
          }}
          borderColor={ColorsTheme.grey}
          placeholderTextColor={ColorsTheme.grey}
          fontFamily={fonts.regular}
          fontSize={14}
          padding={3}
          InputLeftElement={
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: fonts.regular,
                color: ColorsTheme.grey,
              }}
            >
              $
            </Text>
          }
          keyboardType={"number-pad"}
          placeholder="Enter an amount"
        />

        <Text style={styles.smallLabel}>Loan period (in years):</Text>
        <SliderTrack value={value} parseInt={true} maxValue={35} />

        <Text style={styles.smallLabel}>Annual interest rate (%):</Text>
        <SliderTrack value={value} maxValue={5} />

        {!addInterestInner ? (
          <Pressable
            onPress={() => {
              setaddInterestInner(!addInterestInner);
            }}
            style={styles.row}
          >
            <SVGICON.plus />

            <Text style={styles.labelplus}>
              Add interest rates for subsequent years
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              setaddInterestInner(!addInterestInner);
            }}
            style={styles.row}
          >
            <SVGICON.minus />

            <Text style={styles.labelplus}>Show Less</Text>
          </Pressable>
        )}

        {addInterestInner && (
          <View>
            <Input
              w={{
                base: "100%",
                md: "25%",
              }}
              borderColor={ColorsTheme.grey}
              placeholderTextColor={ColorsTheme.grey}
              fontFamily={fonts.regular}
              fontSize={14}
              padding={3}
              InputRightElement={
                <Text
                  style={{
                    paddingRight: 10,
                    fontFamily: fonts.regular,
                    color: ColorsTheme.grey,
                  }}
                >
                  %
                </Text>
              }
              keyboardType={"number-pad"}
              placeholder="Subsequent Year"
            />

            <Input
              w={{
                base: "100%",
                md: "25%",
              }}
              borderColor={ColorsTheme.grey}
              placeholderTextColor={ColorsTheme.grey}
              fontFamily={fonts.regular}
              fontSize={14}
              padding={3}
              marginTop={5}
              InputRightElement={
                <Text
                  style={{
                    paddingRight: 10,
                    fontFamily: fonts.regular,
                    color: ColorsTheme.grey,
                  }}
                >
                  %
                </Text>
              }
              keyboardType={"number-pad"}
              placeholder="3ed Year"
            />

            <Input
              w={{
                base: "100%",
                md: "25%",
              }}
              borderColor={ColorsTheme.grey}
              placeholderTextColor={ColorsTheme.grey}
              fontFamily={fonts.regular}
              fontSize={14}
              marginTop={5}
              padding={3}
              InputRightElement={
                <Text
                  style={{
                    paddingRight: 10,
                    fontFamily: fonts.regular,
                    color: ColorsTheme.grey,
                  }}
                >
                  %
                </Text>
              }
              keyboardType={"number-pad"}
              placeholder="4th Year"
            />

            <Input
              w={{
                base: "100%",
                md: "25%",
              }}
              borderColor={ColorsTheme.grey}
              placeholderTextColor={ColorsTheme.grey}
              fontFamily={fonts.regular}
              fontSize={14}
              marginTop={5}
              padding={3}
              InputRightElement={
                <Text
                  style={{
                    paddingRight: 10,
                    fontFamily: fonts.regular,
                    color: ColorsTheme.grey,
                  }}
                >
                  %
                </Text>
              }
              keyboardType={"number-pad"}
              placeholder="5th Year"
            />

            <Input
              w={{
                base: "100%",
                md: "25%",
              }}
              borderColor={ColorsTheme.grey}
              placeholderTextColor={ColorsTheme.grey}
              fontFamily={fonts.regular}
              fontSize={14}
              padding={3}
              marginTop={5}
              InputRightElement={
                <Text
                  style={{
                    paddingRight: 10,
                    fontFamily: fonts.regular,
                    color: ColorsTheme.grey,
                  }}
                >
                  %
                </Text>
              }
              keyboardType={"number-pad"}
              placeholder="Thereafter"
            />
          </View>
        )}
        </View>}
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: ColorsTheme.white }}>
      <Header
        props={props}
        title={"Login"}
        onPress={() => {
          props.navigation.navigate("Login");
        }}
      />

      <ScrollView style={{ paddingHorizontal: 20, marginBottom: 150 }}>
        <Text style={styles.loanTap}>LOAN CALCULATOR</Text>

        <Text style={styles.label}>
          Use this calculator to estimate the monthly{"\n"}
          repayments for your loan.
        </Text>

        {renderYourLoan()}

        {renderAddLoan()}

        <Button
          title={"Calculate"}
          onPress={() => {
            props.navigation.navigate('LoanCalculationResult');
          }}
          marginTop={20}
          marginHorizontal={1}
        />
      </ScrollView>
    </View>
  );
}

export default LoanCalculator;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft :-10
  },
  loanTap: {
    color: ColorsTheme.Primary,
    fontSize: 20,
    alignSelf: "flex-start",
    fontFamily: fonts.bold,
    marginTop: 10,
  },
  btn: {
    backgroundColor: ColorsTheme.Primary,
    borderRadius: 10,
    marginTop: 10,
  },
  smallLabel: {
    paddingVertical: 10,
    color: ColorsTheme.grey,
    fontFamily: fonts.bold,
    marginTop: 15,
  },
  label: {
    fontSize: 14,
    alignSelf: "flex-start",
    fontFamily: fonts.bold,
    marginTop: 10,
  },
  labelplus: {
    fontSize: 14,
    alignSelf: "center",
    fontFamily: fonts.regular,
    marginTop: -5,
  },
  labeltag: {
    fontSize: 16,
    alignSelf: "center",
    fontFamily: fonts.regular,
    marginTop: 10,
    textAlign: "center",
    marginBottom: 50,
  },
});
