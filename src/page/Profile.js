import React, {Component} from "react";
import {View, StyleSheet, Image, ScrollView, Alert} from "react-native";
import Button from "../component/Button";
import HomeLayout from "../layout/HomeLayout";
import * as ImagePicker from 'expo-image-picker';
import service from "../service";
import Property from "../component/Property";

const avatar = {
    uri: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t31.0-8/p960x960/18121290_837224949764599_8704671152945508875_o.jpg' +
        '?_nc_cat=102&_nc_sid=85a577&_nc_oc=AQkM0kpn1XJP6D_NURh7zVZz7blt_ujRmm-om7YyGn5SlAITgBxEJtGMiVyoPbqBHDh4qDSKWkP6Dlj' +
        'm-Ku4UpxP&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=6&oh=0bcb67a3efe7fca41184526fc4924a87&oe=5F26092B'
}

class Profile extends Component {

    state = {
        fullName: '',
        phone: '',
        address: '',
        bio: '',
        city: '',
        state: '',
        country: '',
    }

    openImagePicker = async () => {
        const permission = await ImagePicker.requestCameraRollPermissionsAsync();
        if (!permission.granted) {
            Alert.alert("Access to Camera Roll is required!");
            return;
        }

        const pickedImage = await ImagePicker.launchImageLibraryAsync();
        console.log(pickedImage);
    }

    render() {
        const {navigation} = this.props;

        return (
            <HomeLayout title={'Profile'}>
                <ScrollView style={styles.view}>
                    <View style={styles.logoView}>
                        <Image source={avatar} style={styles.avatar}/>
                    </View>
                    <View style={styles.chooseImageView}>
                        <Button text='CHANGE PROFILE IMAGE'
                                width='58%'
                                onPress={this.openImagePicker}/>
                    </View>
                    <Property field={'Name'} value={this.state.fullName}
                              onChange={event => this.setState({fullName: event.nativeEvent.text})}/>
                    <Property field={'Phone'} value={this.state.phone}
                              onChange={event => this.setState({phone: event.nativeEvent.text})}/>
                    <Property field={'Address'} value={this.state.address}
                              onChange={event => this.setState({address: event.nativeEvent.text})}/>
                    <Property field={'Bio'} value={this.state.bio}
                              onChange={event => this.setState({bio: event.nativeEvent.text})}/>
                    <Property field={'City'} value={this.state.city}
                              onChange={event => this.setState({city: event.nativeEvent.text})}/>
                    <Property field={'State'} value={this.state.state}
                              onChange={event => this.setState({state: event.nativeEvent.text})}/>
                    <Property field={'Country'} value={this.state.country}
                              onChange={event => this.setState({country: event.nativeEvent.text})}/>
                    <View style={{marginVertical: 16}}>
                        <Button text={'UPDATE PROFILE'}/>
                    </View>
                    <View style={{marginBottom: 32}}>
                        <Button text={'LOG OUT'} backgroundColor={'#dc3545'}
                                onPress={() => {
                                    service.logout()
                                        .then(() => navigation.navigate('Login'))
                                        .catch(error => console.log(error))
                                }}/>
                    </View>
                </ScrollView>
            </HomeLayout>
        );
    }
}

const imageSize = 128;
const styles = StyleSheet.create({
    view: {
        flex: 0.8,
        padding: 16,
    },
    logoView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline'
    },
    avatar: {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    },
    chooseImageView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 16
    },
    property: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingBottom: 16,
    },
    keyText: {
        fontSize: 16
    },
    input: {
        fontSize: 16,
        textAlign: 'right',
    },
    logoutButton: {
        backgroundColor: '#dc3545',
    }
})

export default Profile;
