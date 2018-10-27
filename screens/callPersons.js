import React from 'react';
import { ScrollView, StyleSheet , ImageBackground , View , Image , Text , Animated , TouchableOpacity} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Ionicons } from '@expo/vector-icons';
import {Actions} from 'react-native-router-flux'

export default class callPersons extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) { 
    super(props);
  }

  componentDidMount() {
    this.setState({load: true});
    setTimeout(function () {
         Actions.jump("callPersonsAccepted");
    }, 5000);
  }
  
  render() {
    
    return (
      <ImageBackground style={styles.container}  source={require('../assets/images/Image.png')} >
        <View style={styles.LogoContainer} >
          <Image source={require('../assets/images/MonEnfantLogo.png')} resizeMode='contain' style={{width: 120, height: 150}}
          />
          <Text style={{fontSize : 30 , color : "#fff"}} > Mon Enfant </Text>
        </View>
        <View >
        <Image source={require('../assets/images/map.png')} resizeMode="contain" style={{ width : 100}} />
        </View>
        <View>
        <Text style={{fontSize : 20 , color : "#fff"}} > Demande en cours ... </Text>

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
