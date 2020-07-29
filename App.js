import React from 'react';
import Login from "./src/page/Login";
import Register from "./src/page/Register";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./src/page/Home";
import * as Font from "expo-font";
import {StoreProvider} from "./Store";
import store from "./src/store";
import reducer from "./src/reducer";

const Stack = createStackNavigator();
const option = {
    headerShown: false
}

// noinspection JSUnusedGlobalSymbols
export default function App() {

    Font.loadAsync({'Credit-Font': require('./assets/credit-font.otf')});

    return (
        <StoreProvider store={store} reducer={reducer}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Login'>
                    <Stack.Screen name='Login' component={Login} options={option}/>
                    <Stack.Screen name='Register' component={Register} options={option}/>
                    <Stack.Screen name='Home' component={Home} options={option}/>
                </Stack.Navigator>
            </NavigationContainer>
        </StoreProvider>
    );
}
