import React from "react";
import {StyleSheet, Text, View, KeyboardAvoidingView} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

const HomeLayout = ({children, title}) => (
    <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.headerView}>
            <LinearGradient colors={['#56CCF2', '#2F80ED']}
                            start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                            style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
            </LinearGradient>
        </View>
        {children}
    </KeyboardAvoidingView>
)

const styles = StyleSheet.create({
    headerView: {
        flex: 0.2,
        minHeight: 40,
        maxHeight: 80,
        backgroundColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    headerText: {
        textAlign: 'center',
        marginBottom: 16,
        fontSize: 24,
        color: '#fff',
    },
})

export default HomeLayout;
