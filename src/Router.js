import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainMenu from './components/MainMenu';
import Play from './components/Play';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="menu" hideNavBar duration={0}>
                    <Scene 
                        key="mainMenu"
                        title="mainMenu"
                        component={MainMenu}
                    />
                </Scene>
                <Scene key="game" hideNavBar duration={0}>
                    <Scene 
                    key="play"
                    title="play"
                    component={Play}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;