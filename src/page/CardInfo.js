import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Card from "../component/Card";
import {Store} from "../../Store";
import service from "../service";
import Button from "../component/Button";

class CardInfo extends Component {
    static contextType = Store;

    render() {
        const [{card}] = this.context;

        return (
            <View style={styles.view}>
                <View style={styles.infoView}>
                    <View style={{flex: 0.9}}>
                        <Card/>
                    </View>
                    <View style={styles.info}>
                        <Text>CVC:</Text>
                        <Text>{card.cvc}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text>Brand:</Text>
                        <Text>{card.brand}</Text>
                    </View>
                </View>
                <View style={styles.actionView}>
                    <Button text={'REMOVE CARD'}
                            backgroundColor={'#dc3545'}
                            onPress={() => service.removeCard()
                                .then(response => console.log(response.data))
                                .catch(error => console.log(error))}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-between'
    },
    infoView: {
        flex: 0.7,
        justifyContent: 'space-between',
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 8
    },
    button: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        backgroundColor: '#dc3545',
        shadowOffset: {width: 10, height: 10},
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
})

export default CardInfo;
