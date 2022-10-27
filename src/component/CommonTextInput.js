import React, { Component } from 'react';
import { View, TextInput, Text, Platform } from 'react-native';
import ColorsTheme from '../theme/ColorsTheme';
import fonts from '../theme/fonts';

class CommonTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isfocused: false,
    };
  }

  render() {
    const {
      data,
      PlaceHolder,
      marginTop,
      marginRight,
      errorUserName,
      marginStart,
      headerTitle,
    } = this.props;
    return (
      <View>
        {headerTitle ? (
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              marginTop: 15,
              fontFamily: fonts.regular,
            }}
          >
            {headerTitle}
          </Text>
        ) : null}
        <View
          style={[
            {
              marginHorizontal: Platform.OS == 'ios' ? 15 : 10,
              marginStart: marginStart ? marginStart : 10,
              marginRight: marginRight ? marginRight : 10,
              marginTop: marginTop ? marginTop : 20,
            },
          ]}
        >
          <View style={{ width: '100%' }}>
            <TextInput
              placeholder={PlaceHolder}
              placeholderTextColor={ColorsTheme.grey}
              color={ColorsTheme.grey}
              onFocus={() => this.setState({ isfocused: true })}
              onBlur={() => this.setState({ isfocused: false })}
              onChangeText={(e) => {
                const { attrName, updateMasterState } = this.props;
                this.props.updateMasterState(attrName, e);
              }}
              value={data}
              style={[
                errorUserName
                  ? {
                      borderColor: ColorsTheme.darkBlue,
                      borderWidth: 1.5,
                      padding: Platform.OS == 'ios' ? 10 : 5,
                      borderRadius: 10,
                      fontSize: 16,
                      paddingStart: 15,
                    }
                  : {
                      borderColor: ColorsTheme.grey,
                      borderWidth: 1.5,
                      padding: Platform.OS == 'ios' ? 10 : 5,
                      borderRadius: 10,
                      fontSize: 16,
                      paddingStart: 15,
                      padding: 15,
                    },
              ]}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default CommonTextInput;
