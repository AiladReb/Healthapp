import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginScreen from "../screens/LoginScreen";
import Home from "../screens/Home";
import RegisterScreen from '../screens/RegisterScreen'



const RouterComponent = () => {
    return (
        <Router
            navigationBarStyle={{backgroundColor: '#FFFFFF'}}
            titleStyle={{color: '#fff'}}
            sceneStyle={{backgroundColor: '#FFFFFF', marginTop: 18}}>
            <Scene key="root">
                <Scene key="LoginScreen" component={LoginScreen} hideNavBar/>
                <Scene key="home" component={Home} hideNavBar/>
                <Scene key="register" component={RegisterScreen} hideNavBar/>
            </Scene>

        </Router>
    );
};

export default RouterComponent;
  