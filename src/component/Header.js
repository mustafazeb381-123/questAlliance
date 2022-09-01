
import {
    Alert,
    Animated,
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';
import * as React from 'react';
import ColorsTheme from '../theme/ColorsTheme';
import SVGICON from '../theme/SVGICON';
import Button from './Button';

// const Tab = createMaterialBottomTabNavigator();

function Header(props) {
    return (
        <View style={{  flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}}>
           <SVGICON.QuestAllianceLogo />
           <Button props={props} title={props.title} onPress={() => {props.onPress()}}
           />
        </View>
    );
}


export default Header