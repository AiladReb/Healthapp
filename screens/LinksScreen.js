import React from 'react';
import { ScrollView, StyleSheet , ImageBackground , View , Image , Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Ionicons } from '@expo/vector-icons';

export default class LinksScreen extends React.Component {
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
        <View>
          <Image source={require('../assets/images/call.png')} resizeMode="contain" style={{ width : 100}} />
        </View>
        <View>
        <Text style={{fontSize : 20 , color : "#fff"}} > Appel en cours </Text>

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
