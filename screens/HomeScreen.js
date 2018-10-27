import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MapView } from 'expo';
import { Button } from 'react-native-elements';
import { Container, Header, Item, Input, Icon } from 'native-base';
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
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
              latitude: 36.7101816,
              longitude: 3.1765913,
            }
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

  render() {
    return (
       <Container style={styles.SearchBar} >
        <Header searchBar rounded style={{ backgroundColor : '#228c1d'}}>
        <Ionicons name="md-list" size={32} color="white" style={{marginTop : 15}} />
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
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
              title="Demande"
              //loading
              //loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
              titleStyle={{ fontWeight: "700" , fontSize : 19 }}
              buttonStyle={{
                backgroundColor: "#228c1d",
                width: "90%",
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5 , 
                position : "absolute" , 
                marginLeft : 20 , 
                bottom : 0 , 
                marginBottom: 20 , 
              }}
              containerStyle={{ marginBottom: 20,alignSelf: 'center'}}
            />
            
              
            
        </Container>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
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
    backgroundColor : "#228c1d" , 
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
