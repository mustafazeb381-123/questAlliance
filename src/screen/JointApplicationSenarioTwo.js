import {
    Alert,
    Animated,
    StyleSheet,
    Text,
    View,
    Pressable,
    ImageBackground,
    ScrollView,
    TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import ColorsTheme from '../theme/ColorsTheme';
import SVGICON from '../theme/SVGICON';
import Header from '../component/Header';
import fonts from '../theme/fonts';
import CommonTextInput from '../component/CommonTextInput';


function JointApplicationSenarioTwo(props) {
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
                    {lineDraw(ColorsTheme.Primary)}
                    {lineDraw('grey')}
                    {lineDraw('grey')}
                   
                </View>

                <View style={{ padding: 16 }}>
                    <Text style={styles.blacktitle}>Employment</Text>

                    <CommonTextInput
                        PlaceHolder={'Employment Status'}
                        marginTop={10}
                        headerTitle={'Employment Status:'}
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
                        PlaceHolder={'Name of Company'}
                        marginTop={10}
                        headerTitle={'Name of Company:'}
                        marginStart={1}
                        data={Birth}
                        updateMasterState={(name, value) => {
                            setBirth(value);
                        }}
                    />
                    <CommonTextInput
                        PlaceHolder={'Job title / Occupation'}
                        marginTop={10}
                        headerTitle={'Job title / Occupation:'}
                        marginStart={1}
                        data={Passport}
                        updateMasterState={(name, value) => {
                            setPassport(value);
                        }}
                    />

                    <CommonTextInput
                        PlaceHolder={'Office address postal code'}
                        marginTop={10}
                        headerTitle={'Office address postal code:'}
                        marginStart={1}
                        data={Address}
                        updateMasterState={(name, value) => {
                            setAddress(value);
                        }}
                    />
                    <CommonTextInput
                        PlaceHolder={'Monthly Fixed Income (S$)'}
                        marginTop={10}
                        headerTitle={'Monthly Fixed Income (S$):'}
                        marginStart={1}
                        data={Mailing}
                        updateMasterState={(name, value) => {
                            setMailing(value);
                        }}
                    />

                    <CommonTextInput
                        PlaceHolder={'Other Monthly Income (S$)'}
                        marginTop={10}
                        headerTitle={'Other Monthly Income (S$):'}
                        marginStart={1}
                        data={mob}
                        updateMasterState={(name, value) => {
                            setmob(value);
                        }}
                    />
                    <CommonTextInput
                        PlaceHolder={'Source of Other Income (S$)'}
                        marginTop={10}
                        headerTitle={'Source of Other Income (S$):'}
                        marginStart={1}
                        data={home}
                        updateMasterState={(name, value) => {
                            sethome(value);
                        }}
                    />
                    <CommonTextInput
                        PlaceHolder={'Previous Occupation'}
                        marginTop={10}
                        headerTitle={'Previous Occupation:'}
                        marginStart={1}
                        data={Office}
                        updateMasterState={(name, value) => {
                            setOffice(value);
                        }}
                    />
                    <CommonTextInput
                        PlaceHolder={'Previous Company (if current is <1 year)'}
                        marginTop={10}
                        headerTitle={'Previous Company (if current is <1 year):'}
                        marginStart={1}
                        data={Email}
                        updateMasterState={(name, value) => {
                            setEmail(value);
                        }}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 1,
                            marginTop: 15,
                        }}
                    >
                        <View>
                            <Text style={styles.blacksubTitle}>Length of service:</Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 5,
                                }}
                            >
                                <TextInput
                                    placeholder={'PlaceHolder'}
                                    placeholderTextColor={ColorsTheme.grey}
                                    color={ColorsTheme.grey}
                                    onChangeText={(e) => { }}
                                    value={'1'}
                                    style={[styles.textinput, { minWidth: 110 }]}
                                />
                                <Text style={styles.textlbl}>Year(s)</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={styles.blacksubTitle}> </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 5,
                                }}
                            >
                                <TextInput
                                    placeholder={'PlaceHolder'}
                                    placeholderTextColor={ColorsTheme.grey}
                                    color={ColorsTheme.grey}
                                    onChangeText={(e) => { }}
                                    value={'2'}
                                    style={[styles.textinput, { minWidth: 110 }]}
                                />
                                <Text style={styles.textlbl}>Month(s)</Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 5,
                            justifyContent: 'space-between',
                        }}
                    >
                        <Pressable
                            style={styles.btnstart}
                            onPress={() => {
                                props.navigation.pop();
                            }}
                        >
                            <Text style={styles.btntitle}> {'   BACK   '}</Text>
                        </Pressable>
                        <Pressable
                            style={styles.btn}
                            onPress={() => {
                                props.navigation.navigate('JointApplicationSenarioThree');
                            }}
                        >
                            <Text style={styles.btntitle}> {'CONTINUE'}</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default JointApplicationSenarioTwo;

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
    },
    btnstart: {
        backgroundColor: ColorsTheme.Primary,
        borderRadius: 10,
        alignSelf: 'flex-start',
        marginTop: 25,
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
    textinput: {
        borderColor: ColorsTheme.grey,
        borderWidth: 1.5,
        padding: Platform.OS == 'ios' ? 10 : 5,
        borderRadius: 10,
        fontSize: 16,
        paddingStart: 15,
        padding: 15,
    },
    textlbl: {
        color: 'black',
        fontSize: 16,
        fontFamily: fonts.regular,
        alignSelf: 'center',
        marginHorizontal: 5,
    },
});
