import React, {Component} from 'react';
import call from 'react-native-phone-call'

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { WebBrowser } from 'expo';
import { MapView } from 'expo';
import { Button } from 'react-native-elements';
import { Header, Item, Input, Icon } from 'native-base';
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import {
    Text, Left, Right, Title, Body, Container, Drawer
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from "../constants/Colors";
import SideBar from "./SideBar";
import MyHeader from './MyHeader'
import RNGooglePlaces from 'react-native-google-places';
import {Actions} from 'react-native-router-flux'

class Home extends Component {
    static navigationOptions = {
        header: null,
      };
      
    closeDrawer = () => {
        this.drawer._root.close()
    };

    openDrawer = () => {
        this.drawer._root.open()
    };

    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: true,
          load : false ,
          markers: [],
        };
      }
    
      fetchMarkerData() {
        fetch('https://feeds.citibikenyc.com/stations/stations.json')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({ 
              isLoading: false,
              markers: [
                {
                  stationName: "ESI - Ecole Nationnale Superieure d'informatique",
                  latitude: 40.7643971,
                  longitude: -73.97371465,
                } , 
                {
                  stationName: "Gare Oued Semmar",
                  latitude: 36.7098628,
                  longitude: 3.1596368,
                } , 
                {
                  stationName: "USTHB - Bab Ezzouar",
                  latitude: 36.7125656,
                  longitude: 4.1765913,
                },
                {
                  stationName: "Aissat Idir",
                  latitude: 36.7538259,
                  longitude: 3.0534636,
                },
                {
                  stationName: "Khelifa Boukhalfa",
                  latitude: 36.7576972,
                  longitude: 3.0451424,
                },
              ], 
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    

      componentDidMount() {
        this.fetchMarkerData();
    }

    callPersons = () => { 
      this.setState({load: true});
        setTimeout(function () {
             Actions.jump("callPersons");

        }, 2000);
    }

    render() {

      const args = {
        number: '0557121308', // String value with the number to call
        prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
      }
        return (

            <Drawer
                    ref={(ref) => {
                        this.drawer = ref;
                    }}
                    content={<SideBar navigator={this.navigator}/>}
                    onClose={() => this.closeDrawer()}>
                    <Container style={styles.SearchBar} >
                        <Header searchBar rounded style={{ backgroundColor : '#36A97A' , width : "100%" , margin : 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={this.openDrawer}>
                            <Ionicons name="md-list" size={32} color="white" style={{ marginRight : 15}} />
                            </TouchableOpacity>
                                <Item style={{width : "100%" , margin : 0, flex: 1}} >
                                    <Icon name="ios-search" />
                                    <Input placeholder="Search" />
                                    <Icon name="ios-people" />
                                </Item>
                            
                        </Header>
                        <MapView
                        style={{ flex: 1 }}
                        region={{
                        latitude: 36.7098628,
                        longitude: 3.1596368,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                        >

                        {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
                        const coords = {
                        latitude: marker.latitude,
                        longitude: marker.longitude,
                        };

                        const metadata = `Status: ${marker.statusValue}`;

                        return (
                            <MapView.Marker
                                key={index}
                                coordinate={coords}
                                title={marker.stationName}
                            />
                        );
                        })}
            </MapView>
            
            <Button
            onPress={this.callPersons}
              title="Demande"
              //loading
              //loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
              titleStyle={{ fontWeight: "700" , fontSize : 25 }}
              buttonStyle={{
                backgroundColor: "#36A97A",
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
            
              
            
        </Container>
    
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection : 'column',
      justifyContent : 'flex-start',
    },
    SearchBar : {
      flex:1,
      margin : 0 , 
    },
    AppelButton : {
      width : "90%" , 
      marginBottom : 15 , 
      position : "absolute" , 
      backgroundColor : "#36A97A" , 
      borderRadius : 30, 
      bottom : 0,
      textAlign : "center"
    },
    ButtonText : {
      color : "#fff" ,
      fontSize : 17, 
      textAlign : "center" ,
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
  });
  
export default Home;
  


