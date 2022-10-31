import {
    Alert,
    Animated,
    StyleSheet,
    Text,
    View,
    Pressable,
    ImageBackground,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import ColorsTheme from '../theme/ColorsTheme';
import SVGICON from '../theme/SVGICON';
import Header from '../component/Header';
import fonts from '../theme/fonts';
import CommonTextInput from '../component/CommonTextInput';
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider, Divider } from 'native-base';
import signature from '../theme/Images/signature.png'
import Ionicons from 'react-native-vector-icons/Ionicons'

const JointApplicationSenarioThree = (props) => {
    

    const navigation = useNavigation()
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
                    {lineDraw(ColorsTheme.Primary)}
                    {lineDraw('grey')}

                </View>

                <View style={{ padding: 16 }}>
                    <Text style={styles.blacktitle}>Applicant(s) Confirmation & Decalaration</Text>

                    <Divider my="5" />

                    <Text style={{ paddingTop: 20, fontFamily: fonts.semibold, fontSize: 10 }}>

                        1. Any references herein to “you” or “Quest Alliance” shall mean Quest Alliance Pte Ltd.
                    </Text>
                    <Text style={{ paddingTop: 20, fontFamily: fonts.semibold, fontSize: 10 }}>

                        2. You are authorised to accept, rely and act in accordance with this application received via email, facsimile transmission or any other form of electronic communication without waiting for the original application. In consideration of Quest Alliance agreeing to act in the manner set out in this Clause, I/we agree to indemnify Quest Alliance against all liabilities, claims, losses, damages, costs (including legal costs), which Quest Alliance may incur or suffer directly or indirectly as a result of or arising from Quest Alliance agreeing to so act.
                    </Text>
                    
                    <Text style={{ paddingTop: 20, fontFamily: fonts.semibold, fontSize: 10 }}>


                        3. I/We declare that the information provided herein is true, complete and accurate. I/We shall immediately inform you if any of the information changes.
                    </Text>
                    <Text style={{ paddingTop: 20, fontFamily: fonts.semibold, fontSize: 10 }}>
                        4. I/We declare that the Property is not or will not be acquired by me/us by way of gift or unfair preference, or at an undervalue.
                    </Text>
                    <Text style={{ paddingTop: 20, fontFamily: fonts.semibold, fontSize: 10 }}>

                        5. I am/We are the borrower(s) of the facility and shall only use the facility for legal purposes.
                    </Text>
                    <Text style={{ paddingTop: 20, fontFamily: fonts.semibold, fontSize: 10 }}>
                        6. I/We confirm that at the time of this application, I am not/neither of us is an undischarged bankrupt and no statutory demand or legal proceedings has been served on or commenced against me/us.
                    </Text>
                    <Text style={{ paddingTop: 20, fontFamily: fonts.semibold, fontSize: 10 }}>
                        7. I/We agree to be bound by the Standard Terms and Conditions Applicable to Banking Facilities Granted by Quest Alliance Pte Ltd Secured by Mortgage of Residential Property and/or Commercial Property, a copy of which is available on www.questalliance.com.sg.
                    </Text>
                    <Text style={{ paddingTop: 20, fontFamily: fonts.semibold, fontSize: 10 }}>
                        8. I/We agree to be bound by the terms of the Quest Alliance Privacy Policy, a copy of which can be found on www.questalliance.com/privacy.
                    </Text>
                    <Text style={{ paddingTop: 20, fontFamily: fonts.semibold, fontSize: 10 }}>
                        9. For the purpose of this application I/We hereby authorise you to obtain and verify any
                        information about me/us and consent to your disclosure of this information to any third party. This includes you conducting checks on me/us with credit bureau, financial institutions and credit/charge card issuers, government bodies and my/our employer(s).
                    </Text>
                    <Text style={{ paddingTop: 20, fontFamily: fonts.semibold, fontSize: 10 }}>
                        10. For Refinancing of facility:
                        i. Where I am/we are applying for a refinancing facility in respect of any balance outstanding under a loan for the purchase of a residential property or the balance outstanding under a refinancing facility in respect of that residential property, I/we acknowledge that you will not be able to grant to me/us a loan tenure in respect of the refinancing facility that exceeds 35 years (“Refinancing Tenure”). The Refinancing Tenure is arrived at by taking the sum of the tenure of the refinancing facility and the number of years since the first disbursement of that residential property loan first granted to me/us for the purchase of that residential property.
                        ii. Where I am/we are applying for a refinancing facility in respect of a residential property that can qualify for the exceptions under paragraph 23A or 24A of MAS Notice 632 dated 27 August 2013 (and as may be replaced, supplemented or amended from time to time), I/we declare and confirm that the residential property is for the occupation of one or more persons which includes me/us.
                        iii. I/We agree to provide you with copies of all such documents that you may require for the above.
                    </Text>
                    <Text style={{ paddingTop: 20, fontFamily: fonts.semibold, fontSize: 10 }}>
                        11. I/We have provided to you all sources of Gross Monthly Income (as defined in MAS Notice 645 dated 28 June 2013 and as may be replaced, supplemented or amended from time to time) earned in the preceding 12 month period from the date herein, and all sources of Eligible Financial Assets (as defined in MAS Notice 645 dated 28 June 2013 and as may be replaced, supplemented or amended from time to time).
                    </Text>
                    <Text style={{ paddingTop: 20, fontFamily: fonts.semibold, fontSize: 10 }}>
                        12. I/We have provided to you information on all Relevant Credit Facility(ies) including Credit Facilities that I am/we are applying for or have applied for in the last six months but have not yet been approved as at the date herein, that are in my name or held jointly with any person(s) or entity(ies).
                    </Text>
                    <Text style={{ paddingTop: 20, fontFamily: fonts.semibold, fontSize:10}}>
                        13. Where any facility or refinancing of facility is to be secured by a residential property in Singapore for which the facility or refinancing facility (as the case may be) is to be granted, I/we declare that all person(s) applying for the facility or refinancing of facility (as the case may be) herein is/are mortgagor(s) of that residential property in Singapore to be used to secure the facility.
                    </Text>

                </View>

                <View style={{width:'100%', justifyContent:'center', paddingStart:20}}>
                    <Text style={{fontFamily:fonts.bold, fontSize:20}}>

                    Mian Application
                    </Text>
                </View>

                <View style={styles.signatureView}>
                    <View style={styles.signatureinner}>
                        <Image source={signature} />
                    </View>
                </View>

                <View style={styles.signaturebuttonView}>
                    <TouchableOpacity style={{
                        backgroundColor: '#2662b0', height: 45, width: 234, flexDirection: 'row', justifyContent: 'space-around',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                        borderRadius:5
                    }}>
                        <Text style={{color:'white', fontSize:18, fontFamily:fonts.regular}}>
                            Upload signature
                        </Text>
                        <Ionicons name="cloud-upload-outline" size={20}  color="white"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomButton}>
                    <TouchableOpacity onPress={()=> navigation.goBack()} style={{
                        backgroundColor: '#2662b0', height: 45, width: 150, justifyContent: 'center', alignItems: 'center', borderRadius:5
                    }}>
                        <Text style={{ color: 'white', fontSize: 18, fontFamily: fonts.regular }}>
                            Back
                        </Text>
                     
                    </TouchableOpacity>


                    <TouchableOpacity onPress={()=> navigation.navigate('JointApplicationSenarioFour')} style={{
                        backgroundColor: '#2662b0', height: 45, width: 150, justifyContent:'center', alignItems:'center', borderRadius:5
                    }}>
                        <Text style={{ color: 'white', fontSize: 18, fontFamily: fonts.regular }}>
                            Continue
                        </Text>
                      
                    </TouchableOpacity>
                </View>
                
                </ScrollView>

                    </View>
                    )


}

const styles = StyleSheet.create({
    bottomButton: {
        width: '100%', 
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal:20,
        alignItems: "center",
        marginTop:20
        
    }, 
    signaturebuttonView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 45, marginTop: 15,
        paddingEnd: 20
    },
    signatureinner: {
        
        borderWidth: 1,
        borderRadius: 5, 
        height: 240,
        width: '90%',
        justifyContent: "center",
        alignItems:'center'

    },
    signatureView: {
        marginTop:15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      

    },
    
    blacktitle: {
        color: 'black',
        fontSize: 26,
        fontFamily: fonts.bold,
    },
})

export default () => {
    return (
        <NativeBaseProvider >
            <JointApplicationSenarioThree />
        </NativeBaseProvider>
    )
}