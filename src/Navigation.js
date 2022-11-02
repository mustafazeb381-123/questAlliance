import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./BottomTab";
import Login from "./screen/Login";
import { NativeBaseProvider } from "native-base";
import ForgotPassword from "./screen/FogotPassword";
import ForgotSuccess from "./screen/ForgotSuccess";
import Signup from "./screen/Signup";
import SignupSuccess from "./screen/SignupSuccess";
import LoanCalculationResult from "./screen/LoanCalculationResult";
import Screen34 from "./screen/Screen34";
import MortgageLoan from "./screen/MortgageLoan";
import PersonalparticularForm from "./screen/PersonalparticularForm";
import EmploymentForm from "./screen/EmploymentForm";
import PropertyinfoForm from "./screen/PropertyinfoForm";
import CommercialLoan from "./screen/CommercialLoan";
import CommercialApplicationForm from "./screen/CommercialApplicationForm";
import BusinessLoan from "./screen/BusinessLoan";
import BusinessForm from "./screen/BusinessForm";
import AutoLoan from "./screen/AutoLoan";
import SourceOfFund from "./screen/SourceOfFund";
import JointApplicationSenario from "./screen/JointApplicationSenario";
import JointApplicationSenarioTwo from "./screen/JointApplicationSenarioTwo";
import JointApplicationSenarioThree from "./screen/JointApplicationSenarioThree";
import JointApplicationSenarioFour from "./screen/JointApplicationSenarioFour";
import SubmitApplication from "./screen/SubmitApplication";
import AutoFinancing from "./screen/AutoFinancing";
import FinancialRequest from "./screen/FinancialRequest";
import ApplicantsConfirmation from "./screen/ApplicantsConfirmation";
import Summary from "./screen/Summary";
import MorganLoanEnd from "./screen/MorganLoanEnd";
// import DrawerNavigation from "./DrawerNavigation";
import PersonalProfileEdit from "./screen/PersonalProfileEdit";
import ApplicationStatus from "./screen/ApplicationStatus";
import PersonalAccountHeader from "./component/PersonalAccountHeader";
import ApplicationStatusHeader from "./component/ApplicationStatusHeader";
import MyPersonalProfile from "./screen/MyPersonalProfile";
import LoanAproval from "./screen/LoanAproval";
import MyLoan from "./screen/MyLoan";
import MyLoanStatus from "./screen/MyLoanStatus";
import ContactUs from "./screen/ContactUs";
import Notification from "./screen/Notification";
import NotificationStatus from "./screen/NotificationStatus";
import TermsAndCondition from "./screen/TermsAndCondition";
import PrivacyPolicy from "./screen/PrivacyPolicy";
import CorporateAccountLogin from "./screen/CorporateAccountLogin";
import CorporateAccountForgetPassword from "./screen/CorporateAccountForgetPassword";
import ResetPasswordSuccess from "./screen/ResetPasswordSuccess";
import ConfirmPassword from "./screen/ConfirmPassword";
import ResetPasswordSuccessfull from "./screen/ResetPasswordSuccessfull";
import CorporateSignup from "./screen/CorporateSignup";
import CorporateSignupSuccess from "./screen/CorporateSignupSuccess";
import Companyprofile from "./screen/Companyprofile";
import SetupCompanyProfile from "./screen/SetupCompanyProfile";
import AddNewCompany from "./screen/AddNewCompany";
import Director from "./screen/Director";
import CreateDirector from "./screen/CreateDirector";
import EditDirector from "./screen/EditDirector";
import CompletedPage from "./screen/CompletedPage";
import AddSwitchCompany from "./screen/AddSwitchCompany";
import AddSwitchOne from "./screen/AddSwitchOne";
import AddSwitchTwo from "./screen/AddSwitchTwo";
import AddSwitchThree from "./screen/AddSwitchThree";
import AddSwitchFour from "./screen/AddSwitchFour";
import ResetPersonalAccount from "./screen/ResetPersonalAccount";
import ResetPersonalAccountOne from "./screen/ResetPersonalAccountOne";
import ResetPersonalAccountTwo from "./screen/ResetPersonalAccountTwo";
import ResetPersonalAccountThree from "./screen/ResetPersonalAccountThree";



const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={BottomTab} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="SignupSuccess" component={SignupSuccess} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ForgotSuccess" component={ForgotSuccess} />
            <Stack.Screen name="Screen34" component={Screen34} />
            <Stack.Screen name="LoanCalculationResult" component={LoanCalculationResult} />
            <Stack.Screen name="CommercialLoan" component={CommercialLoan} />
            <Stack.Screen
              name="CommercialApplicationForm"
              component={CommercialApplicationForm}
            />
            <Stack.Screen name="BusinessLoan" component={BusinessLoan} />
            <Stack.Screen name="AutoLoan" component={AutoLoan} />
            <Stack.Screen name="SourceOfFund" component={SourceOfFund} />
            
            <Stack.Screen name="BusinessForm" component={BusinessForm} />

            <Stack.Screen name="MortgageLoan" component={MortgageLoan} />
            <Stack.Screen
              name="PersonalparticularForm"
              component={PersonalparticularForm}
            />
            <Stack.Screen name="EmploymentForm" component={EmploymentForm} />
            <Stack.Screen
              name="PropertyinfoForm"
              component={PropertyinfoForm}
            />

            <Stack.Screen
              name="JointApplicationSenario"
              component={JointApplicationSenario}
            />
            <Stack.Screen
              name="JointApplicationSenarioTwo"
              component={JointApplicationSenarioTwo}
            />
            <Stack.Screen
              name="JointApplicationSenarioThree"
              component={JointApplicationSenarioThree}
            />
            <Stack.Screen
              name="JointApplicationSenarioFour"
              component={JointApplicationSenarioFour}
            />
            <Stack.Screen
              name="SubmitApplication"
              component={SubmitApplication}
            />
            <Stack.Screen
              name="AutoFinancing"
              component={AutoFinancing}
            />

            <Stack.Screen
              name="FinancialRequest"
              component={FinancialRequest}
            />
            <Stack.Screen
              name="ApplicantsConfirmation"
              component={ApplicantsConfirmation}
            />

            <Stack.Screen
              name="Summary"
              component={Summary}
            />
            <Stack.Screen
              name="MorganLoanEnd"
              component={MorganLoanEnd}
            />
            {/* <Stack.Screen
              name="DrawerNavigation"
              component={DrawerNavigation}
            /> */}

            <Stack.Screen name="PersonalProfileEdit" component={PersonalProfileEdit} />
            <Stack.Screen name="ApplicationStatus" component={ApplicationStatus} />
            <Stack.Screen name="PersonalAccountHeader" component={PersonalAccountHeader} />
            <Stack.Screen name="ApplicationStatusHeader" component={ApplicationStatusHeader} />
            <Stack.Screen name="MyPersonalProfile" component={MyPersonalProfile} />
            <Stack.Screen name="LoanAproval" component={LoanAproval} />
            <Stack.Screen name="MyLoan" component={MyLoan} />
            <Stack.Screen name="MyLoanStatus" component={MyLoanStatus} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="NotificationStatus" component={NotificationStatus} />
            <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Stack.Screen name="CorporateAccountLogin" component={CorporateAccountLogin} />
            <Stack.Screen name="CorporateAccountForgetPassword" component={CorporateAccountForgetPassword} />
            <Stack.Screen name="ResetPasswordSuccess" component={ResetPasswordSuccess} />
            <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
            <Stack.Screen name="ResetPasswordSuccessfull" component={ResetPasswordSuccessfull} />
            <Stack.Screen name="CorporateSignup" component={CorporateSignup} />
            <Stack.Screen name="CorporateSignupSuccess" component={CorporateSignupSuccess} />
            <Stack.Screen name="Companyprofile" component={Companyprofile} />
            <Stack.Screen name="SetupCompanyProfile" component={SetupCompanyProfile} />
            <Stack.Screen name="AddNewCompany" component={AddNewCompany} />
            <Stack.Screen name="Director" component={Director} />
            <Stack.Screen name="CreateDirector" component={CreateDirector} />
            <Stack.Screen name="EditDirector" component={EditDirector} />
            <Stack.Screen name="CompletedPage" component={CompletedPage} />
            <Stack.Screen name="AddSwitchCompany" component={AddSwitchCompany} />
            <Stack.Screen name="AddSwitchOne" component={AddSwitchOne} />
            <Stack.Screen name="AddSwitchTwo" component={AddSwitchTwo} />
            <Stack.Screen name="AddSwitchThree" component={AddSwitchThree} />
            <Stack.Screen name="AddSwitchFour" component={AddSwitchFour} />
            <Stack.Screen name="ResetPersonalAccount" component={ResetPersonalAccount} />
            <Stack.Screen name="ResetPersonalAccountOne" component={ResetPersonalAccountOne} />
            <Stack.Screen name="ResetPersonalAccountTwo" component={ResetPersonalAccountTwo} />
            <Stack.Screen name="ResetPersonalAccountThree" component={ResetPersonalAccountThree} />

            





       
          </Stack.Navigator>
          {/* Rest of your app code */}
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
