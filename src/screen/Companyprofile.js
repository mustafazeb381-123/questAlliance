import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";

import fonts from "../theme/fonts";
import QuestAllianceLo from "../theme/Images/QuestAllianceLo.png";
import personalpic from "../theme/Images/personalpic.png";
import AntDesign from "react-native-vector-icons/AntDesign";

import {
  Divider,
  NativeBaseProvider,
  Icon,
  Modal,
  FormControl,
  Input,
  Label,
  Button,
  Box,
  Radio,
} from "native-base";
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import personalpic from '../theme/Images/personalpic.png'
// import fonts from '../theme/fonts'
import ApplicationStatusHeader from "../component/ApplicationStatusHeader";

import signature from "../theme/Images/signature.png";
import Ionicons from "react-native-vector-icons/Ionicons";
// import AntDesign from 'react-native-vector-icons/AntDesign'
import v1 from "../theme/Images/v1.png";
import v2 from "../theme/Images/v2.png";
import cpf from "../theme/Images/cpf.png";
import payslip from "../theme/Images/payslip.png";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Path107 from "../theme/Images/Path107.png";
import DBS from "../theme/Images/DBS.png";
import uob from "../theme/Images/uob.png";
import ocbc from "../theme/Images/ocbc.png";
import { useNavigation } from "@react-navigation/native";
import MoreHeader from "../component/MoreHeader";
import PersonalAccountHeader from "../component/PersonalAccountHeader";
import uploadpic from "../theme/Images/uploadpic.png";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Companyprofile = () => {
  const [show, setShow] = React.useState(false);

  const navigation = useNavigation();
  const [tabName, setTabName] = useState("");

  const [mainTab, setMainTab] = useState("borrowertab");

  const [placement, setPlacement] = useState(undefined);
  const [place, setPlace] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [edit, setEdit] = useState("edit-1");

  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };

  const openedModal = (place) => {
    setOpened(true);
    setPlace(place);
  };
  return (
    <View style={styles.mainView}>
      {/* header*/}

      <MoreHeader />

      <ScrollView>
        <View style={styles.mianHeading}>
          <Text
            style={{ fontFamily: fonts.bold, fontSize: 26, color: "#2662b0" }}
          >
            Company Profile
          </Text>
        </View>

        <View style={{ width: "100%", height: 80, marginTop: 20 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setMainTab("borrowertab");
                }}
              >
                <View
                  style={{
                    width: 150,
                    height: 55,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#2662b0",
                      fontFamily: fonts.bold,
                      fontSize: 20,
                    }}
                  >
                    {" "}
                    Borrower Information
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setMainTab("applicationtab");
                }}
              >
                <View
                  style={{
                    width: 150,
                    height: 55,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 10,
                  }}
                >
                  <Text style={{ fontFamily: fonts.bold, fontSize: 20 }}>
                    Application
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setMainTab("documenttab");
                }}
              >
                <View
                  style={{
                    width: 150,
                    height: 55,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 10,
                  }}
                >
                  <Text style={{ fontFamily: fonts.bold, fontSize: 20 }}>
                    Documents
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {mainTab == "borrowertab" && (
          <View style={styles.listView}>
            <View style={styles.firstlist}>
              <TouchableOpacity
                onPress={() => setTabName("tab-1")}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: fonts.regular,
                        fontSize: 16,
                      }}
                    >
                      Company Information
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "20%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <TouchableOpacity onPress={() => setTabName("tab-5")}>
                      <Feather name="edit" color="white" size={20} />
                    </TouchableOpacity>
                    <AntDesign name="caretright" size={20} color="white" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {tabName == "tab-5" && (
              <View
                style={{
                  width: "100%",
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  backgroundColor: "white",
                }}
              >
                <View style={styles.detailView}>
                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.blueText}>Full Company Name</Text>
                    <Box alignItems="center">
                      <Input
                        mx="3"
                        bg="white"
                        placeholderTextColor="black"
                        placeholder="Full Company Name"
                        w="100%"
                      />
                    </Box>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.blueText}>Incorporation Type</Text>
                    <Box alignItems="center">
                      <Input
                        mx="3"
                        bg="white"
                        placeholderTextColor="black"
                        placeholder="Incorporation Type"
                        w="100%"
                      />
                    </Box>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.blueText}>UEN</Text>
                    <Box alignItems="center">
                      <Input
                        mx="3"
                        bg="white"
                        placeholderTextColor="black"
                        placeholder="UEN"
                        w="100%"
                      />
                    </Box>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.blueText}>Nationality of Company</Text>
                    <Box alignItems="center">
                      <Input
                        mx="3"
                        bg="white"
                        placeholderTextColor="black"
                        placeholder="Nationality of Company"
                        w="100%"
                      />
                    </Box>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.blueText}>Date of Incorporation</Text>
                    <Box alignItems="center">
                      <Input
                        mx="3"
                        bg="white"
                        placeholderTextColor="black"
                        placeholder="Date Incorporation"
                        w="100%"
                      />
                    </Box>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.blueText}>Contact No</Text>
                    <Box alignItems="center">
                      <Input
                        mx="3"
                        bg="white"
                        placeholderTextColor="black"
                        placeholder="Contact No"
                        w="100%"
                      />
                    </Box>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.blueText}>Postal Code</Text>
                    <Box alignItems="center">
                      <Input
                        mx="3"
                        bg="white"
                        placeholderTextColor="black"
                        placeholder="Postal Code"
                        w="100%"
                      />
                    </Box>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.blueText}>Address</Text>
                    <Box alignItems="center">
                      <Input
                        mx="3"
                        bg="white"
                        placeholderTextColor="black"
                        placeholder="Address"
                        w="100%"
                      />
                    </Box>
                  </View>

                  <View
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 20,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => setTabName("tab-1")}
                      style={styles.editbutton}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontFamily: fonts.semibold,
                          fontSize: 14,
                        }}
                      >
                        Save
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}

            {tabName == "tab-1" && (
              <View
                style={{
                  width: "100%",
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  backgroundColor: "white",
                }}
              >
                <View style={styles.detailView}>
                  <View>
                    <Text style={styles.blackText}>Full Company Name</Text>

                    <Text style={styles.blueText}>Test Pte Ltd</Text>
                  </View>
                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.blackText}>Incorporation Type</Text>
                    <Text style={styles.blueText}>Pte Ltd</Text>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.blackText}>UEN</Text>
                    <Text style={styles.blueText}>201023709H</Text>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.blackText}>Nationality of Company</Text>
                    <Text style={styles.blueText}>Singapore</Text>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.blackText}>Date of Incorporation</Text>
                    <Text style={styles.blueText}>03/02/2010</Text>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.blackText}>Contact No.</Text>
                    <Text style={styles.blueText}>61234567</Text>
                  </View>

                  <View style={{ marginTop: 10 }}>
                    <Text style={styles.blackText}>Postal Code</Text>

                    <Text style={styles.blueText}>654321</Text>
                  </View>
                </View>
              </View>
            )}

            <View style={styles.firstlist}>
              <TouchableOpacity
                onPress={() => setTabName("tab-2")}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: fonts.regular,
                        fontSize: 16,
                      }}
                    >
                      Main Nominee - {"\n"}
                      Joe Doe's (You)
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "20%",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <AntDesign name="caretright" size={20} color="white" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {tabName == "tab-2" && (
              <View
                style={{
                  marginVertical: 10,
                  width: "100%",
                  backgroundColor: "white",
                }}
              >
                {/* <PersonalAccountHeader /> */}
                <ScrollView>
                  {/* <View style={styles.profilepicView}>
                                            <Text style={{ fontFamily: fonts.semibold, fontSize: 26, color: '#2662b0' }}>MY PROFILE</Text>
                                        </View> */}
                  <View style={styles.uploadPicView}>
                    <Image
                      style={{ height: 150, width: 150, borderRadius: 100 }}
                      source={uploadpic}
                    />

                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 38,
                        heighth: 38,
                      }}
                    >
                      <View
                        style={{
                          position: "relative",
                          bottom: 40,
                          left: 60,
                          height: 38,
                          width: 38,
                          backgroundColor: "#2662b0",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 45,
                        }}
                      >
                        <Ionicons
                          name="cloud-upload-outline"
                          size={30}
                          color="white"
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.detailView}>
                    <View>
                      <Text style={styles.blackText}>User ID</Text>

                      <Text style={styles.blueText}>00001</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>First Name</Text>
                      <Text style={styles.blueText}>John</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Last Name</Text>
                      <Text style={styles.blueText}>Deo</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Gender</Text>
                      <Text style={styles.blueText}>Male</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Country</Text>
                      <Text style={styles.blueText}>Sigapore</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Mobile No</Text>
                      <Text style={styles.blueText}>+923120993243</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Home No</Text>

                      <Text style={styles.blueText}>+92468111799</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Email</Text>

                      <Text style={styles.blueText}>
                        mustafazeb381@gmail.com
                      </Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Date of birth</Text>
                      <Text style={styles.blueText}>07/07/1999</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Password</Text>
                      <Text style={styles.blueText}>********</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Monthly Salary</Text>
                      <Text style={styles.blueText}>3000$</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blueText}>signature</Text>

                      <View style={styles.signatureView}>
                        <View style={styles.signatureinner}>
                          <Image source={signature} />
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => openModal("center")}
                        style={styles.editbutton}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontFamily: fonts.semibold,
                            fontSize: 14,
                          }}
                        >
                          Transfer to main Nominee
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <Modal
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    safeAreaTop={true}
                  >
                    <Modal.Content
                      justifyContent="center"
                      alignItem="center"
                      height="516"
                      w="80%"
                      {...styles[placement]}
                    >
                      <View
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          alignItems: "center",
                          marginVertical: 20,
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "flex-end",
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              setOpen(false);
                            }}
                          >
                            <AntDesign name="close" size={50} color="red" />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            marginTop: 15,
                            justifyContent: "center",
                            // alignItems: "center",
                            paddingHorizontal: 15,
                            width: "100%",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: fonts.bold,
                              fontSize: 25,
                              color: "#2662b0",
                            }}
                          >
                            Transfer Main Nominee
                          </Text>

                          <View>
                            <Text
                              style={{
                                fontFamily: fonts.regular,
                                fontSize: 20,
                                color: "black",
                              }}
                            >
                              Select the person you wish to
                            </Text>
                            <Text
                              style={{
                                fontFamily: fonts.regular,
                                fontSize: 20,
                                color: "black",
                              }}
                            >
                              transfer the main nominee
                            </Text>
                            <Text
                              style={{
                                fontFamily: fonts.regular,
                                fontSize: 20,
                                color: "black",
                              }}
                            >
                              title to:
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            marginTop: 20,
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <View style={{ justifyContent: "space-between" }}>
                            <Radio.Group
                              style={{
                                justifyContent: "space-between",
                                height: 100,
                              }}
                              defaultValue="2"
                              name="exampleGroup"
                              accessibilityLabel="select prize"
                            >
                              <View
                                style={{
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  width: 300,
                                }}
                              >
                                <Text
                                  style={{
                                    fontSize: 20,
                                    fontFamily: fonts.semibold,
                                    color: "#2662b0",
                                  }}
                                >
                                  Director 1 -{"\n"}
                                  Darren Tan Hong Wei
                                </Text>

                                <Radio value="1" my={1} isDisabled></Radio>
                              </View>
                              <View
                                style={{
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  width: 300,
                                  marginTop: 10,
                                }}
                              >
                                <Text
                                  style={{
                                    fontSize: 20,
                                    fontFamily: fonts.semibold,
                                    color: "#2662b0",
                                  }}
                                >
                                  Director 2 -{"\n"}
                                  Jane Doe
                                </Text>
                                <Radio value="2" my={1}></Radio>
                              </View>
                              {/* <Radio value="3" my={1}>
                                                          Third
                                                      </Radio> */}
                            </Radio.Group>
                          </View>
                        </View>

                        <View
                          style={{
                            paddingTop: 120,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              setOpen(false), openedModal("center");
                            }}
                            style={{
                              height: 50,
                              width: 242,
                              backgroundColor: "#2662b0",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 10,
                            }}
                          >
                            <Text
                              style={{
                                color: "white",
                                fontFamily: fonts.regular,
                                fontSize: 18,
                              }}
                            >
                              Submit Transfer require
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Modal.Content>
                  </Modal>

                  <Modal
                    isOpen={opened}
                    onClose={() => setOpened(false)}
                    safeAreaTop={true}
                  >
                    <Modal.Content
                      justifyContent="center"
                      alignItem="center"
                      w="80%"
                      {...styles[placement]}
                    >
                      <View
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          alignItems: "center",
                          marginVertical: 20,
                        }}
                      >
                        <AntDesign
                          name="checkcircleo"
                          size={83}
                          color="#00b900"
                        />

                        <View
                          style={{
                            marginTop: 15,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: fonts.bold,
                              fontSize: 30,
                              color: "#00b900",
                            }}
                          >
                            You have requested
                          </Text>
                          <Text
                            style={{
                              fontFamily: fonts.bold,
                              fontSize: 30,
                              color: "#00b900",
                            }}
                          >
                            to transfer your role
                          </Text>
                        </View>
                        <View
                          style={{
                            marginTop: 20,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: fonts.regular,
                              color: "black",
                              fontSize: 16,
                            }}
                          >
                            You have requested to transfer the role of
                          </Text>
                          <Text
                            style={{
                              fontFamily: fonts.regular,
                              color: "black",
                              fontSize: 16,
                            }}
                          >
                            Main Nominee for Test Pte Ltd to Director
                          </Text>
                          <Text
                            style={{
                              fontFamily: fonts.regular,
                              color: "black",
                              fontSize: 16,
                            }}
                          >
                            1 - Darren Tan Hong Wei. Please wait for
                          </Text>
                          <Text
                            style={{
                              fontFamily: fonts.regular,
                              color: "black",
                              fontSize: 16,
                            }}
                          >
                            the person to accept the request for the
                          </Text>
                          <Text
                            style={{
                              fontFamily: fonts.regular,
                              color: "black",
                              fontSize: 16,
                            }}
                          >
                            transfer to be completed.
                          </Text>
                        </View>

                        <View
                          style={{
                            marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              setOpened(false);
                            }}
                            style={{
                              height: 50,
                              width: 242,
                              backgroundColor: "#2662b0",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 10,
                            }}
                          >
                            <Text
                              style={{
                                color: "white",
                                fontFamily: fonts.regular,
                                fontSize: 18,
                              }}
                            >
                              Back To Home
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Modal.Content>
                  </Modal>
                </ScrollView>
              </View>
            )}

            <View style={styles.firstlist}>
              <TouchableOpacity
                onPress={() => setTabName("tab-3")}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: "80%",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontFamily: fonts.regular,
                        fontSize: 16,
                      }}
                    >
                      {" "}
                      Director 1 -{"\n"}
                      Darren Tan Hong Wei
                    </Text>
                    {/* <AntDesign name="exclamationcircle" size={20} color="red" /> */}
                  </View>
                  <View
                    style={{
                      width: "20%",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <AntDesign name="caretright" size={20} color="white" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {tabName == "tab-3" && (
              <View
                style={{
                  marginVertical: 10,
                  width: "100%",
                  backgroundColor: "white",
                }}
              >
                {/* <PersonalAccountHeader /> */}
                <ScrollView>
                  {/* <View style={styles.profilepicView}>
                                            <Text style={{ fontFamily: fonts.semibold, fontSize: 26, color: '#2662b0' }}>MY PROFILE</Text>
                                        </View> */}
                  <View style={styles.uploadPicView}>
                    <Image
                      style={{ height: 150, width: 150, borderRadius: 100 }}
                      source={uploadpic}
                    />

                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 38,
                        heighth: 38,
                      }}
                    >
                      <View
                        style={{
                          position: "relative",
                          bottom: 40,
                          left: 60,
                          height: 38,
                          width: 38,
                          backgroundColor: "#2662b0",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 45,
                        }}
                      >
                        <Ionicons
                          name="cloud-upload-outline"
                          size={30}
                          color="white"
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.detailView}>
                    <View>
                      <Text style={styles.blackText}>User ID</Text>

                      <Text style={styles.blueText}>00001</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>First Name</Text>
                      <Text style={styles.blueText}>John</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Last Name</Text>
                      <Text style={styles.blueText}>Deo</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Gender</Text>
                      <Text style={styles.blueText}>Male</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Country</Text>
                      <Text style={styles.blueText}>Sigapore</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Mobile No</Text>
                      <Text style={styles.blueText}>+923120993243</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Home No</Text>

                      <Text style={styles.blueText}>+92468111799</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Email</Text>

                      <Text style={styles.blueText}>
                        mustafazeb381@gmail.com
                      </Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Date of birth</Text>
                      <Text style={styles.blueText}>07/07/1999</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Password</Text>
                      <Text style={styles.blueText}>********</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blackText}>Monthly Salary</Text>
                      <Text style={styles.blueText}>3000$</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.blueText}>signature</Text>

                      <View style={styles.signatureView}>
                        <View style={styles.signatureinner}>
                          <Image source={signature} />
                        </View>
                      </View>
                    </View>

                    <View style={{ width: "100%", marginTop: 20 }}>
                      <View
                        style={{
                          width: "100%",
                          height: 213,
                          justifyContent: "center",
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: "black",
                          backgroundColor: "#BFBFC0",
                          paddingHorizontal: 20,
                        }}
                      >
                        <Text
                          style={{ fontFamily: fonts.regular, fontSize: 14 }}
                        >
                          John Doe has request to transfer the Main Nominee
                          Role.{" "}
                          <Ionicons name="alert-circle" color="red" size={15} />
                        </Text>
                        <Text
                          style={{
                            paddingTop: 20,
                            fontFamily: fonts.regular,
                            fontSize: 14,
                          }}
                        >
                          John Doe has requested to transfer the Main Nominee
                          Role to you. You may accept or decline the request.
                        </Text>

                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            marginTop: 10,
                          }}
                        >
                          <TouchableOpacity
                            style={{
                              width: 117,
                              height: 45,
                              backgroundColor: "#2662b0",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 5,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 16,
                                fontFamily: fonts.regular,
                                color: "white",
                              }}
                            >
                              Accept
                            </Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={{
                              width: 117,
                              height: 45,
                              backgroundColor: "#2662b0",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 5,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 16,
                                fontFamily: fonts.regular,
                                color: "white",
                              }}
                            >
                              Reject
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          openedModal("center");
                        }}
                        style={styles.editbutton}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontFamily: fonts.semibold,
                            fontSize: 14,
                          }}
                        >
                          Transfer to main Nominee
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <Modal
                    isOpen={opened}
                    onClose={() => setOpened(false)}
                    safeAreaTop={true}
                  >
                    <Modal.Content
                      justifyContent="center"
                      alignItem="center"
                      w="80%"
                      height="530"
                      {...styles[placement]}
                    >
                      <View
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          alignItems: "center",
                          marginVertical: 20,
                        }}
                      >
                        <AntDesign
                          name="checkcircleo"
                          size={83}
                          color="#00b900"
                        />

                        <View
                          style={{
                            marginTop: 15,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: fonts.bold,
                              fontSize: 30,
                              color: "#00b900",
                            }}
                          >
                            You have Accepted
                          </Text>
                          <Text
                            style={{
                              fontFamily: fonts.bold,
                              fontSize: 30,
                              color: "#00b900",
                            }}
                          >
                            the new role
                          </Text>
                        </View>
                        <View
                          style={{
                            marginTop: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            paddingHorizontal: 8,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: fonts.regular,
                              color: "black",
                              fontSize: 16,
                            }}
                          >
                            You have accepted the new role of Main Nominee for
                            Test Pte Ltd from John Doe. You will have access to
                            some new functions under the company.
                          </Text>
                        </View>

                        <View
                          style={{
                            marginTop: 80,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              setOpened(false);
                            }}
                            style={{
                              height: 50,
                              width: 242,
                              backgroundColor: "#2662b0",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 10,
                            }}
                          >
                            <Text
                              style={{
                                color: "white",
                                fontFamily: fonts.regular,
                                fontSize: 18,
                              }}
                            >
                              Close
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Modal.Content>
                  </Modal>
                </ScrollView>
              </View>
            )}

            <View style={styles.firstlist}>
              <TouchableOpacity
                onPress={() => setTabName("tab-4")}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: "80%",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontFamily: fonts.regular,
                        fontSize: 16,
                      }}
                    >
                      Director 2 - {"\n"}
                      Jane Doe
                    </Text>
                    {/* <AntDesign name="exclamationcircle" size={20} color="red" /> */}
                  </View>
                  <View
                    style={{
                      width: "20%",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <AntDesign name="caretright" size={20} color="white" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {tabName == "tab-4" && (
              <>
                <View
                  style={{
                    width: "100%",
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    backgroundColor: "white",
                    marginTop: 20,
                    borderRadius: 10,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        color: "black",
                        fontFamily: fonts.bold,
                        fontSize: 18,
                      }}
                    >
                      Loan Approval Summary
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <Text style={styles.titleText}>Loan ID</Text>
                    <Text style={styles.detailText}>PL029304</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <Text style={styles.titleText}>Loaner</Text>
                    <Text style={styles.detailText}>DBS Bank Ltd</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <Text style={styles.titleText}>Loan Amoun (S$)t</Text>
                    <Text style={styles.detailText}>100000</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <Text style={styles.titleText}>Repayment amount (S$)</Text>
                    <Text style={styles.detailText}>128,622</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <Text style={styles.titleText}>Interest Rate</Text>
                    <Text style={styles.detailText}>2.1%</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <Text style={styles.titleText}>Interest (S$)</Text>
                    <Text style={styles.detailText}>28622</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <Text style={styles.titleText}>Rate Type</Text>
                    <Text style={styles.detailText}>Fixed</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <Text style={styles.titleText}>Period (months)</Text>
                    <Text style={styles.detailText}>240</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <Text style={styles.titleText}>Type of Loan</Text>
                    <Text style={styles.detailText}>
                      Mortgage Loan (Residential)
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <Text style={styles.titleText}>Current Situation</Text>
                    <Text style={styles.detailText}>Under construction</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <Text style={styles.titleText}>Property Purchase</Text>
                    <Text style={styles.detailText}>Private</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <Text style={styles.titleText}>Period Remaining</Text>
                    <Text style={styles.detailText}>182</Text>
                  </View>

                  <View
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 50,
                      paddingTop: 20,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 50,
                        width: 234,
                        borderRadius: 10,
                        backgroundColor: "#2662b0",
                      }}
                    >
                      <Text style={{ color: "white" }}>
                        Apply for Re-finance
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </View>
        )}

        {mainTab == "applicationtab" && (
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>this application tab</Text>
          </View>
        )}

        {mainTab == "documenttab" && (
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>this is documnet tab</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mianHeading: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 20,
  },

  signaturebuttonView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    height: 45,
    marginTop: 15,
    paddingEnd: 20,
  },
  signatureinner: {
    borderWidth: 1,
    borderRadius: 5,
    height: 240,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  signatureView: {
    marginTop: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  editbutton: {
    width: "100%",
    backgroundColor: "#2662b0",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  detailText: {
    fontSize: 14,
    fontFamily: fonts.bold,
    color: "black",
    paddingTop: 10,
  },
  titleText: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: "black",
    paddingTop: 20,
  },
  firstlist: {
    width: "100%",
    flexDirection: "row",
    marginTop: 20,

    backgroundColor: "#2662b0",
    height: 65,
  },
  listView: {
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  topText: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // mainView: {
  //     width: '100%',
  //     // flex: 1
  // },
  header: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 70,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  blackText: {
    fontFamily: fonts.semibold,
    fontSize: 14,
    color: "black",
    paddingVertical: 10,
  },
  blueText: {
    fontFamily: fonts.semibold,
    fontSize: 14,
    color: "#2662b0",
    paddingVertical: 5,
  },
  detailView: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  uploadPicView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  profilepicView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    // height:100
  },
  mainView: {
    width: "100%",
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor:'white',
    flex: 1,
  },
});

export default () => {
  return (
    <NativeBaseProvider>
      <Companyprofile />
    </NativeBaseProvider>
  );
};
