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


class RegisterScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            load: false
        }

    }

    renderForm() {
        if (this.state.load) {
            return <BarIndicator color={Colors.Green} count={5}/>;
        }
        return (
            <Row size={3} style={styles.registerContainer}>
                <Form>
                    <Item floatingLabel>
                        <Label style={{color: Colors.Maron}}>Username</Label>
                        <Input style={{color: Colors.Green}}/>
                    </Item>
                    <Item floatingLabel last>
                        <Label style={{color: Colors.Maron}}>email</Label>
                        <Input style={{color: Colors.Green}}/>
                    </Item>
                    <Item floatingLabel>
                        <Label style={{color: Colors.Maron}}>password</Label>
                        <Input style={{color: Colors.Green}}/>
                    </Item>
                    <Item floatingLabel>
                        <Label style={{color: Colors.Maron}}>confirm your password</Label>
                        <Input style={{color: Colors.Green}}/>
                    </Item>
                </Form>
                <Button block style={{backgroundColor: Colors.Green}} onPress={() => {
                    this.setState({load: true});
                    setTimeout(function () {
                        Actions.jump('home');
                    }, 2000);
                }}>
                    <Text style={styles.textButtonStyle}>Submit</Text>
                </Button>

            </Row>
        );
    }

    buttonPressed = () => {
        console.log("pressed");
    }

    render() {

        return (
            <Grid style={[styles.GridContainerStyles, {backgroundColor: Colors.DarkBlue}]}>
                <Row size={2} style={styles.thumbContainer}>
                    <Thumbnail square
                               source={require('../assets/images/robot-dev.png')}
                               style={{width: 120, height: 120, alignSelf: 'center'}}/>
                </Row>

                {this.renderForm()}

            </Grid>
        )
    }


}


export default RegisterScreen;
