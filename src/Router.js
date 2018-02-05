import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainMenu from './components/MainMenu';
import Play from './components/Play';
import Reference from './components/Reference';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar duration={1} {...mainConfig}>
                <Scene key="menu" hideNavBar>
                    <Scene 
                        key="mainMenu"
                        title="mainMenu"
                        component={MainMenu}
                        duration={1}
                    />
                </Scene>
                <Scene key="game" hideNavBar {...gameConfig}>
                    <Scene 
                    key="play"
                    title="play"
                    component={Play}  
                    />
                </Scene>
                <Scene key="other" hideNavBar {...gameConfig}>
                    <Scene 
                        key="reference"
                        title="reference"
                        component={Reference}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

var mainConfig = {
    cardStyle: {
          backgroundColor: 'white'
    }
}
var gameConfig = {
    cardStyle: {
        backgroundColor: '#F4F4F4'
    }
}

export default RouterComponent;