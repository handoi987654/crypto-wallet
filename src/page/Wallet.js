import React, {Component} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeLayout from "../layout/HomeLayout";
import Summary from "./Summary";
import CardInfo from "./CardInfo";
import CardAdding from "./CardAdding";

const Stack = createStackNavigator();
const option = {
    headerShown: false
}

class Wallet extends Component {

    render() {
        return (
            <HomeLayout title={'Wallet'}>
                <Stack.Navigator initialRouteName={'Summary'}>
                    <Stack.Screen name={'Summary'} component={Summary} options={option}/>
                    <Stack.Screen name={'CardInfo'} component={CardInfo} options={option}/>
                    <Stack.Screen name={'CardAdding'} component={CardAdding} options={option}/>
                </Stack.Navigator>
            </HomeLayout>
        )
    }
}

export default Wallet;
