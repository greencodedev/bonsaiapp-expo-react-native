import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import { SignInScreen } from "../screens";


const AppNavigator = createSwitchNavigator({
        SignIn: { screen: SignInScreen },
    },
    {
        initialRouteName: 'SignIn',
    }
    
);

export default createAppContainer(AppNavigator);