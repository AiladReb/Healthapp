import React, {Component} from 'react';
import {View, Linking, Modal, StyleSheet , TouchableOpacity} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Button, Thumbnail, Container, Content} from 'native-base';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import {Actions} from 'react-native-router-flux'



export default class SideBar extends Component {

    constructor(props) {
        super(props) ; 
        this.state = {
            load: false,
        };


        }
    register = () => {
        this.setState({load: true});
        setTimeout(function () {
             Actions.jump("register");

        }, 1000);
    }
    AjoutEnfant = () => {
        this.setState({load: true});
        setTimeout(function () {
             Actions.jump("AjoutEnfantScreen");

        }, 1000);
    }

    AjoutZone = () => {
        this.setState({load: true});
        setTimeout(function () {
             Actions.jump("AjoutZoneScreen");

        }, 1000);
    }

    render() {
        return (

            <Grid style={{backgroundColor: Colors.white}}>
                <Row size={5} style={{justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' , backgroundColor :"#36A97A"}}>
                    <Thumbnail square
                               source={require('../assets/images/Profile.png')}
                               resizeMode="contain"
                               style={{ alignSelf: 'center' , width : 100 , height : 100 , marginLeft : 10}}/>
                               <View style={{justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                                   <Text style={{ fontSize : 13 , color : "white"}} > ZELLAT Abdelkhalek </Text>
                                   <View style={{flexDirection : "row" , justifyContent:'center'}} >
                                   <Icon name="phone" size={20} color="white" />
                                   <Text style={{ fontSize : 13 , color : "white"}} > 0541 32 72 88</Text>
                                    </View>
                                   
                                </View>
                </Row>
                <Row size={10} style={styles.CotainerStyle }>
                
                <Button block style={styles.buttonStyle}
                       onPress={this.register}>

                        <Grid>
                            <Col size={1}>
                                <Icon name="user" size={20} color={Colors.Green}/>
                            </Col>
                            <Col size={3} style={styles.labelContainer}>
                                <Text style={styles.labelStyle}> Mon Profil</Text>
                            </Col>
                        </Grid>
                    </Button>

                    <Button block style={styles.buttonStyle}    onPress={this.AjoutZone}>

                        <Grid>
                            <Col size={1}>
                                <Icon name="map-marker" size={20} color={Colors.Green}/>
                            </Col>
                            <Col size={3} style={styles.labelContainer}>
                                <Text style={styles.labelStyle}>Ajouter un endroit</Text>
                            </Col>
                        </Grid>
                    </Button>

                    <Button block style={styles.buttonStyle}    onPress={this.AjoutEnfant}>

<Grid>
    <Col size={1}>
        <Icon name="child" size={20} color={Colors.Green}/>
    </Col>
    <Col size={3} style={styles.labelContainer}>
        <Text style={styles.labelStyle}>Ajouter un enfant </Text>
    </Col>
</Grid>
</Button>

                   
                    <Button block style={styles.buttonStyle}
                            onPress={() => {
                               
                            }}>
                        <Grid>
                            <Col size={1}>
                                <Icon name="calendar"  size={20} color={Colors.Green}/>
                            </Col>
                            <Col size={3} style={styles.labelContainer}>
                                <Text style={styles.labelStyle}>Planifier</Text>
                            </Col>
                        </Grid>
                    </Button>
                    <Button block style={styles.buttonStyle}
                            onPress={() => {
                               
                            }}>
                        <Grid>
                            <Col size={1}>
                                <Icon name="calendar" size={20} color={Colors.Green}/>
                            </Col>
                            <Col size={3} style={styles.labelContainer}>
                                <Text style={styles.labelStyle}>Mes planifications</Text>
                            </Col>
                        </Grid>
                    </Button>
  
                  


                  
                    <Button block style={styles.buttonStyle}
                            onPress={() => {
                            
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
        color: '#000',
        fontSize: 20
    },
    buttonStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        borderWidth: 0,
        borderColor:'transparent'
      

    },
    images: {
        alignSelf: 'center',
    }
}


