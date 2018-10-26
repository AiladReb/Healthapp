import {StyleSheet} from 'react-native'
import ApplicationStyles from '../constants/ApplicationStyles';
import  Colors from '../constants/Colors';
import  Fonts from '../constants/Fonts';

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        
        paddingHorizontal: 40
       
        
    },
    rowContainerStyle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    textButtonStyle: {
        ...Fonts.style.normal,
        marginLeft: 10,
        color: Colors.white,
        textAlign: 'center'
    },
    registerTextButtonStyle: {
        ...Fonts.style.normal,
        color: Colors.fire,
        marginLeft: 10,
        alignSelf: 'center'
    },
    GridContainerStyles: {
        paddingHorizontal: 20,
        paddingBottom: 50,
        backgroundColor: '#ffffff'
    },
    GridContainerStyles0: {

    },
    thumbContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    registerContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor:'#ffffff'
    },
    errorTextStyle:{
        ...Fonts.style.description,
        color : Colors.fire,
        alignSelf:'center'
    } ,
    spinner:{
        marginTop: 50 ,
        alignSelf : 'center'
    }
})
