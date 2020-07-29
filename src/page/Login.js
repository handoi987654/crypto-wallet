import React from 'react';
import {Asset} from "expo-asset";
import {View, StyleSheet, Image, TextInput, Text} from 'react-native';
import AuthLayout from "../layout/AuthLayout";
import service from "../service";
import Button from "../component/Button";

const logo = {
    uri: Asset.fromModule(require('../../assets/logo.png')).uri,
}

const Login = ({navigation}) => {

    return (
        <AuthLayout>
            <Image source={logo} style={styles.logo}/>
            <View style={styles.inputView}>
                <TextInput placeholder='Username'
                           placeholderTextColor={'white'}/>
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder='Password'
                           placeholderTextColor='white'
                           secureTextEntry={true}/>
            </View>
            <View style={{height: 20}}/>
            <Button text={'LOGIN'}
                    onPress={() => {
                        service.login().then(response => {
                            service.saveToken(response.data.securityToken);
                            navigation.navigate('Home', {
                                screen: 'Wallet'
                            })
                        })
                    }}/>
            <Text style={styles.registerText}
                  onPress={() => navigation.navigate('Register')}>Don't have account? Register Now</Text>
        </AuthLayout>
    )
}

const styles = StyleSheet.create({
    logo: {
        flex: 0.5,
        resizeMode: 'center',
    },
    inputView: {
        paddingTop: 16,
    },
    loginButton: {
        paddingVertical: 16,
    },
    registerText: {
        textAlign: 'center',
        color: 'white',
        textDecorationLine: 'underline'
    }
});

export default Login;
