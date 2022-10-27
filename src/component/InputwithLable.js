import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorsTheme from '../theme/ColorsTheme'
import fonts from '../theme/fonts'
import { Input } from 'native-base'

const InputwithLable = ({ title, hint }) => {
    return (
        <View style={{ marginVertical: 8 }}>
            <Text style={styles.title}>{title}</Text>
            <Input
                w={{
                    base: "100%",
                    md: "25%",
                }}
                borderColor={ColorsTheme.grey}
                placeholderTextColor={ColorsTheme.grey}
                fontFamily={fonts.regular}
                fontSize={14}
                padding={3}
                InputLeftElement={
                    <Text
                        style={{
                            paddingLeft: 10,
                            fontFamily: fonts.regular,
                            color: ColorsTheme.grey,
                        }}
                    >
                        $
                    </Text>
                }
                keyboardType={"number-pad"}
                placeholder="Enter an amount"
            />
        </View>
    )
}

export default InputwithLable

const styles = StyleSheet.create({
    title: { fontSize: 16, color: 'black' }
})