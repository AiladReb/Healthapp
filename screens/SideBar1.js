import React, {Component} from 'react';

import {View, Linking, Modal, StyleSheet} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Button, Thumbnail, Container, Content} from 'native-base';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../constants/Colors';
import {createDrawerNavigator} from "react-navigation";

class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/images/robot-dev.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() =>navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      );
    }
  }
  
 
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  
  const MyApp = createDrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
   
  });

navigation.openDrawer();
navigation.closeDrawer();

export default MyHomeScreen;