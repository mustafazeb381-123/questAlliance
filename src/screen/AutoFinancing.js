import {
    Alert,
    Animated,
    StyleSheet,
    Text,
    View,
    Pressable,
    ImageBackground,
    ScrollView,
    Linking
} from "react-native";
import * as React from "react";
import ColorsTheme from "../theme/ColorsTheme";
import SVGICON from "../theme/SVGICON";
import Header from "../component/Header";
import fonts from "../theme/fonts";
import Button from "../component/Button";
// const Tab = createMaterialBottomTabNavigator();

function AutoFinacing(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header
                props={props}
                back={true}
                headerTitle={"Services"}
                backonPress={() => {
                    props.navigation.pop();
                }}
            />
            <ScrollView style={{ marginBottom: 10 }}>
                <ImageBackground source={SVGICON.HomeBanner} style={{ height: "auto" }}>
                    <View
                        style={{
                            backgroundColor: ColorsTheme.lightBlue,
                            padding: 16,
                            flex: 1,
                        }}
                    >
                        <Text style={styles.title}>
                            Auto-Financing{"\n"}
                            <Text style={{ fontSize: 20 }}>Provided by our trusted{'\n'} partners</Text>
                          
                        </Text>
                        <Text style={styles.subTitle}>
                            Autoinsure Pte Ltd is the one-stop solution for Auto-financing and
                            other associated Auto Services
                        </Text>
                        <Pressable
                            style={styles.btn}
                            onPress={() => 
                                { Linking.openURL('https://www.autoinsure.com.sg') }
                               
                            }
                        >
                            <Text style={styles.btntitle}>
                                {"GO TO OUR PARTNER'S WEBSITE"}
                            </Text>
                        </Pressable>
                    </View>
                </ImageBackground>
                <View style={{ padding: 16 }}>
                    <Text style={styles.blacktitle}>Auto-Financing</Text>
                    <Text style={styles.blacksubTitle}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default AutoFinacing;

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 28,
        marginTop: 10,
        fontFamily: fonts.regular,
    },
    titleService: {
        color: ColorsTheme.Primary,
        fontSize: 40,
        alignSelf: "center",
        padding: 20,
        fontFamily: fonts.regular,
    },
    subTitle: {
        color: "white",
        fontSize: 16,
        marginTop: 10,
        fontFamily: fonts.regular,
    },
    viewMore: {
        color: "white",
        fontSize: 16,
        fontFamily: fonts.regular,
        alignSelf: "center",
        textAlign: "center",
    },
    loanTap: {
        color: ColorsTheme.Primary,
        fontSize: 20,
        alignSelf: "center",
        fontFamily: fonts.bold,
    },
    loanTapSub: {
        color: ColorsTheme.Primary,
        fontSize: 16,
        alignSelf: "center",
        fontFamily: fonts.regular,
    },
    loanTapDesc: {
        color: "black",
        fontSize: 16,
        alignSelf: "center",
        fontFamily: fonts.regular,
        padding: 10,
    },
    btn: {
        backgroundColor: ColorsTheme.orange,
        borderRadius: 10,
        alignSelf: "flex-start",
        marginTop: 25,
        marginBottom: 20,
    },
    btntitle: {
        color: "white",
        paddingVertical: 15,
        fontFamily: fonts.bold,
        fontSize: 18,
        paddingHorizontal: 30,
    },
    choosetext: {
        fontSize: 20,
        fontFamily: fonts.bold,
        color: "white",
        paddingVertical: 10,
    },
    blacktitle: {
        color: "black",
        fontSize: 28,
        marginTop: 10,
        fontFamily: fonts.bold,
    },
    blacksubTitle: {
        color: "black",
        fontSize: 16,
        marginTop: 15,
        fontFamily: fonts.regular,
    },
});
