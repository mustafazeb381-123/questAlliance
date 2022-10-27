import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyPersonalProfile from './screen/MyPersonalProfile';
import LoanAproval from './screen/LoanAproval';


const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        
        <Drawer.Navigator screenOptions={{
            headerShown: false,
        }} >
            {/* <Drawer.Screen name="MyPersonalProfile" component={MyPersonalProfile} />
            <Drawer.Screen name="LoanAproval" component={LoanAproval} /> */}
                {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
            </Drawer.Navigator>
       
    );
}
