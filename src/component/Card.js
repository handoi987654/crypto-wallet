import React from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Asset} from "expo-asset";
import {useStore} from "../../Store";

const visaImage = Asset.fromModule(require('../../assets/visa.png'));

const Card = () => {
    const [{card}] = useStore();
    return (
        <LinearGradient colors={['#00d4ff', '#006cff', '#a200ff', '#ff00db']}
                        start={{x: 0, y: 1}} end={{x: 1, y: 0}}
                        style={styles.cardView}>
            <View style={styles.metadata}>
                <Text style={{color: 'white', fontSize: 18}}>{card.name}</Text>
                <Image source={visaImage} style={styles.visaImage}/>
            </View>
            <Text style={styles.cardNumber}>{card.number}</Text>
            <Text style={{width: '100%', color: 'white'}}>Valid
                until: {card.expMonth}/{card.expYear}</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 16,
        borderRadius: 8,
        shadowOffset: {width: 10, height: 10},
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
    },
    cardNumber: {
        fontFamily: 'Credit-Font',
        fontSize: 20,
        color: 'white',
    },
    metadata: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    visaImage: {
        width: 96,
        height: 32,
        resizeMode: 'center',
    }
})

export default Card;
