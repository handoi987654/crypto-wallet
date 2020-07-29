import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Wallet from "./Wallet";
import Profile from "./Profile";
import Transaction from "./Transaction";
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Home = () => {

    // noinspection JSUnusedGlobalSymbols
    return (
        <Tab.Navigator initialRouteName={'Transaction'}
                           screenOptions={({route}) => ({
                           tabBarIcon: ({focused}) => {
                               let name = 'ios-wallet';
                               switch (route.name) {
                                   case 'Transaction':
                                       name = 'md-swap';
                                       break;
                                   case 'Profile':
                                       name = 'ios-person';
                                       break;
                               }
                               const size = focused ? 24 : 20;
                               const color = focused ? '#2F80ED' : '#000'
                               return <Ionicons name={name} size={size} color={color}/>
                           }
                       })}>
            <Tab.Screen name="Wallet" component={Wallet}/>
            <Tab.Screen name="Transaction" component={Transaction}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    );
}

export default Home;
