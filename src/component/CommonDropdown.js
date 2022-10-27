import React, { Component } from 'react';
import { View, TextInput, Text, Platform } from 'react-native';
import ColorsTheme from '../theme/ColorsTheme';
import fonts from '../theme/fonts';
import SVGICON from '../theme/SVGICON';
class CommonDropdown extends Component {
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
              fontFamily: fonts.semibold,
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
              borderColor: ColorsTheme.grey,
              borderWidth: 1.5,
              padding: Platform.OS == 'ios' ? 5 : 5,
              borderRadius: 10,
            },
          ]}
        >
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TextInput
              placeholder={PlaceHolder}
              placeholderTextColor={ColorsTheme.grey}
              color={ColorsTheme.grey}
              editable={false}
              value={data}
              style={{
                fontSize: 16,
                paddingStart: 15,
                padding: 10,
              }}
            />
            <View
              style={{
                marginRight: 10,
                alignSelf: 'center',
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  width: 1,
                  maxWidth: 1,
                  minHeight: 20,
                  marginRight: 10,
                  backgroundColor: 'black',
                }}
              ></View>
              <SVGICON.dropdown style={{ alignSelf: 'center' }} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default CommonDropdown;
