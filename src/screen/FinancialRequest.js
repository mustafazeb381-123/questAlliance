import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";

import ColorsTheme from "../theme/ColorsTheme";
import SVGICON from "../theme/SVGICON";
import Header from "../component/Header";
import fonts from "../theme/fonts";
import CommonTextInput from "../component/CommonTextInput";
import CommonDropdown from "../component/CommonDropdown";
import CheckBoxText from "../component/CheckBoxText";
import {
  NativeBaseProvider,
  Select,
  Center,
  Box,
  CheckIcon,
  Checkbox,
  Input,
  HStack,
} from "native-base";

import InputwithLable from "../component/InputwithLable";
import InputWithBottomLable from "../component/InputWithBottomLable";
import { useNavigation } from "@react-navigation/native";

function FinancialRequest(props) {

  const navigation = useNavigation();
  const [tabName, setTabName] = React.useState("");

  const [isChecked, setIsChecked] = React.useState(false);

  const [service, setService] = React.useState("");
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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        props={props}
        back={true}
        headerTitle={"Mortgage Loan"}
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
            flexDirection: "row",
          }}
        >
          {lineDraw(ColorsTheme.Primary)}
          {lineDraw(ColorsTheme.Primary)}
          {lineDraw(ColorsTheme.Primary)}
          {lineDraw(ColorsTheme.Primary)}
          {lineDraw(ColorsTheme.Primary)}
          {lineDraw("grey")}
          {lineDraw("grey")}
        </View>

        <View style={{ padding: 16 }}>
          <Text style={styles.blacktitle}>FinancialRequest</Text>

          <Center>
            <Box w="100%" pt="5">
              <Select
                selectedValue={service}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Select One"
                placeholderTextColor="black"
                fontSize="22"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon name="caretdown" size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item
                  label="Purchase of Completed/
Uncompleted Properties"
                  value="Purchase of Completed/
Uncompleted Properties"
                  onPress={() => setTabName("tab-1")}
                />
                <Select.Item
                  label="Benefits Received"
                  value="Benefits Received"
                  onPress={() => setTabName("tab-2")}
                />
                <Select.Item
                  label="Bridging Loan"
                  value="Bridging Loan"
                  onPress={() => setTabName("tab-3")}
                />
                <Select.Item
                  label="Refinancing of Facility"
                  value="Refinancing of Facility"
                  onPress={() => setTabName("tab-4")}
                />
                <Select.Item
                  label="Additional Facility"
                  value="Additional Facility"
                  onPress={() => setTabName("tab-5")}
                />

                <Select.Item
                  label="Construction Loan"
                  value="Construction Loan"
                  onPress={() => setTabName("tab-6")}
                />
              </Select>
            </Box>
          </Center>

          {tabName == "tab-1" && (
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
                          <View>
                              
                              <Text
                                  style={{
                                      fontSize: 18,
                                      fontFamily: fonts.semibold,
                                      color: "black",
                                      paddingVertical:10
                                  }}
                              >
                                 Purchase Completed/{'\n'}Uncompleted Properties
                              </Text>
                <View>
                  <InputwithLable title={"Loan amount:"} />
                </View>
                <View style={styles.marginall}></View>
                {/* <View>
                                        <InputwithLable title={"Loan period:"} />
                                    </View> */}
                <View style={{ marginVertical: 10 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: fonts.semibold,
                      color: "black",
                      paddingVertical: 7,
                    }}
                  >
                    Loan Period
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Input
                      w="30%"
                      placeholder="enter value"
                      title=""
                      borderColor="black"
                    >
                      2
                    </Input>
                    <Text style={{ fontSize: 14, fontFamily: fonts.regular }}>
                      years
                    </Text>
                    <Input
                      borderColor="black"
                      w="30%"
                      placeholder="enter value"
                    >
                      6
                    </Input>
                    <Text style={{ fontSize: 14, fontFamily: fonts.regular }}>
                      Months
                    </Text>
                  </View>
                </View>
                <Text style={{ paddingVertical: 10 }}>
                  Do you want to use CPF for monthly Installament?
                </Text>
                <View style={styles.marginall}></View>
                <View style={styles.marginall}></View>
                <View
                  style={{
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ width: "50%" }}>
                    <View style={{ flexDirection: "row" }}>
                      <Checkbox
                        shadow={2}
                        value="one"
                        accessibilityLabel="This is a dummy checkbox"
                        defaultIsChecked
                        colorScheme="green"
                      />
                      <Text
                        style={{
                          fontFamily: fonts.light,
                          color: ColorsTheme.grey,
                          fontSize: 18,
                          paddingLeft: 15,
                          marginTop: -5,
                        }}
                      >
                        Yes
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: "50%" }}>
                    <View style={{ flexDirection: "row" }}>
                      <Checkbox
                        shadow={2}
                        value="two"
                        accessibilityLabel="This is a dummy checkbox"
                      />
                      <Text
                        style={{
                          fontFamily: fonts.light,
                          color: ColorsTheme.grey,
                          fontSize: 18,
                          paddingLeft: 15,
                          marginTop: -5,
                        }}
                      >
                        No
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.marginall}></View>
                <View>
                  <InputwithLable title={"CPF for Stamp/Leagal Fees (S$)"} />
                </View>

                <View style={styles.marginall}></View>
                <View>
                  <InputwithLable
                    title={"CPF Initial Lupsum withdrawal (S$)"}
                  />
                </View>
              </View>
            </View>
          )}

          {tabName == "tab-2" && (
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: fonts.semibold,
                    color: "black",
                  }}
                >
                  Benifit Received
                </Text>
                <View style={{ marginVertical: 8 }}>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 14,
                      fontFamily: fonts.regular,
                      paddingTop: 10,
                    }}
                  >
                    Did you receive any benefits or does your property come with
                    any complimentary items from the developer, vendor or any
                    party? Examples of benefits include discounts, rebates,
                    gifts, reward points from any merchant, interest payment
                    arrangements, furniture or any form of movable household
                    appliances.
                  </Text>
                </View>

                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                                      <Checkbox
                                          shadow={2}
                                          value="one"
                                          accessibilityLabel="This is a dummy checkbox"
                                          
                                          colorScheme="green"
                                      />
                    <Text
                      style={{
                        color: "black",
                        fontSize: 14,
                        fontFamily: fonts.regular,
                        paddingStart: 10,
                      }}
                    >
                      No, I/we did not receive any benifit(s)
                    </Text>
                  </View>

                  <View style={{ marginVertical: 23 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                                          <Checkbox
                                              shadow={2}
                                              value="two"
                                              accessibilityLabel="This is a dummy checkbox"
                                              defaultIsChecked
                                              colorScheme="green"
                                          />
                      <View>
                        <Text
                          style={{
                            color: "black",
                            fontSize: 14,
                            fontFamily: fonts.regular,
                            paddingStart: 10,
                          }}
                        >
                                                  Yes, amount/value of item that S$____
                        </Text>
                        {/* <View style={{ flexDirection: 'row', marginLeft: 22, alignContent: 'center', alignItems: 'center' }}>
                                        <Text>I have receive is S$</Text>
                                        <TextInput placeholder='10'></TextInput>
                                    </View> */}
                      </View>
                    </View>
                  </View>

                  <View style={{ marginVertical: 4 }}>
                                      <Text>Item Received:</Text>
                                      <View style={{justifyContent:'flex-start', alignItems:'flex-start'}}>
                                      <Center>
                                          <Box  w="244" pt="2">
                                              <Select
                                                  selectedValue={service}
                                                  minWidth="200"
                                                  accessibilityLabel="Choose Service"
                                                  placeholder="Lucky Draw"
                                                  placeholderTextColor="black"
                                                  fontSize="16"
                                                  _selectedItem={{
                                                      bg: "teal.600",
                                                      endIcon: <CheckIcon name="caretdown" size="5" />,
                                                  }}
                                                  mt={1}
                                                  onValueChange={(itemValue) => setService(itemValue)}
                                              >
                                                  <Select.Item
                                                      label="Purchase of Completed/
Uncompleted Properties"
                                                      value="Purchase of Completed/
Uncompleted Properties"
                                                     
                                                  />
                                                  <Select.Item
                                                      label="Benefits Received"
                                                      value="Benefits Received"
                                                     
                                                  />
                                                  <Select.Item
                                                      label="Bridging Loan"
                                                      value="Bridging Loan"
                                                      
                                                  />
                                                  <Select.Item
                                                      label="Refinancing of Facility"
                                                      value="Refinancing of Facility"
                                                     
                                                  />
                                                  <Select.Item
                                                      label="Additional Facility"
                                                      value="Additional Facility"
                                                     
                                                  />

                                                  <Select.Item
                                                      label="Construction Loan"
                                                      value="Construction Loan"
                                                      onPress={() => setTabName("tab-6")}
                                                  />
                                              </Select>
                                          </Box>
                                          </Center>
                                      </View>
                    {/* <View
                      style={{
                        width: "60%",
                        height: 56,
                        borderWidth: 0.9,
                        borderRadius: 10,
                      }}
                    ></View> */}
                  </View>
                </View>
              </View>
            </View>
          )}

          {tabName == "tab-3" && (
            <View style={{width:'100%'}}>
              <View style={{marginTop:10}}>
                              <Text style={{
                                  fontSize: 18,
                                  fontFamily: fonts.semibold,
                                  color: "black",}}>Bridging Loan</Text>
              </View>

              <View style={{ marginVertical: 8 }}>
                <View style={{ marginVertical: 8 }}>
                  <Text style={{fontSize:14, fontFamily:fonts.semibold, color:'black'}}>Moad of Bridging Loan Payment</Text>
                </View>

                <View style={{ flexDirection: "row" , alignItems:'center'}}>
                                  <Checkbox
                                      shadow={2}
                                      value="one"
                                      accessibilityLabel="This is a dummy checkbox"
                                     defaultIsChecked
                                      colorScheme="green"
                                  />
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                      
                      fontSize: 14,
                      paddingLeft: 15,
                     color:'black', paddingTop:5
                    }}
                  >
                    CPF S$____
                  </Text>
                </View>
                <View style={{ marginVertical: 4 }}></View>

                              <View style={{ flexDirection: "row", alignItems:'center' }}>
                                  <Checkbox
                                      shadow={2}
                                      value="two"
                                      accessibilityLabel="This is a dummy checkbox"
                                    //   defaultIsChecked
                                      colorScheme="green"
                                  />
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                     
                      fontSize: 14,
                                          paddingLeft: 15,
                      color:'black'
                      
                    }}
                  >
                    Cash S$____
                  </Text>
                </View>
              </View>

              <View style={{ marginVertical: 8 }}>
                <InputwithLable title={"Bridging Loan amount"} />
              </View>

              <View style={{ marginVertical: 8 }}>
                <View style={{ marginVertical: 8 }}>
                                  <Text style={{ fontSize: 14, fontFamily: fonts.semibold, color: 'black' }}>Moad of Bridging Loan Payment</Text>
                </View>

                <View style={{ flexDirection: "row" , alignItems:'center'}}>
                                  <Checkbox
                                      shadow={2}
                                      value="one"
                                      accessibilityLabel="This is a dummy checkbox"
                                        defaultIsChecked
                                      colorScheme="green"
                                  />
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                     
                      fontSize: 14,
                      paddingLeft: 15,
                     color:'black'
                    }}
                  >
                    Private property
                  </Text>
                </View>
                <View style={{ marginVertical: 4 }}></View>

                <View style={{ flexDirection: "row", alignItems:'center' }}>
                                  <Checkbox
                                      shadow={2}
                                      value="two"
                                      accessibilityLabel="This is a dummy checkbox"
                                      //   defaultIsChecked
                                      colorScheme="green"
                                  />
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                     
                      fontSize: 14,
                      paddingLeft: 15,
                     color:'black'
                    }}
                  >
                    Exec.Appartment/Maisonette
                  </Text>
                </View>

                <View style={{ marginVertical: 4 }}></View>

                <View style={{ flexDirection: "row", alignItems:'center' }}>
                                  <Checkbox
                                      shadow={2}
                                      value="three"
                                      accessibilityLabel="This is a dummy checkbox"
                                      //   defaultIsChecked
                                      colorScheme="green"
                                  />
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                      
                      fontSize: 14,
                      paddingLeft: 15,
                    color:'black'
                    }}
                  >
                    HBD
                  </Text>
                </View>
              </View>

              <View>
                <InputwithLable title={"Address of properti to be sold<"} />
              </View>

              <View>
                <InputwithLable title={"Selling pricese (S$)"} />
              </View>

              <View style={{alignItems:'center'}}>
                <InputWithBottomLable
                  title={"Outstanding loan (incl. undisburesed) (S$)"}
                />
              </View>
            </View>
          )}

          {tabName == "tab-4" && (
            <View style={{marginTop:20}}>
              <View style={styles.marginall}>
                              <Text style={{
                                  fontSize: 18,
                                  fontFamily: fonts.semibold,
                                  color: "black",
                              }}>Refinancing of facility</Text>
              </View>

              <View>
                <InputwithLable title={"Existing finacier"} />
              </View>

              <View>
                <InputWithBottomLable
                  title={"Outstanding loan (incl. undisburesed) (S$)"}
                />
              </View>
              <View style={{ marginVertical: 8 }}>
                <Text style={{fontSize:14, fontFamily:fonts.regular, color:'black', paddingVertical:10}}>
                  What is the amount of the exisitng Overdraft to be converted
                  to Term Loan?
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ width: "50%" }}>
                    <View style={{ flexDirection: "row", alignItems:'center' }}>
                                          <Checkbox
                                              shadow={2}
                                              value="one"
                                              accessibilityLabel="This is a dummy checkbox"
                                           defaultIsChecked
                                              colorScheme="green"
                                          />
                      <Text
                        style={{
                          fontFamily: fonts.regular,
                         
                          fontSize: 14,
                          paddingLeft: 15,
                         color:'black'
                        }}
                      >
                        Yes
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: "50%" }}>
                    <View style={{ flexDirection: "row" , alignItems:'center'}}>
                                          <Checkbox
                                              shadow={2}
                                              value="two"
                                              accessibilityLabel="This is a dummy checkbox"
                                            
                                              colorScheme="green"
                                          />
                      <Text
                        style={{
                          fontFamily: fonts.regular,
                        
                          fontSize: 14,
                          paddingLeft: 15,
                         color:'black'
                        }}
                      >
                        No
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ marginVertical: 8 }}>
                <Text style={{fontSize:14, fontFamily:fonts.semibold, color:"black", paddingVertical:10}}>Types of facility</Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ width: "60%" }}>
                    <View style={{ flexDirection: "row", alignItems:'center' }}>
                                          <Checkbox
                                              shadow={2}
                                              value="one"
                                              accessibilityLabel="This is a dummy checkbox"
                                              defaultIsChecked

                                              colorScheme="green"
                                          />
                      <Text
                        style={{
                          fontFamily: fonts.regular,
                          color:'black',
                          fontSize: 14,
                          paddingLeft: 15,
                         
                        }}
                      >
                        Housing / Term loan
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: "40%" }}>
                    <View style={{ flexDirection: "row" }}>
                                          <Checkbox
                                              shadow={2}
                                              value="two"
                                              accessibilityLabel="This is a dummy checkbox"
                                              colorScheme="green"
                                          />
                      <Text
                        style={{
                          fontFamily: fonts.regular,
                          color:"black",
                          fontSize: 14,
                          paddingLeft: 15,
                         
                        }}
                      >
                        Overdraft
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <InputWithBottomLable title={"Outstanding loan  period  "} />
              </View>
            </View>
          )}

          {tabName == "tab-5" && (
            <View style={{width:'100%', marginTop:20}}>
              <View>
                              <Text style={{
                                  fontSize: 18,
                                  fontFamily: fonts.semibold,
                                  color: "black",
}}>Additional Facility</Text>
              </View>

              <View style={{ marginVertical: 8 }}>
                <InputwithLable title={"Terrm Loan (S$)"} />
              </View>

                          <View>
                              <Text
                                  style={{
                                      fontSize: 14,
                                      fontFamily: fonts.semibold,
                                      color: "black",
                                      paddingVertical: 7,
                                  }}
                              >
                                  Loan Period
                              </Text>
                              <View
                                  style={{
                                      flexDirection: "row",

                                      alignItems: "center",
                                  }}
                              >
                                  <Input
                                      w=" 60%"
                                      placeholder="enter value"
                                      title=""
                                      borderColor="black"
                                  >
                                      2
                                  </Input>
                                  <Text style={{ fontSize: 14, fontFamily: fonts.regular, paddingStart: 10, color: 'black' }}>
                                      years
                                  </Text>
                              </View>
                          </View>
               
                
             
              <View style={{ marginVertical: 8 }}>
                <InputwithLable title={"Others (S$)"} />
                          </View>
                          
                         

              <View style={{ marginVertical: 8 }}>
                <View style={{ marginVertical: 8 }}>
                  <Text style={{fontSize:14, fontFamily:fonts.regular, }}>
                                      I/We hereby that the funds obtained from
                                      my/our additional facility(ies) will not be used for
                                      the puruchase of residential property(ies) in
                                      Singapore. These funds will be used for:{" "}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems:'center' }}>
                                  <Checkbox
                                      shadow={2}
                                      value="one"
                                      accessibilityLabel="This is a dummy checkbox"
                                      colorScheme="green"
                                  />
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                      color:'black',
                      fontSize: 14,
                      paddingStart:18
                     
                    }}
                  >
                    Bussiness Investment
                  </Text>
                </View>
                <View style={{ marginVertical: 4 }}></View>
                <View style={{ flexDirection: "row", alignItems:'center' }}>
                                  <Checkbox
                                      shadow={2}
                                      value="two"
                                      accessibilityLabel="This is a dummy checkbox"
                                      colorScheme="green"
                                  />
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                      color:'black',
                      fontSize: 14,
                      paddingLeft: 18,
                    
                    }}
                  >
                    Repay Faciities with other bank(s)
                  </Text>
                </View>
                <View style={{ marginVertical: 4 }}></View>
                <View style={{ flexDirection: "row" , alignItems:'center'}}>
                  <Checkbox
                    isChecked={false}
                    colorScheme="green"
                    style={{ alignSelf: "center" }}
                  />
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                      color: 'black',
                      fontSize: 14,
                      paddingLeft: 18,
                    
                    }}
                  >
                    Investment in Financial insturments
                  </Text>
                </View>
                <View style={{ marginVertical: 4 }}></View>
                <View style={{ flexDirection: "row" , alignItems:'center'}}>
                                  <Checkbox
                                      shadow={2}
                                      value="three"
                                      accessibilityLabel="This is a dummy checkbox"
                                      colorScheme="green"
                                  />
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                      color: 'black',
                      fontSize: 14,
                      paddingLeft: 18,
                     
                    }}
                  >
                    Renovation
                  </Text>
                </View>
                <View style={{ marginVertical: 4 }}></View>
                <View style={{ flexDirection: "row" , alignItems:'center'}}>
                                  <Checkbox
                                      shadow={2}
                                      value="four"
                                      accessibilityLabel="This is a dummy checkbox"
                                      colorScheme="green"
                                  />
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                      color: 'black',
                      fontSize: 14,
                      paddingLeft: 18,
                      
                    }}
                  >
                    Education
                  </Text>
                </View>
                <View style={{ marginVertical: 4 }}></View>

                <View style={{ flexDirection: "row" }}>
                                  <Checkbox
                                      shadow={2}
                                      value="five"
                                      accessibilityLabel="This is a dummy checkbox"
                                      colorScheme="green"
                                  />
                  <Text
                    style={{
                      fontFamily: fonts.regular,
                      color: 'black',
                      fontSize: 14,
                      paddingLeft: 18,
                      
                    }}
                  >
                    Others____
                  </Text>
                </View>
              </View>
            </View>
          )}

          {tabName == "tab-6" && (
            <View style={{width:'100%', marginTop:20 }}>
              <View style={styles.marginall}>
                              <Text style={{
                                  fontSize: 18,
                                  fontFamily: fonts.semibold,
                                  color: "black",
                              }}>Construction Loan</Text>
              </View>

              <View>
                <InputwithLable title={"Loan amount(S$)"} />
              </View>

              <View>
                <InputWithBottomLable />
              </View>
              <View style={{ marginVertical: 8 }}>
                <Text style={{fontSize:18, fontFamily:fonts.regular, color:'black'}}>Construction Type</Text>

                <View
                  style={{
                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <View style={{ flexDirection: "row", alignItems:'center' }}>
                                          <Checkbox
                                              shadow={2}
                                              value="one"
                                              accessibilityLabel="This is a dummy checkbox"
                                              colorScheme="green"
                                              defaultIsChecked
                                          />
                      <Text
                        style={{
                          fontFamily: fonts.regular,
                          color: 'black',
                          fontSize: 14,
                          paddingLeft: 18,
                          
                        }}
                      >
                        Additions {"&"} Alterations
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: "80%", marginVertical: 8 }}>
                    <View style={{ flexDirection: "row", alignItems:'center' }}>
                                          <Checkbox
                                              shadow={2}
                                              value="two"
                                              accessibilityLabel="This is a dummy checkbox"
                                              colorScheme="green"
                                          />
                      <Text
                        style={{
                          fontFamily: fonts.regular,
                          color: 'black',
                          fontSize: 14,
                          paddingLeft: 18,
                         
                        }}
                      >
                        Reconstruction
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View>
                <InputwithLable title={"Cost of ColorsTheme(S$)"} />
              </View>

              <View>
                <InputwithLable title={"Built in area (sq ft/sq m)"} />
              </View>

              <View style={{ marginVertical: 8 }}>
                <InputwithLable title={"Proposed No. of Storey(S$"} />
              </View>

              <View>
                <InputwithLable title={"Expected TOP Date"} />
              </View>
              <View style={{ marginVertical: 8 }}>
                <InputwithLable title={"Expected CSC Date"} />
              </View>
            </View>
          )}

          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={styles.btnstart}
              onPress={() => {
                props.navigation.pop();
              }}
            >
              <Text style={styles.btntitle}> {"   BACK   "}</Text>
            </Pressable>
            <Pressable onPress={()=> navigation.navigate("ApplicantsConfirmation")} style={styles.btn}>
              <Text style={styles.btntitle}> {"CONTINUE"}</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <FinancialRequest />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  textlbl: {
    color: "black",
    fontSize: 12,
    fontFamily: fonts.semibold,
  },
  btnstart: {
    backgroundColor: ColorsTheme.Primary,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 25,
  },
  btn: {
    backgroundColor: ColorsTheme.Primary, //"#2662B070",
    borderRadius: 10,
    alignSelf: "flex-end",
    marginTop: 25,
    marginEnd: 10,
  },
  btntitle: {
    color: "white",
    paddingVertical: 15,
    fontFamily: fonts.bold,
    fontSize: 18,
    paddingHorizontal: 40,
  },
  title: {
    color: ColorsTheme.Primary,
    fontSize: 28,
    marginTop: 10,
    fontFamily: fonts.bold,
  },
  blacktitle: {
    color: "black",
    fontSize: 24,
    fontFamily: fonts.semibold,
  },
});
