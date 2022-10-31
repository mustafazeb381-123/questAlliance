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
import React, { useEffect, useState } from 'react';

import ColorsTheme from '../theme/ColorsTheme';
import SVGICON from '../theme/SVGICON';
import Header from '../component/Header';
import fonts from '../theme/fonts';
import CommonTextInput from '../component/CommonTextInput';
import CommonDropdown from '../component/CommonDropdown';
import { useNavigation } from '@react-navigation/native';
// const Tab = createMaterialBottomTabNavigator();

function JointApplicationSenario(props) {
  const navigation = useNavigation();



  const [name, setname] = useState('');
  const [Birth, setBirth] = useState('');
  const [Address, setAddress] = useState('');
  const [mob, setmob] = useState('');
  const [home, sethome] = useState('');
  const [Office, setOffice] = useState('');
  const [Email, setEmail] = useState('');
  const [Mailing, setMailing] = useState('');
  const [Passport, setPassport] = useState('');

  const lineDraw = (color) => {
    return (
      <View
        style={{
          width: 30,
          maxWidth: 30,
          minHeight: 5,
          marginRight: 20,
          backgroundColor: color,
        }}
      ></View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header
        props={props}
        back={true}
        headerTitle={'Mortgage Loan'}
        backonPress={() => {
          props.navigation.pop();
        }}
      />
      <ScrollView style={{ marginBottom: 10 }}>
        <View
          style={{
            padding: 16,
            flex: 1,
          }}
        >
          <Text style={styles.title}>MORTGAGE LOAN APPLICATION FORM</Text>
        </View>
        <View
          style={{
            marginStart: 20,
            flexDirection: 'row',
          }}
        >
          {lineDraw(ColorsTheme.Primary)}
          {lineDraw('grey')}
          {lineDraw('grey')}
          {lineDraw('grey')}
          
        </View>

        <View style={{ padding: 16 }}>
          <Text style={styles.blacktitle}>Personal Particulars</Text>

          <CommonDropdown
            PlaceHolder={'MR '}
            marginTop={10}
            headerTitle={'Saluatation: *'}
            marginStart={1}
            data={''}
          />

          <CommonTextInput
            PlaceHolder={'Name'}
            marginTop={10}
            headerTitle={'Full Name as in NRIC/Passport: *(underline surname)'}
            marginStart={1}
            data={name}
            updateMasterState={(name, value) => {
              setname(value);

              // if (value == '') {
              //   this.setState({
              //     errorEmailAddress: ErrorMessages.emailId.empty,
              //   });
              // } else {
              //   this.setState({errorEmailAddress: ''});
              // }
            }}
          />

          <CommonTextInput
            PlaceHolder={'Date of Birth '}
            marginTop={10}
            headerTitle={'Date of Birth:'}
            marginStart={1}
            data={Birth}
            updateMasterState={(name, value) => {
              setBirth(value);
            }}
          />
          <CommonTextInput
            PlaceHolder={'NRIC/Passport No '}
            marginTop={10}
            headerTitle={'NRIC/Passport No.'}
            marginStart={1}
            data={Passport}
            updateMasterState={(name, value) => {
              setPassport(value);
            }}
          />
          <CommonDropdown
            PlaceHolder={'Nationality/Citizenship'}
            marginTop={10}
            headerTitle={'Nationality/Citizenship:'}
            marginStart={1}
            data={''}
          />

          <CommonDropdown
            PlaceHolder={'Marital Status'}
            marginTop={10}
            headerTitle={'Marital Status:'}
            marginStart={1}
            data={''}
          />
          <CommonTextInput
            PlaceHolder={'Residential Address '}
            marginTop={10}
            headerTitle={
              'Residential Address (P.O Box, V-Box & C/O addresses are not allowed):'
            }
            marginStart={1}
            data={Address}
            updateMasterState={(name, value) => {
              setAddress(value);
            }}
          />
          <CommonTextInput
            PlaceHolder={'Mailing Address'}
            marginTop={10}
            headerTitle={
              'Mailing Address (complete if different from Residential Address)'
            }
            marginStart={1}
            data={Mailing}
            updateMasterState={(name, value) => {
              setMailing(value);
            }}
          />
          <CommonDropdown
            PlaceHolder={'Residential Status'}
            marginTop={10}
            headerTitle={'Residential Status:'}
            marginStart={1}
            data={''}
          />
          <CommonTextInput
            PlaceHolder={'Mobile No'}
            marginTop={10}
            headerTitle={'Mobile No:'}
            marginStart={1}
            data={mob}
            updateMasterState={(name, value) => {
              setmob(value);
            }}
          />
          <CommonTextInput
            PlaceHolder={'-'}
            marginTop={10}
            headerTitle={'Home No:'}
            marginStart={1}
            data={home}
            updateMasterState={(name, value) => {
              sethome(value);
            }}
          />
          <CommonTextInput
            PlaceHolder={'- '}
            marginTop={10}
            headerTitle={'Office No:'}
            marginStart={1}
            data={Office}
            updateMasterState={(name, value) => {
              setOffice(value);
            }}
          />
          <CommonTextInput
            PlaceHolder={'Email address'}
            marginTop={10}
            headerTitle={'Email address:'}
            marginStart={1}
            data={Email}
            updateMasterState={(name, value) => {
              setEmail(value);
            }}
          />

          <Pressable
            style={styles.btn}
            onPress={() => {
              props.navigation.navigate('JointApplicationSenarioTwo');
            }}
          >
            <Text style={styles.btntitle}> {'Next'}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default JointApplicationSenario;

const styles = StyleSheet.create({
  title: {
    color: ColorsTheme.Primary,
    fontSize: 28,
    marginTop: 10,
    fontFamily: fonts.bold,
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
    backgroundColor: ColorsTheme.Primary,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginTop: 25,
    marginEnd: 10,
  },
  btntitle: {
    color: 'white',
    paddingVertical: 15,
    fontFamily: fonts.bold,
    fontSize: 18,
    paddingHorizontal: 40,
  },
  choosetext: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: 'white',
    paddingVertical: 10,
  },
  blacktitle: {
    color: 'black',
    fontSize: 26,
    fontFamily: fonts.bold,
  },
  blacksubTitle: {
    color: 'black',
    fontSize: 16,
    marginTop: 15,
    fontFamily: fonts.regular,
  },
});
