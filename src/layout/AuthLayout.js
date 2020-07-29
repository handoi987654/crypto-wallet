import React from "react";
import {ImageBackground, StyleSheet, View, KeyboardAvoidingView} from "react-native";

const image = {
    uri: 'https://2.bp.blogspot.com/-sfRWMp0J8kM/UZDhjXSN0aI/AAAAAAAACsw/_1JNKYYbX64/s1600/Sydney-Opera.house_iphone5-wallpaper.jpg'
}

const AuthLayout = ({children}) => (
    <View style={styles.view}>
        <ImageBackground source={image} style={styles.image}>
            <KeyboardAvoidingView behavior={'height'}
                                  style={styles.overlay}>
                {children}
            </KeyboardAvoidingView>
        </ImageBackground>
    </View>
)

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column'
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    overlay: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 16,
        paddingVertical: 64
    },
});

export default AuthLayout;
