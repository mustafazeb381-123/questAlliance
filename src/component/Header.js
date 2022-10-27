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
import fonts from '../theme/fonts';

// const Tab = createMaterialBottomTabNavigator();

function Header(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}
    >
      {!props.back ? (
        <SVGICON.QuestAllianceLogo />
      ) : (
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={{ alignSelf: 'center' }}
            onPress={() => {
              props.backonPress();
            }}
          >
            <SVGICON.back />
          </Pressable>
          <Text
            style={{
              alignSelf: 'center',
              color: ColorsTheme.Primary,
              fontSize: 16,
              marginLeft: 12,
              fontFamily: fonts.bold,
              width:250
            }}
          >
            {props?.headerTitle}
          </Text>
        </View>
      )}

      {props.title ? (
        <View style={{ paddingVertical: 10, marginRight: -20 }}>
          <Button
            marginHorizontal={0}
            props={props}
            title={props.title}
            onPress={() => {
              props.onPress();
            }}
          />
        </View>
      ) : (
        <SVGICON.QuestAllianceLogo
          style={{ justifyContent: 'center', margin: 10 }}
        />
      )}
    </View>
  );
}

export default Header;
