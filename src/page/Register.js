import React from 'react';
import {Asset} from "expo-asset";
import {View, StyleSheet, Image, Button, TextInput, Text} from 'react-native';
import AuthLayout from "../layout/AuthLayout";

const logo = {
    uri: Asset.fromModule(require('../../assets/logo.png')).uri,
}

const Register = ({navigation}) => {

    return (
        <AuthLayout>
            <Image source={logo} style={styles.logo}/>
            <View style={styles.inputView}>
                <TextInput placeholder='Username'
                           placeholderTextColor='white'
                           inputStyle={styles.textColor}/>
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder='Email'
                           placeholderTextColor='white'
                           inputStyle={styles.textColor}/>
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder='Password'
                           placeholderTextColor='white'
                           inputStyle={styles.textColor}
                           secureTextEntry={true}/>
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder='Retype Password'
                           placeholderTextColor='white'
                           inputStyle={styles.textColor}
                           secureTextEntry={true}/>
            </View>
            <View style={{height: 20}}/>
            <Button title='Register' style={styles.registerButton}/>
            <Text style={styles.loginText}
                  onPress={() => navigation.navigate('Login')}>Already have an account? Login Now</Text>
        </AuthLayout>
    )
}

const styles = StyleSheet.create({
    logo: {
        flex: 0.2,
        resizeMode: 'center',
    },
    inputView: {
        paddingTop: 16,
    },
    textColor: {
        color: 'white',
    },
    registerButton: {
        paddingVertical: 16,
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        textDecorationLine: 'underline',
        paddingTop: 16,
    }
});

export default Register;
