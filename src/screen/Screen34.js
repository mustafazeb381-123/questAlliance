import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import SVGICON from '../theme/SVGICON'
import SelectDropdown from 'react-native-select-dropdown'
import Button from '../component/Button';
import { Checkbox, Input } from 'native-base';
import ColorsTheme from '../theme/ColorsTheme';
import fonts from '../theme/fonts';
import InputwithLable from '../component/InputwithLable';
import InputWithBottomLable from '../component/InputWithBottomLable';
const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const countries = ["Purchase of completed / uncompleted properties", "Benifit Received", "Bridging Loan", "Refinancing of facility", "Additional Facility", "Construction Loan"]
const Screen34 = () => {

    const [selecteditem, setSetlectedItem] = useState();


    return (
        <ScrollView style={{ flex: 1 }}>
            <View>
                <View>
                    <View style={{ marginVertical: 8 }}>
                        <View style={styles.container}>
                            <View style={styles.rowview}>
                                <SVGICON.back style={{ alignSelf: "center" }} />
                                <View style={{ marginHorizontal: 4 }}></View>
                                <Text>mortgage loan</Text>
                            </View>
                            <View style={{ height: 40, width: 40, borderRadius: 20, overflow: 'hidden', backgroundColor: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                <SVGICON.mortgage style={{ alignSelf: "center" }} />
                            </View>

                        </View>
                        <View style={{ height: 0.5, backgroundColor: 'black' }}>

                        </View>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={styles.loantext}>MORGATE LOAN</Text>
                        <Text style={styles.loantext} >APPLICATION FORM</Text>
                    </View>

                    <View style={{ margin: 10 }}>
                        <View style={{ height: 0.5, backgroundColor: 'black' }}>

                        </View>
                    </View>

                    <View style={{ margin: 10 }}>
                        <Text style={styles.finacialtext}>Finacial Request</Text>
                    </View>



                    <View style={{ margin: 10, alignContent: 'center', alignItems: 'center', width: '90%' }}>
                        <View style={{ height: 56, width: '100%', borderWidth: 0.8, borderColor: 'black', borderRadius: 8, flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between' }}>

                            <SelectDropdown
                                data={countries}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                    setSetlectedItem(selectedItem)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                            >

                            </SelectDropdown>
                            <View style={{ height: 24, marginRight: 32, width: 24, borderRadius: 20, overflow: 'hidden', backgroundColor: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                <SVGICON.mortgage style={{ alignSelf: "center" }} />
                            </View>
                        </View>
                    </View>
                </View>

                {
                    selecteditem == 'Purchase of completed / uncompleted properties' ? <View style={{ padding: 12 }}>


                        <View>
                            <InputwithLable title={"Loan amount:"} />
                        </View>
                        <View style={styles.marginall}>

                        </View>
                        <View>
                            <InputwithLable title={"Loan period:"} />
                        </View>
                        <View style={styles.marginall}>

                        </View>
                        <Text>Do you want to use CPF for monthly Installament?</Text>
                        <View style={styles.marginall}>

                        </View>
                        <View style={styles.marginall}>

                        </View>
                        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                            <View style={{ width: '50%' }}>

                                <View style={{ flexDirection: "row" }}>
                                    <Checkbox
                                        isChecked={false}
                                        colorScheme="green"
                                        style={{ alignSelf: "center" }}
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
                            <View style={{ width: '50%' }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Checkbox
                                        isChecked={false}
                                        colorScheme="green"
                                        style={{ alignSelf: "center" }}
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
                        <View style={styles.marginall}>

                        </View>
                        <View>
                            <InputwithLable title={"CPF for Stamp/Leagal Fees (S$)"} />
                        </View>

                        <View style={styles.marginall}>

                        </View>
                        <View>
                            <InputwithLable title={"CPF Initial Lupsum withdrawal (S$)"} />
                        </View>

                    </View> : null
                }


                {selecteditem == "Benifit Received" ? <View style={{ padding: 12 }}>
                    <Text>Benifit Received</Text>
                    <View style={{ marginVertical: 8 }}>
                        <Text>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown

                        </Text>
                    </View>

                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <Checkbox
                                isChecked={false}
                                colorScheme="green"
                                style={{ alignSelf: "center" }}
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
                                No, I/we did not receive any benifit(s)
                            </Text>
                        </View>

                        <View style={{ marginVertical: 4 }}>
                            <View style={{
                                flexDirection: "row", alignContent: 'center', alignItems: 'center'
                            }}>
                                <Checkbox
                                    isChecked={false}
                                    colorScheme="green"
                                    style={{ alignSelf: "center" }}
                                />
                                <View>
                                    <Text
                                        style={{
                                            fontFamily: fonts.light,
                                            color: ColorsTheme.grey,
                                            fontSize: 18,
                                            paddingLeft: 15,
                                            marginTop: -5,
                                        }}
                                    >
                                        Yes, amount/value of item that
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
                            <View style={{ width: '60%', height: 56, borderWidth: 0.9, borderRadius: 10 }}>
                                <SelectDropdown
                                    data={countries}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)

                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                    }}
                                >

                                </SelectDropdown>
                            </View>
                        </View>
                    </View>

                </View> : null}

                {
                    selecteditem == "Bridging Loan" ? <View style={{ padding: 12 }}>

                        <View>
                            <Text>Bridging Loan</Text>
                        </View>

                        <View style={{ marginVertical: 8 }}>
                            <View style={{ marginVertical: 8 }}>
                                <Text>Moad of Bridging Loan Payment</Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Checkbox
                                    isChecked={false}
                                    colorScheme="green"
                                    style={{ alignSelf: "center" }}
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
                                    CPF S$____
                                </Text>
                            </View>
                            <View style={{ marginVertical: 4 }}>

                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Checkbox
                                    isChecked={false}
                                    colorScheme="green"
                                    style={{ alignSelf: "center" }}
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
                                    Cash S$____
                                </Text>
                            </View>

                        </View>

                        <View style={{ marginVertical: 8 }}>
                            <InputwithLable title={"Bridging Loan amount"} />
                        </View>

                        <View style={{ marginVertical: 8 }}>
                            <View style={{ marginVertical: 8 }}>
                                <Text>Moad of Bridging Loan Payment</Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Checkbox
                                    isChecked={false}
                                    colorScheme="green"
                                    style={{ alignSelf: "center" }}
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
                                    Private properti
                                </Text>
                            </View>
                            <View style={{ marginVertical: 4 }}>

                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Checkbox
                                    isChecked={false}
                                    colorScheme="green"
                                    style={{ alignSelf: "center" }}
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
                                    Exec.Appartment/Maisonette
                                </Text>
                            </View>


                            <View style={{ marginVertical: 4 }}>

                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Checkbox
                                    isChecked={false}
                                    colorScheme="green"
                                    style={{ alignSelf: "center" }}
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
                                    Cash S$____
                                </Text>
                            </View>

                        </View>

                        <View>
                            <InputwithLable title={"Address of properti to be sold<"} />
                        </View>

                        <View>
                            <InputwithLable title={"Selling pricese (S$)"} />
                        </View>

                        <View>
                            <InputWithBottomLable title={"Outstanding loan (incl. undisburesed) (S$)"} />
                        </View>

                    </View> : null
                }


                {
                    selecteditem == "Refinancing of facility" ? <View style={{ padding: 12 }}>

                        <View style={styles.marginall}>
                            <Text style={styles.smallLabel}>Refinancing of facility</Text>

                        </View>

                        <View>
                            <InputwithLable title={"Existing finacier"} />
                        </View>



                        <View>
                            <InputWithBottomLable title={"Outstanding loan (incl. undisburesed) (S$)"} />
                        </View>
                        <View style={{ marginVertical: 8 }}>
                            <Text style={styles.smallLabel}>What is the amount of the exisitng  Overdraft to be converted to Term Loan?</Text>


                            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>

                                    <View style={{ flexDirection: "row" }}>
                                        <Checkbox
                                            isChecked={false}
                                            colorScheme="green"
                                            style={{ alignSelf: "center" }}
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
                                <View style={{ width: '50%' }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Checkbox
                                            isChecked={false}
                                            colorScheme="green"
                                            style={{ alignSelf: "center" }}
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
                        </View>
                        <View style={{ marginVertical: 8 }}>
                            <Text style={styles.smallLabel}>Types of facility</Text>


                            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                                <View style={{ width: '60%' }}>

                                    <View style={{ flexDirection: "row" }}>
                                        <Checkbox
                                            isChecked={false}
                                            colorScheme="green"
                                            style={{ alignSelf: "center" }}
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
                                            Housing / Term loan
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ width: '40%' }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Checkbox
                                            isChecked={false}
                                            colorScheme="green"
                                            style={{ alignSelf: "center" }}
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
                                            Overdraft
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <InputWithBottomLable title={"Outstanding loan  period  "} />
                        </View>

                    </View> : null
                }


                {
                    selecteditem == "Additional Facility" ? <View style={{ padding: 12 }}>

                        <View>
                            <Text>Additional Facility</Text>
                        </View>

                        <View style={{ marginVertical: 8 }}>
                            <InputwithLable title={"Terrm Loan (S$)"} />
                        </View>


                        <View>
                            <InputWithBottomLable title={"Outstanding loan (incl. undisburesed) (S$)"} />
                        </View>
                        <View style={{ marginVertical: 8 }}>
                            <InputwithLable title={"Others (S$)"} />
                        </View>

                        <View style={{ marginVertical: 8 }}>
                            <View style={{ marginVertical: 8 }}>
                                <Text>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown </Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Checkbox
                                    isChecked={false}
                                    colorScheme="green"
                                    style={{ alignSelf: "center" }}
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
                                    Bussiness Investment
                                </Text>
                            </View>
                            <View style={{ marginVertical: 4 }}>

                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Checkbox
                                    isChecked={false}
                                    colorScheme="green"
                                    style={{ alignSelf: "center" }}
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
                                    Repay Faciities with other bank(s)
                                </Text>
                            </View>
                            <View style={{ marginVertical: 4 }}>

                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Checkbox
                                    isChecked={false}
                                    colorScheme="green"
                                    style={{ alignSelf: "center" }}
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
                                    Investment in Financial insturments
                                </Text>
                            </View>
                            <View style={{ marginVertical: 4 }}>

                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Checkbox
                                    isChecked={false}
                                    colorScheme="green"
                                    style={{ alignSelf: "center" }}
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
                                    Renovation
                                </Text>
                            </View>
                            <View style={{ marginVertical: 4 }}>

                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Checkbox
                                    isChecked={false}
                                    colorScheme="green"
                                    style={{ alignSelf: "center" }}
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
                                    Education
                                </Text>
                            </View>
                            <View style={{ marginVertical: 4 }}>

                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Checkbox
                                    isChecked={false}
                                    colorScheme="green"
                                    style={{ alignSelf: "center" }}
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
                                    Others____
                                </Text>
                            </View>

                        </View>

                    </View> : null
                }


                {
                    selecteditem == "Construction Loan" ? <View style={{ padding: 12 }}>

                        <View style={styles.marginall}>
                            <Text style={styles.smallLabel}>Construction Loan</Text>

                        </View>

                        <View>
                            <InputwithLable title={"Loan amount(S$)"} />
                        </View>

                        <View>
                            <InputWithBottomLable />
                        </View>
                        <View style={{ marginVertical: 8 }}>
                            <Text style={styles.smallLabel}>Construction Type</Text>


                            <View style={{ alignContent: 'center', justifyContent: 'space-between' }}>
                                <View style={{ width: '80%' }}>

                                    <View style={{ flexDirection: "row" }}>
                                        <Checkbox
                                            isChecked={false}
                                            colorScheme="green"
                                            style={{ alignSelf: "center" }}
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
                                            Additions {'&'} Alterations
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ width: '80%', marginVertical: 8 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Checkbox
                                            isChecked={false}
                                            colorScheme="green"
                                            style={{ alignSelf: "center" }}
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
                                            Reconstruction
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>


                        <View >
                            <InputwithLable title={"Cost of ColorsTheme(S$)"} />
                        </View>

                        <View >
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

                    </View> : null
                }
                <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                    <Button title={'  Back   '} />
                    <Button title={'Continue'} />
                </View>

                <View style={{ height: 120 }}>

                </View>
            </View>
        </ScrollView>
    )
}

export default Screen34

const styles = StyleSheet.create({
    marginall: {
        marginVertical: 4,
    },
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    loantext: { fontSize: 20, color: 'black' },
    finacialtext: { fontSize: 16 },
    container: { paddingHorizontal: 8, alignContent: 'center', alignItems: 'center', flexDirection: 'row', height: 56, borderEndColor: 'red', justifyContent: 'space-between' },
    rowview: { height: 40, width: '40%', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }
})