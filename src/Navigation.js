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
            <Stack.Screen name="LoanCalculationResult" component={LoanCalculationResult} />
          </Stack.Navigator>
          {/* Rest of your app code */}
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
