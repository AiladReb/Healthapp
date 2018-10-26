import { Container, Navbar } from 'navbar-native';
import React from 'react';


<Container>
                <Navbar
                    title={"Navbar Native"}
                    left={{
                        icon: "ios-arrow-back",
                        label: "Back",
                        onPress: () => {alert('Go back!')}
                    }}
                    right={[{
                        icon: "ios-search",
                        onPress: () => {alert('Search!')}
                    },{
                        icon: "ios-menu",
                        onPress: () => {alert('Toggle menu!')}
                    }]}
                />
                ... other stuff ...
</Container>


export class NavBar extends React.Component {
    render() {
        return (
            {NavBarElement}
        )
    }
}