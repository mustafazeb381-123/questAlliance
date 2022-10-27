import { Platform } from "react-native"

const fonts ={

    regular : Platform.OS == 'ios' ? 'OpenSans': 'OpenSans',
    bold : 'OpenSans-Bold',
    semibold : 'OpenSans-SemiBold',
    light : 'OpenSans-Light'
}

export default fonts