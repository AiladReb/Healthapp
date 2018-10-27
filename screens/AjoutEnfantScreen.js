import React, {Component} from 'react'
import {ScrollView, Text, KeyboardAvoidingView, View, ImageBackground} from 'react-native'
import {Row, Grid} from 'react-native-easy-grid';
import {Container, Button, Content, Item, Form, Label, Input, Thumbnail, Col} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BarIndicator} from 'react-native-indicators';
// Styles
import styles from '../screenStyle/LoginScreenStyle';
import Colors from "../constants/Colors";
import {Actions} from "react-native-router-flux";

import KeyboardSpacer from 'react-native-keyboard-spacer';




class AjoutEnfantScreen extends Component {


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
             
              
              <View style={{flexDirection: 'row'}}>
              
             
              <Button block style={{backgroundColor:Colors.white, alignContent: 'center',borderRadius:30,width: '10%',  marginTop:50 }} onPress={() => {
                    this.setState({load: true});
                    setTimeout(function () {
                      Actions.jump("AjoutZoneScreen");
                    }, 50); }}>                 
                       
                    <Icon name="angle-left" size={35} color={Colors.Green}/>
                </Button>
            
              <Text style={{color:Colors.Green ,marginRight:100, marginTop:50, fontSize: 27}}> Mon enfant</Text>
            
             </View>
               
                
                                 
              
            <Content style={{paddingTop :15}} >
              <Thumbnail boucle
                               source={require('../assets/images/anna.png')}
                               style={{width: 120, height: 120, alignSelf: 'center'}}/>
                               
              <Form style={{paddingTop: 0, paddingLeft: 40, paddingRight:40}}>
              <Item floatingLabel style = {{borderBottomColor: Colors.Green, borderBottomWidth:2}}>
                  <Label style={{ color: Colors.Maron}}>Nom</Label>
                  <Input style={{color: Colors.Grey}}/>
              </Item>
              <Item floatingLabel style = {{borderBottomColor: Colors.Green, borderBottomWidth:2}}>
                  <Label style={{color: Colors.Maron}}>Prénom</Label>
                  <Input style={{color: Colors.Grey}}/>
              </Item>
              <Item floatingLabel style = {{borderBottomColor: Colors.Green, borderBottomWidth:2}} >
                  <Label style={{color: Colors.Maron}}>Sexe</Label>
                  <Input style={{color: Colors.Grey}}/>
              </Item>
              <Item floatingLabel style = {{borderBottomColor: Colors.Green, borderBottomWidth:2}} >
                  <Label style={{color: Colors.Maron}}>Date de naissance</Label>
                  <Input style={{color: Colors.Grey}}/>
              </Item>
              <Item floatingLabel style = {{borderBottomColor: Colors.Green, borderBottomWidth:2}} >
                  <Label style={{color: Colors.Maron}}>Adresse</Label>
                  <Input style={{color: Colors.Grey}}/>
              </Item>
              <Item floatingLabel style = {{borderBottomColor: Colors.Green, borderBottomWidth:2}} >
                  <Label style={{color: Colors.Maron}}>Niveau</Label>
                  <Input style={{color: Colors.Grey}}/>
                  
              </Item>
             
          </Form>
          <Button block style={{backgroundColor: Colors.Green,  alignSelf: 'center', borderRadius:20,width: '65%', marginTop: 20}} onPress={() => {
              this.setState({load: true});
              setTimeout(function () {
                  Actions.jump('home');
              }, 200);
            
          }}>
              <Text style={styles.textButtonStyle }> Sauvegarder   </Text>
              <Icon name="check" size={20} color={Colors.white}/>
          </Button>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
      <KeyboardSpacer />

           
    </Content>
          
      

           
              
    </Container>
        );
    }

   


}


export default AjoutEnfantScreen;
