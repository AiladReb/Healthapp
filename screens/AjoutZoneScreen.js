import React, {Component} from 'react'
import {ScrollView, Text, KeyboardAvoidingView, View, ImageBackground} from 'react-native'
import {Row, Grid} from 'react-native-easy-grid';
import {Container, Button, Content, Item, Form, Label, Input, Thumbnail} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BarIndicator} from 'react-native-indicators';
// Styles
import styles from '../screenStyle/LoginScreenStyle';
import Colors from "../constants/Colors";
import {Actions} from "react-native-router-flux";

import KeyboardSpacer from 'react-native-keyboard-spacer';




class AjoutZoneScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            load: false
        }

    }

    render() {
        if (this.state.load) {
            return <BarIndicator color={Colors.Green} count={5}/>;
        }
        return (
            <Container style={{display: 'flex', justifyContent: 'flex-start',  backgroundColor: Colors.white}}>
             
              <Content style={{paddingTop :45}} >
              
               
               <Button block style={{backgroundColor:Colors.white, alignContent: 'center', alignSelf: 'flex-end',borderRadius:30,width: '10%' }} onPress={() => {
                    this.setState({load: true});
                    setTimeout(function () {
                      Actions.jump('AjoutEnfantScreen');
                    }, 200); }}>

                    <Icon name="angle-right" size={40} color={Colors.Green}/>
              </Button>
           
              <Thumbnail square
                               source={require('../assets/images/nvleZone.png')}
                               style={{width: 120, height: 120, alignSelf: 'center',paddingVertical:50}}/>
                               
              <Form style={{padding: 40}}>
              <Item floatingLabel style = {{borderBottomColor: Colors.Green, borderBottomWidth:2}}>
                  <Label style={{ color: Colors.Maron}}>Ecole</Label>
                  <Input style={{color: Colors.Grey}}/>
              </Item>
              <Item floatingLabel style = {{borderBottomColor: Colors.Green, borderBottomWidth:2}}>
                  <Label style={{color: Colors.Maron}}>Adresse</Label>
                  <Input style={{color: Colors.Grey}}/>
              </Item>
              <Item floatingLabel style = {{borderBottomColor: Colors.Green, borderBottomWidth:2}} >
                  <Label style={{color: Colors.Maron}}>Nombre d'enfants</Label>
                  <Input style={{color: Colors.Grey}}/>
              </Item>
             
          </Form>
          
      <KeyboardSpacer />

           
              </Content>
        </Container>
        );
    }

   


}


export default AjoutZoneScreen;
