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
          </Stack.Navigator>
          {/* Rest of your app code */}
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
