import React from 'react';
import { ScrollView, StyleSheet , ImageBackground , View , Image ,
  Text , Animated , TouchableOpacity} from 'react-native';
  import { Thumbnail} from 'native-base' ;
import { ExpoLinksView } from '@expo/samples';
import { Ionicons } from '@expo/vector-icons';
import {Button } from "native-base";
import call from 'react-native-phone-call'
import Colors from "../constants/Colors";

export default class callPersonsAccepted extends React.Component {
  static navigationOptions = {
    header: null,
  };

  
  render() {
    const args = {
      number: '0557121308', // String value with the number to call
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
    }
    return (
      <ImageBackground style={styles.container}  source={require('../assets/images/Image.png')} >
        <View style={styles.LogoContainer} >
          <Image source={require('../assets/images/MonEnfantLogo.png')} resizeMode='contain' style={{width: 120, height: 150}} />
          <Text style={{fontSize : 30 , color : "#fff"}} > Mon Enfant </Text>
        </View>
         <View style={{
          width : "80%", 
          height : "40%",
          backgroundColor : "#62B392",
          borderRadius : 10 , 
          flexDirection : "column", 
          justifyContent : "flex-start" ,
          alignItems : "center",
          marginTop : 20

        }}>
              <Thumbnail square
              source={require('../assets/images/Girl.png')}
              resizeMode="contain"
              style={{ alignSelf: 'center' , width : 100 , height : 100 , marginLeft : 10 , marginTop : 10 , marginBottom : 5}}/>
              <Text style={{fontSize : 20 , fontWeight : "bold" , color : "white"}} >
                  MEDJKOUNE Tinhinane
                </Text>
                <Text style={{fontSize : 15 , fontWeight : "normal" , color : "white"}} >
                  vient d'accepter votre demande !   
                </Text>
                <TouchableOpacity  style={{backgroundColor: "#fff", padding : 10 ,alignSelf: 'center', borderRadius:20,width: '65%' , marginTop : 30}} 
                        onPress={() => call(args)}>
                            <Text style={{color : "black" , textAlign : "center"} }>Passer l'appel</Text>
                  </TouchableOpacity>
                {/* <Button
                onPress={call(args)}
                  title="Appel"
                  titleStyle={{ fontWeight: "700" , fontSize : 25 , color : "#000000" }}
                  buttonStyle={{
                    backgroundColor: "#fff",
                    width: "90%",
                    height: 45,
                    borderColor: "transparent",
                    borderRadius: 15 , 
                    bottom : 0 , 
                    marginTop: 20 , 
                  }}
                  containerStyle={{ marginBottom: 20,alignSelf: 'center'}}
                /> */}
        </View> 
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "flex-start" ,
    alignItems : "center"

  }, 
  LogoContainer : {
    alignItems : "center" , 
    justifyContent : "center"
  }
});
