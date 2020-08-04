import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Keyboard} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from "../component/Button";
import service from "../service";
import {Store} from "../../Store";
import {RELOAD_CARD} from "../constant";
import {exp} from "react-native-reanimated";

class CardAdding extends Component {
    static contextType = Store;

    state = {
        name: 'Vo Duy Tan',
        cardNumber: '',
        cvc: '',
        expiredDate: Date.now(),
        pickerEnabled: false,
    }

    formattedNumber = s => {
        let text = '';
        for (let i = 0; i < 16; i++) {
            if (i % 4 === 0 && i !== 0) text += ' ';
            if (s[i]) text += s[i];
            else text += '*';
        }

        return text;
    }

    formattedDate = timestamp => {
        const date = new Date(timestamp);
        return date.toLocaleDateString();
    }

    addCard = () => {
        let valid = true;
        let errors = '';

        const number = parseInt(this.state.cardNumber) + '';
        if (number !== this.state.cardNumber) {
            valid = false;
            errors += '- Card number is invalid!\n'
        }

        if (this.state.name.trim() === '') {
            valid = false;
            errors += '- Name cannot be empty!\n'
        }

        const cvc = this.state.cvc;
        for (let i = 0; i < cvc.length; i++) {
            const charCode = cvc.charCodeAt(i);
            if (charCode < 48 || charCode > 57) {
                valid = false;
                errors += '- CVC is invalid!\n';
                break;
            }
        }

        const today = Date.now();
        if (today > this.state.expiredDate) {
            valid = false;
            errors += '- Is your card expired???\n'
        }

        if (!valid) {
            Alert.alert('Invalid Info', errors,
                [{text: 'OK'}])
        } else {
            const expiredDate = new Date(this.state.expiredDate);
            service.addCard({
                name: this.state.name,
                number: this.state.cardNumber,
                expYear: expiredDate.getFullYear(),
                expMonth: expiredDate.getMonth() + 1,
                cvc: this.state.cvc,
                brand: 'Visa',
            }).then(() => {
                const dispatch = this.context[1];
                dispatch({action: RELOAD_CARD});

                const {navigation} = this.props;
                navigation.navigate('Summary');
            }).catch(error => {
                console.log(error);
                Alert.alert('Error', error, [{text: 'OK'}]);
            })
        }
    }

    enterCardNumber = () => {
        const inputField = this.refs['number-input'];
        if (inputField.isFocused()) {
            inputField.blur();
        } else {
            inputField.focus();
        }
    }

    render() {
        return (
            <View style={styles.view}>
                <Text>Register Visa Card</Text>
                <TouchableOpacity style={styles.cardNumberView}
                                  onPress={this.enterCardNumber}>
                    <Text style={styles.cardNumber}>
                        {this.formattedNumber(this.state.cardNumber)}
                    </Text>
                    <TextInput keyboardType='number-pad'
                               ref={'number-input'}
                               maxLength={16}
                               onChange={event => this.setState({cardNumber: event.nativeEvent.text})}
                               style={{height: 0}}/>
                </TouchableOpacity>
                <View style={styles.inputView}>
                    <Text>Name:</Text>
                    <TextInput value={this.state.name}
                               onChange={event => this.setState({name: event.nativeEvent.text})}
                               style={styles.textInput}/>
                </View>
                <View style={styles.inputView}>
                    <Text>CVC:</Text>
                    <TextInput placeholder='Type in your CVC'
                               keyboardType='number-pad'
                               maxLength={4}
                               value={this.state.cvc}
                               onChange={event => this.setState({cvc: event.nativeEvent.text})}
                               style={styles.textInput}/>
                </View>
                <View style={styles.inputView}>
                    <Text>Expired Date:</Text>
                    <TouchableOpacity onPress={() => this.setState({pickerEnabled: true})}>
                        <Text>{this.formattedDate(this.state.expiredDate)}</Text>
                    </TouchableOpacity>
                    {this.state.pickerEnabled &&
                    <DateTimePicker value={this.state.expiredDate}
                                    onChange={(event, selectedDate) => {
                                        if (event.type !== 'set') return;
                                        this.setState({expiredDate: selectedDate, pickerEnabled: false})
                                    }}/>}
                </View>
                <Button text={'Register'} width={'80%'}
                        onPress={this.addCard}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    cardNumberView: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    cardNumber: {
        fontFamily: 'Credit-Font',
        fontSize: 20,
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    textInput: {
        width: '50%',
        textAlign: 'right',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '10%',
        borderRadius: 8,
        backgroundColor: '#2F80ED',
    },
    shadow: {
        shadowOffset: {width: 10, height: 10},
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 2,
    },
})

export default CardAdding;
