import React, {Component} from 'react';
import {
    Text, Left, Right, Button, Title, Body,Header
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from "../constants/Colors";

class MyHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header style={{backgroundColor:Colors.Green}}>
                <Left>
                    <Button transparent onPress={this.props.open}>
                        <FontAwesome name="bars" size={20} color={Colors.white}/>
                    </Button>
                </Left>
                <Body>
                <Title style={{color:Colors.white}}>{this.props.title}</Title>
                </Body>
                <Right>
                    <Button transparent>

                    </Button>
                </Right>
            </Header>
        );
    }
}

export default MyHeader;



