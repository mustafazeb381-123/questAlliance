import { Platform } from "react-native"

const fonts ={

    regular : Platform.OS == 'ios' ? 'OpenSans': 'OpenSans',
    bold : 'OpenSans-Bold',
    light : 'OpenSans-Light'
}

export default fonts