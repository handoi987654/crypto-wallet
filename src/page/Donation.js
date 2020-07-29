import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Store} from "../../Store";
import Button from "../component/Button";
import {Ionicons} from '@expo/vector-icons';

class Donation extends Component {
    static contextType = Store;

    state = {
        anonymous: false,
    }

    render() {
        const [{walletId, balance}] = this.context;
        const {navigation, route: {params: {receiverId}}} = this.props;

        return (
            <ScrollView style={styles.view}>
                <Text style={styles.title}>Donate Money</Text>
                <View style={styles.property}>
                    <Text>Balance:</Text>
                    <Text>{balance === -1 ? 'Loading...' : `$ ${balance}`}</Text>
                </View>
                <View style={styles.property}>
                    <Text>Wallet ID:</Text>
                    <Text style={{width: '50%', textAlign: 'right'}}>
                        {walletId === '' ? 'Loading...' : `${walletId.substring(0, 16)}...`}
                    </Text>
                </View>
                <View style={styles.property}>
                    <Text style={{fontWeight: 'bold'}}>Sender:</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                    <CheckBox value={this.state.anonymous}
                              onChange={() => this.setState({anonymous: !this.state.anonymous})}/>
                    <Text>Anonymously</Text>
                </View>
                <View style={styles.property}>
                    <Text style={{fontWeight: 'bold'}}>Receiver:</Text>
                </View>
                <Text style={{marginVertical: 8}}>Wallet ID:</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TextInput multiline={true}
                               value={receiverId}
                               style={{...styles.inputBox, width: '80%'}}/>
                    <TouchableOpacity style={styles.QRButton}
                                      onPress={() => navigation.navigate('QRScanner')}>
                        <Ionicons name="ios-qr-scanner" size={24} color="black"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.property}>
                    <Text>Amount:</Text>
                    <TextInput value={'$ 90'} keyboardType={'number-pad'}
                               style={{width: '50%', textAlign: 'right'}}/>
                </View>
                <Text style={{marginVertical: 8}}>Message:</Text>
                <TextInput multiline={true} numberOfLines={4}
                           value={'Some message'} style={styles.inputBox}/>
                <Button text={'Donate'}/>
                <View style={{height: 32}}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        padding: 16,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    },
    property: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
    },
    inputBox: {
        width: '100%',
        marginVertical: 8,
        padding: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'grey',
    },
    QRButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%',
        marginVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'grey',
    }

});

export default Donation;
