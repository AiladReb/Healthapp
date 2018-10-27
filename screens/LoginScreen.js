import React, {Component} from 'react'
import {ScrollView, Text, KeyboardAvoidingView, View, ImageBackground} from 'react-native'
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Container, Button, Content, Item, Form, Label, Input, Thumbnail, Image} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {BarIndicator} from 'react-native-indicators'
// Styles
import styles from '../screenStyle/LoginScreenStyle';
import Colors from "../constants/Colors";
import {Actions} from 'react-native-router-flux'


import KeyboardSpacer from 'react-native-keyboard-spacer';

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            load: false
        }

    }

    onLoginPressed = () => {

    }


    login() {
        this.setState({load: true});
        setTimeout(function () {
             Actions.jump("home");
        }, 2000);
    }

  

    render() {
        if (this.state.load) {
            return <BarIndicator color={Colors.Green} count={5}/>;
        }
        return (
  
            <Container  style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 55}}>
              
              <Thumbnail source={require('../assets/images/login.png')} 
                                              style={{height: '59%', width: '100%', borderRadius:0}}/>
                                
                <Form style={{ height: '13%', width: '75%', borderColor: Colors.white}}>
                        <Item floatingLabel>
                            <Label style={{color: Colors.Maron}}>Numéro de téléphone</Label>
                            <Input style={{color: Colors.Green}}/>
                        </Item>
                        <View style={{margin:"1%", borderColor: Colors.Green, borderWidth: 1, alignSelf: 'stretch'}}/>
                    </Form>
                    <Form style={{ height: '13%', width: '75%' , borderColor: Colors.white}}>
                        <Item floatingLabel>
                            <Label style={{color: Colors.Maron}}>Mot de passse</Label>
                            <Input style={{color: Colors.Green}}/>                            
                            
                        </Item>
                        <View style={{margin:"1%", borderColor: Colors.Green, borderWidth: 1, alignSelf: 'stretch'}}/>
                    </Form>
                        <Button block style={{backgroundColor: Colors.Green, alignSelf: 'center', borderRadius:20,width: '65%' , marginTop : 30}} 
                        onPress={() => {
                                     this.login();
                        }}>
                            <Text style={styles.textButtonStyle }>Connecter</Text>
                        </Button>
                        <KeyboardSpacer />
                        
                        
            </Container>
        
           
        )
    }
}


export default LoginScreen;