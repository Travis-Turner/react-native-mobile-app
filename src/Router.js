import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainMenu from './components/MainMenu';
import Play from './components/Play';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar duration={1}>
                <Scene key="menu" hideNavBar>
                    <Scene 
                        key="mainMenu"
                        title="mainMenu"
                        component={MainMenu}
                        duration={1}
                    />
                </Scene>
                <Scene key="game" hideNavBar>
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