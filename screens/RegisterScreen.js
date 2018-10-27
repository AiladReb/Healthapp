import React, {Component} from 'react'
import {ScrollView, Text, KeyboardAvoidingView, View, ImageBackground} from 'react-native'
import {Row, Grid} from 'react-native-easy-grid';
import {Container, Button, Content, Item, Form, Label, Input, Thumbnail} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {BarIndicator} from 'react-native-indicators';
// Styles
import styles from '../screenStyle/LoginScreenStyle';
import Colors from "../constants/Colors";
import {Actions} from "react-native-router-flux";

import KeyboardSpacer from 'react-native-keyboard-spacer';




class RegisterScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            load: false , 
        
        }

    }

    render() {
        if (this.state.load) {
            return <BarIndicator color={Colors.Green} count={5}/>;
        }
        return (
            <Container style={{display: 'flex', justifyContent: 'flex-end',  paddingBottom: 55, backgroundColor: Colors.white}}>
              
              <Content>
              <Thumbnail square
                               source={require('../assets/images/Profile.png')}
                               resizeMode="contain"
                               style={{ alignSelf: 'center' , width : 100 , height : 100 , marginLeft : 10}}/>
               
           
              <Form style={{padding: 25, paddingTop: 0}}>
              <Item floatingLabel style = {{borderBottomColor: Colors.Green}}>
                  <Label style={{ color: Colors.Maron}}>Nom</Label>
                  <Input style={{color: Colors.Grey}}/>
              </Item>
              <Item floatingLabel style = {{borderBottomColor: Colors.Green}}>
                  <Label style={{color: Colors.Maron}}>Prénom</Label>
                  <Input style={{color: Colors.Grey}}/>
              </Item>
              <Item floatingLabel style = {{borderBottomColor: Colors.Green}} >
                  <Label style={{color: Colors.Maron}}>Numéro de téléphone</Label>
                  <Input style={{color: Colors.Grey}}/>
              </Item>
              <Item floatingLabel style = {{borderBottomColor: Colors.Green}}>
                  <Label style={{color: Colors.Maron}}>Adresse</Label>
                  <Input style={{color: Colors.Grey}}/>
              </Item>
              <Item floatingLabel style = {{borderBottomColor: Colors.Green}}>
                  <Label style={{color: Colors.Maron}}>N° carte d'identité nationale</Label>
                  <Input style={{color: Colors.Grey}}/>
              </Item>
              <Item floatingLabel >
                  <Label style={{color: Colors.Maron}}>Profession</Label>
                  <Input style={{color: Colors.Grey}}/>
              </Item>
          </Form>
          <Button block style={{backgroundColor: Colors.Green,  alignSelf: 'center', borderRadius:20,width: '65%'}} onPress={() => {
              this.setState({load: true});
              setTimeout(function () {
                  Actions.jump('home');
              }, 2000);
          }}>
              <Text style={styles.textButtonStyle }> Sauvegarder </Text>
          </Button>
      <KeyboardSpacer />

           
              </Content>
        </Container>
        );
    }

   


}


export default RegisterScreen;
