import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Home from "../screens/Home";




const RouterComponent = () => {
    return (
        <Router
            navigationBarStyle={{backgroundColor: '#FFFFFF'}}
            titleStyle={{color: '#fff'}}
            sceneStyle={{backgroundColor: '#FFFFFF', marginTop: 18}}>
            <Scene key="root">
                <Scene key="LoginScreen" component={LoginScreen} hideNavBar/>
                <Scene key="home" component={Home} hideNavBar/>
               




            </Scene>

        </Router>
    );
};

export default RouterComponent;
  