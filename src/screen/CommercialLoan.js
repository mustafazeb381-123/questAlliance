import {
    Alert,
    Animated,
    StyleSheet,
    Text,
    View,
    Pressable,
    ImageBackground,
    ScrollView,
  } from 'react-native';
  import * as React from 'react';
  import ColorsTheme from '../theme/ColorsTheme';
  import SVGICON from '../theme/SVGICON';
  import Header from '../component/Header';
  import fonts from '../theme/fonts';
  import Button from '../component/Button';
  // const Tab = createMaterialBottomTabNavigator();
  
  function CommercialLoan(props) {
    return (
      <View style={{ flex: 1 }}>
        <Header
          props={props}
          back={true}
          headerTitle={'Services'}
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
              <Text style={styles.title}>Commercial Property & Equity Loan</Text>
              <Text style={styles.subTitle}>
                Fund or refinance your business property with the highest loan
                quantum available today. Competitive rates and fast approval
              </Text>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  props.navigation.navigate('CommercialApplicationForm');
                }}
              >
                <Text style={styles.btntitle}> {'APPLY NOW'}</Text>
              </Pressable>
            </View>
          </ImageBackground>
          <View style={{ padding: 16 }}>
            <Text style={styles.blacktitle}>
              Commercial Property & Equity Loan
            </Text>
            <Text style={styles.blacksubTitle}>
              • Access up to 130% financing for SME property loan, enjoy
              attractive interest rates and subsidies. Loans are applicable to
              commercial & industrial properties
            </Text>
            <Text style={styles.blacksubTitle}>
              • Professional advisory on loan structuring
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
  
  export default CommercialLoan;
  
  const styles = StyleSheet.create({
    title: {
      color: 'white',
      fontSize: 28,
      marginTop: 10,
      fontFamily: fonts.regular,
    },
    titleService: {
      color: ColorsTheme.Primary,
      fontSize: 40,
      alignSelf: 'center',
      padding: 20,
      fontFamily: fonts.regular,
    },
    subTitle: {
      color: 'white',
      fontSize: 16,
      marginTop: 10,
      fontFamily: fonts.regular,
    },
    viewMore: {
      color: 'white',
      fontSize: 16,
      fontFamily: fonts.regular,
      alignSelf: 'center',
      textAlign: 'center',
    },
    loanTap: {
      color: ColorsTheme.Primary,
      fontSize: 20,
      alignSelf: 'center',
      fontFamily: fonts.bold,
    },
    loanTapSub: {
      color: ColorsTheme.Primary,
      fontSize: 16,
      alignSelf: 'center',
      fontFamily: fonts.regular,
    },
    loanTapDesc: {
      color: 'black',
      fontSize: 16,
      alignSelf: 'center',
      fontFamily: fonts.regular,
      padding: 10,
    },
    btn: {
      backgroundColor: ColorsTheme.orange,
      borderRadius: 10,
      alignSelf: 'flex-start',
      marginTop: 25,
      marginBottom: 20,
    },
    btntitle: {
      color: 'white',
      paddingVertical: 15,
      fontFamily: fonts.bold,
      fontSize: 18,
      paddingHorizontal: 30,
    },
    choosetext: {
      fontSize: 20,
      fontFamily: fonts.bold,
      color: 'white',
      paddingVertical: 10,
    },
    blacktitle: {
      color: 'black',
      fontSize: 28,
      marginTop: 10,
      fontFamily: fonts.bold,
    },
    blacksubTitle: {
      color: 'black',
      fontSize: 16,
      marginTop: 15,
      fontFamily: fonts.regular,
    },
  });
  