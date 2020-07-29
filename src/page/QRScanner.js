import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {BarCodeScanner} from "expo-barcode-scanner";

class QRScanner extends Component {

    async componentDidMount() {
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission Denied!');
        }
    }

    scanQRCode = ({data}) => {
        if (data.trim() !== '') {
            const {navigation} = this.props;
            navigation.navigate('Donation', {
                receiverId: data.trim(),
            })
        }
    }

    render() {
        return (
            <View style={styles.view}>
                <BarCodeScanner type={BarCodeScanner.Constants.Type.back}
                                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                                style={StyleSheet.absoluteFillObject}
                                onBarCodeScanned={this.scanQRCode}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#000'
    }
})

export default QRScanner;
