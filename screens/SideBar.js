import React, {Component} from 'react';
import {View, Linking, Modal} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Button, Thumbnail, Container, Content} from 'native-base';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../constants';
import {Actions} from 'react-native-router-flux'


export default class SideBar extends Component {
    render() {
        return (

            <Grid style={{backgroundColor: Colors.DarkBlue}}>
                <Row size={5} style={{justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <Thumbnail square
                               source={require('../assets/robot-dev.png')}
                               style={{width: 120, height: 120, alignSelf: 'center', marginTop: 40}}/>
                </Row>
                <Row size={10} style={styles.CotainerStyle}>
                    <Button block style={styles.buttonStyle}
>
                        <Grid>
                            <Col size={1}>
                                <Icon name="user" size={20} color={Colors.Green}/>
                            </Col>
                            <Col size={3} style={styles.labelContainer}>
                                <Text style={styles.labelStyle}>Profil</Text>
                            </Col>
                        </Grid>
                    </Button>

                    <Button block style={styles.buttonStyle}
>
                        <Grid>
                            <Col size={1}>
                                <Icon name="road" size={20} color={Colors.Green}/>
                            </Col>
                            <Col size={3} style={styles.labelContainer}>
                                <Text style={styles.labelStyle}>Trajet</Text>
                            </Col>
                        </Grid>
                    </Button>

                    <View style={{margin: 20, borderColor: Colors.Green, borderWidth: 1, alignSelf: 'stretch'}}/>

                    <Button block style={styles.buttonStyle}
                            onPress={() => {
                                //todo follow us on twitter
                                Linking.openURL('https://twitter.com/Hala_chat');
                            }}>
                        <Grid>
                            <Col size={1}>
                                <Icon name="credit-card" size={20} color={Colors.Green}/>
                            </Col>
                            <Col size={3} style={styles.labelContainer}>
                                <Text style={styles.labelStyle}>S'abonner</Text>
                            </Col>
                        </Grid>
                    </Button>
                    <Button block style={styles.buttonStyle}
                            onPress={() => {
                                //todo follow us on twitter
                                Linking.openURL('https://twitter.com/Hala_chat');
                            }}>
                        <Grid>
                            <Col size={1}>
                                <Icon name="credit-card" size={20} color={Colors.Green}/>
                            </Col>
                            <Col size={3} style={styles.labelContainer}>
                                <Text style={styles.labelStyle}>Mes abonnements</Text>
                            </Col>
                        </Grid>
                    </Button>
        // <Button block style={styles.buttonStyle}
                           >
                        <Grid>
                            <Col size={1}>
                                <Icon name="qrcode" size={20} color={Colors.Green}/>
                            </Col>
                            <Col size={3} style={styles.labelContainer}>
                                <Text style={styles.labelStyle}>Acheter Ticket</Text>
                            </Col>
                        </Grid>
                    </Button>
                    <Button block style={styles.buttonStyle}
                            >
                        <Grid>
                            <Col size={1}>
                                <Icon name="qrcode" size={20} color={Colors.Green}/>
                            </Col>
                            <Col size={3} style={styles.labelContainer}>
                                <Text style={styles.labelStyle}>Mes tickets</Text>
                            </Col>
                        </Grid>
                    </Button>


                    <View style={{margin: 20, borderColor: Colors.Green, borderWidth: 1, alignSelf: 'stretch'}}/>

                    <Button block style={styles.buttonStyle}
                            onPress={() => {
                                //todo follow us on twitter
                                Linking.openURL('https://twitter.com/Hala_chat');
                            }}>
                        <Grid>
                            <Col size={1}>
                                <Icon name="wrench" size={20} color={Colors.Green}/>
                            </Col>
                            <Col size={3} style={styles.labelContainer}>
                                <Text style={styles.labelStyle}>Paramétres</Text>
                            </Col>
                        </Grid>
                    </Button>
                </Row>
            </Grid>

        );
    };
}

const styles = {
    CotainerStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 40
    },
    labelContainer: {
        justifyContent: 'flex-end'
    },
    labelStyle: {
        color: '#fff',
        fontSize: 20
    },
    buttonStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderColor: '#fff'

    },
    images: {
        alignSelf: 'center',
    }
}


