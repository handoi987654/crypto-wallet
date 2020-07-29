import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Modal} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import service from "../service";
import Card from "../component/Card";
import {Store} from "../../Store";
import {DISCARD_CARD, UPDATE_WALLET, UPDATE_CARD} from "../constant";
import Button from "../component/Button";

class Summary extends Component {
    static contextType = Store;

    state = {
        deposit: false,
        withdraw: false,
    }

    cardChecking = cardExisted => {
        switch (cardExisted) {
            case true:
                return <TouchableOpacity
                    style={{flex: 0.8, width: '100%'}}
                    onPress={() => {
                        const {navigation} = this.props;
                        navigation.navigate('CardInfo');
                    }}>
                    <Card/>
                </TouchableOpacity>
            case false:
                return <View style={styles.emptyView}>
                    <Text>You haven't registered any card yet</Text>
                    <Button text={'Register Visa Card'}
                            width={'70%'}
                            onPress={() => {
                                const {navigation} = this.props;
                                navigation.navigate('CardAdding');
                            }}/>
                </View>
            case null:
                return <View style={styles.emptyView}>
                    <Text>Loading...</Text>
                </View>
        }
    }

    openDepositModal = () => this.setState({deposit: true});

    openWithdrawModal = () => this.setState({withdraw: true});

    actionChecking = cardExisted => {
        const buttonStyle = cardExisted ? styles.activeButton : styles.disabledButton;
        const depositEvent = cardExisted ? this.openDepositModal : () => {
        };
        const withdrawEvent = cardExisted ? this.openWithdrawModal : () => {
        };

        return (<View style={styles.actionView}>
            <TouchableOpacity style={{...buttonStyle, ...styles.shadow}}
                              onPress={depositEvent}>
                <Text style={styles.buttonText}>Deposit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...buttonStyle, ...styles.shadow}}
                              onPress={withdrawEvent}>
                <Text style={styles.buttonText}>Withdraw</Text>
            </TouchableOpacity>
        </View>)
    }

    componentDidMount() {
        const dispatch = this.context[1];
        service.getWallet()
            .then(response => dispatch({
                action: UPDATE_WALLET,
                params: {
                    balance: response.data.balance,
                    walletId: response.data.walletId
                }
            }))
            .catch(() => dispatch({
                action: UPDATE_WALLET,
                params: {
                    balance: '???'
                }
            }))
        service.getCard()
            .then(({data}) => dispatch({
                action: UPDATE_CARD,
                params: {
                    card: {
                        name: data.name,
                        number: `**** **** **** ${data.number}`,
                        expYear: data.expYear,
                        expMonth: data.expMonth,
                        cvc: data.cvc,
                        brand: data.brand,
                    }
                }
            }))
            .catch(() => dispatch({action: DISCARD_CARD}));
    }

    render() {
        const [{cardExisted, balance}] = this.context;
        const action = this.state.deposit ? 'Deposit' : 'Withdraw';

        return (
            <View style={styles.view}>
                <View style={styles.balanceCard}>
                    <LinearGradient colors={['#56CCF2', '#2F80ED']}
                                    start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                                    style={styles.background}>
                        <Text style={styles.text}>Balance</Text>
                        <Text style={styles.balance}>{balance === -1 ? 'Loading...' : `$ ${balance}`}</Text>
                    </LinearGradient>
                </View>
                {this.cardChecking(cardExisted)}
                {this.actionChecking(cardExisted)}
                <Modal animationType={'fade'}
                       transparent={true}
                       visible={this.state.deposit || this.state.withdraw}>
                    <TouchableOpacity style={{flex: 1}}
                                      onPress={() => this.setState({deposit: false, withdraw: false})}>
                        <View style={styles.modalView}>
                            <View style={styles.modal}>
                                <Text style={{fontSize: 16}}>Amount to {action.toLowerCase()}:</Text>
                                <TextInput style={styles.amountInput}/>
                                <Button text={action}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        justifyContent: 'space-between',
    },
    balanceCard: {
        flexDirection: 'row',
        height: 128,
    },
    background: {
        flex: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {width: 10, height: 10},
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    balance: {
        color: '#fff',
        fontSize: 40,
        marginTop: 16
    },
    actionView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    activeButton: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
        height: 48,
        backgroundColor: '#2F80ED',
    },
    disabledButton: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
        height: 48,
        backgroundColor: '#BFCCD6'
    },
    shadow: {
        shadowOffset: {width: 10, height: 10},
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    emptyView: {
        width: '100%',
        flex: 0.8,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    registerButton: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        borderRadius: 8,
        backgroundColor: '#2F80ED',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modal: {
        justifyContent: 'space-between',
        width: '100%',
        height: 144,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    amountInput: {
        height: 40,
        padding: 8,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
    },
})

export default Summary;
