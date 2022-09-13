import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import * as React from "react";
import ColorsTheme from "./theme/ColorsTheme";
import SVGICON from "./theme/SVGICON";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import HomeScreen from "./screen/HomeScreen";
import LoanCalculator from "./screen/LoanCalculator";

function IconLabelView(focused, label, ActiveIcon, DiActiveIcon) {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 30,
          alignItems: "center",
        }}
      >
        {focused ? ActiveIcon : DiActiveIcon}
      </View>
      <Text
        style={{
          color: focused ? ColorsTheme.orange : ColorsTheme.white,
          width: "100%",
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    </View>
  );
}

function BottomTab() {
  const [active, setActive] = React.useState("Home");

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <Pressable
        onPress={() => {
          setActive(selectedTab);
          navigate(routeName);
        }}
        style={{
          marginTop: routeName == "Notifications" ? 15 : 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {routeName == "Home" &&
          IconLabelView(
            routeName == active,
            routeName,
            <SVGICON.Home />,
            <SVGICON.homewhite />
          )}
        {routeName == "Calculator" &&
          IconLabelView(
            routeName == active,
            routeName,
            <SVGICON.cal />,
            <SVGICON.calYellow />
          )}
        {routeName == "Notifications" &&
          IconLabelView(
            routeName == active,
            routeName,
            <SVGICON.notificationYellow />,
            <SVGICON.bell />
          )}
        {routeName == "More" &&
          IconLabelView(
            routeName == active,
            routeName,
            <SVGICON.barYellow />,
            <SVGICON.barWhite />
          )}
      </Pressable>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      style={styles.bottomBar}
      strokeWidth={0}
      height={80}
      circleWidth={0}
      screenOptions={{
        headerShown: false,
      }}
      bgColor={ColorsTheme.Primary}
      initialRouteName="Home"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <View style={{ width: 100 }}>
          <View style={{ backgroundColor: ColorsTheme.Primary }}>
            <View
              style={[
                {
                  marginTop: -33,
                  backgroundColor:
                    selectedTab == active
                      ? ColorsTheme.darkYellow
                      : ColorsTheme.white,
                },
                styles.btnCircle,
              ]}
            >
              <Pressable
                style={{
                  justifyContent: "center",
                  margin: 10,
                  height: 60,
                  borderRadius: 50,
                  backgroundColor: ColorsTheme.yellow,
                  alignItems: "center",
                }}
                onPress={() => {
                  setActive(selectedTab);
                  navigate("CENTER");
                }}
              >
                <SVGICON.service style={{ alignSelf: "center", top: 3 }} />
              </Pressable>
            </View>
            <Text
              style={{
                backgroundColor: ColorsTheme.Primary,
                height: 20,
                color:
                  selectedTab == active
                    ? ColorsTheme.orange
                    : ColorsTheme.white,
                width: "100%",
                textAlign: "center",
              }}
            >
              Service
            </Text>
          </View>
        </View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBar.Screen
        name="Home"
        position="LEFT"
        component={HomeScreen}
      />
      <CurvedBottomBar.Screen
        name="Calculator"
        component={LoanCalculator}
        position="LEFT"
      />
      <CurvedBottomBar.Screen
        name="Service"
        component={() => (
          <View style={{ backgroundColor: "#FFEBCD", flex: 1 }} />
        )}
        position="CENTER"
      />
      <CurvedBottomBar.Screen
        name="Notifications"
        component={() => (
          <View style={{ backgroundColor: "#FFEBCD", flex: 1 }} />
        )}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="More"
        component={() => (
          <View style={{ backgroundColor: "#FFEBCD", flex: 1 }} />
        )}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
}

export default BottomTab;

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
    width: 80,
    height: 80,
    borderRadius: 80,
    alignSelf: "center",
    justifyContent: "center",
    // position:'absolute',
    top: 0,
    // backgroundColor: ColorsTheme.white,
    // marginTop: -20,
    // padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
    bottom: 10,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  img: {
    width: 30,
    height: 30,
  },
});
