import React from 'react';
import { ScrollView, StyleSheet , ImageBackground , View , Image ,
  Thumbnail,
  Text , Animated , TouchableOpacity} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Ionicons } from '@expo/vector-icons';
import {Button } from "react-native-elements";
export default class callPersonsAccepted extends React.Component {
  static navigationOptions = {
    header: null,
  };

  
  render() {
    return (
      <ImageBackground style={styles.container}  source={require('../assets/images/Image.png')} >
        <View style={styles.LogoContainer} >
          <Image source={require('../assets/images/MonEnfantLogo.png')} resizeMode='contain' style={{width: 120, height: 150}}
          />
          <Text style={{fontSize : 30 , color : "#fff"}} > Mon Enfant </Text>
        </View>
        <View style={{
          width : "80%", 
          height : "40%",
          backgroundColor : "#228c1d",
          borderRadius : 10 , 
          flexDirection : "column", 
          justifyContent : "center" ,
          alignItems : "center"

        }} >
          <Thumbnail square
          source={require('../assets/images/Profile.png')}
          resizeMode="contain"
          style={{ alignSelf: 'center' , width : 100 , height : 100 , marginLeft : 10}}/>
          <Text style={{fontSize : 25 , fontWeight : 10 , color : "white"}} >
              MEDJKOUNE Tinhinane
            </Text>
            <Text style={{fontSize : 20 , fontWeight : 5}} >
              vient d'accpter votrde demande !   
            </Text>
            <Button
              title="Appel"
              titleStyle={{ fontWeight: "700" , fontSize : 25 , color : "black" }}
              buttonStyle={{
                backgroundColor: "#fff",
                width: "90%",
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 15 , 
                position : "absolute" , 
                marginLeft : 20 , 
                bottom : 0 , 
                marginBottom: 20 , 
              }}
              containerStyle={{ marginBottom: 20,alignSelf: 'center'}}
            />
        </View>
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "center" ,
    alignItems : "center"

  }, 
  LogoContainer : {
    alignItems : "center" , 
    justifyContent : "center"
  }
});
