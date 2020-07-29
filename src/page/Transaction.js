import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import HistoryList from "./HistoryList";
import Donation from "./Donation";
import HomeLayout from "../layout/HomeLayout";
import QRScanner from "./QRScanner";

const Stack = createStackNavigator();
const option = {
    headerShown: false
}

const Transaction = () => (
    <HomeLayout title={'Transaction'}>
        <Stack.Navigator initialRouteName={'HistoryList'}>
            <Stack.Screen name={'HistoryList'} component={HistoryList} options={option}/>
            <Stack.Screen name={'Donation'} component={Donation} options={option}
                          initialParams={{receiverId: ''}}/>
            <Stack.Screen name={'QRScanner'} component={QRScanner} options={option}/>
        </Stack.Navigator>
    </HomeLayout>
)

export default Transaction;
