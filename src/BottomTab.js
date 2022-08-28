
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import * as React from 'react';
import ColorsTheme from './theme/ColorsTheme';
import SVGICON from './theme/SVGICON';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';

// const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function IconLabelView(focused, label, ActiveIcon, DiActiveIcon) {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View style={{
        height: 30,
        alignItems: 'center'
      }}>
        {focused ? ActiveIcon : DiActiveIcon}
      </View>
      <Text
        style={{
          color: focused ? ColorsTheme.orange : ColorsTheme.white,
          width: '100%',
          textAlign: 'center',
        }}
      >
        {label}
      </Text>
    </View>
  );
}


const _renderIcon = (routeName, selectedTab) => {
  let icon = ''
  switch (routeName) {
    case 'Home':
      icon = 'Home';
      break;
    case 'Calculator':
      icon = 'cal';
      break;
  }
  return (
    <>
      {routeName === selectedTab ?
        <SVGICON.Home />
      :
      <SVGICON.homewhite />}
    </>
  );
};


function BottomTab() {

  const [active, setActive] = React.useState('Home')


  const renderTabBar = ({ routeName, selectedTab, navigate }) => {

    return (
      <Pressable
        onPress={() => {
          setActive(selectedTab)
          navigate(routeName)
        }}
        style={{
          // flex: 1,
          marginTop: routeName == 'Notifications' ? 15 : 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
    
        {routeName == 'Home' && IconLabelView(routeName == selectedTab, routeName, <SVGICON.Home />,<SVGICON.homewhite />)}
        {routeName == 'Calculator' && IconLabelView(routeName == selectedTab, routeName, <SVGICON.cal />,<SVGICON.calYellow />)}
        {routeName == 'Notifications' && IconLabelView(routeName == selectedTab, routeName, <SVGICON.notificationYellow />,<SVGICON.bell />)}
        {routeName == 'More' && IconLabelView(routeName == selectedTab, routeName, <SVGICON.barYellow />,<SVGICON.barWhite />)}
      </Pressable>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      style={styles.bottomBar}
      strokeWidth={0}
      height={80}
      circleWidth={55}
      bgColor={ColorsTheme.Primary}
      initialRouteName="Home"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={[{
          backgroundColor: selectedTab == active ? ColorsTheme.darkYellow : ColorsTheme.white
        }, styles.btnCircle]}>
          {console.log("selectedTab", selectedTab)}
          <Pressable
            style={{
              justifyContent: 'center',
              padding: 30,
              borderRadius: 50,
              backgroundColor: ColorsTheme.yellow,
              alignItems: 'center'
            }}
            onPress={() => {
              setActive(selectedTab)
              navigate('CENTER')
            }
            }
          >
            <SVGICON.service style={{ alignSelf: 'center', top: 3 }} />
          </Pressable>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBar.Screen
        name="Home"
        position="LEFT"
        component={() => (
          <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />
        )}
      />
      <CurvedBottomBar.Screen
        name="Calculator"
        component={() => (
          <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />
        )}
        position="LEFT"
      />
      <CurvedBottomBar.Screen
        name="Service"
        component={({ navigate }) => (
          <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />
        )}
        position="CENTER"
      />
      <CurvedBottomBar.Screen
        name="Notifications"
        component={() => (
          <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />
        )}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="More"
        component={() => (
          <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />
        )}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>

  );
}

export default BottomTab

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor: ColorsTheme.white,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
    bottom: 45,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});