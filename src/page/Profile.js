import React, {Component} from "react";
import {View, StyleSheet, Image, ScrollView, Alert} from "react-native";
import Button from "../component/Button";
import HomeLayout from "../layout/HomeLayout";
import service from "../service";
import Property from "../component/Property";

class Profile extends Component {

    state = {
        fullName: '',
        phone: '',
        address: '',
        bio: '',
        city: '',
        state: '',
        country: '',
        avatar: {
            uri: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t31.0-8/p960x960/18121290_837224949764599_8704671152945508875_o.jpg' +
                '?_nc_cat=102&_nc_sid=85a577&_nc_oc=AQkM0kpn1XJP6D_NURh7zVZz7blt_ujRmm-om7YyGn5SlAITgBxEJtGMiVyoPbqBHDh4qDSKWkP6Dlj' +
                'm-Ku4UpxP&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=6&oh=0bcb67a3efe7fca41184526fc4924a87&oe=5F26092B'
        }
    }

    getProfile = () => {
        service.getProfile()
            .then(({data}) => this.setState({
                fullName: data.fullName,
                phone: data.phone,
                address: data.address,
                bio: data.bio,
                city: data.city,
                state: data.state,
                country: data.country,
                avatar: {
                    uri: data.avatar
                }
            }))
            .catch(error => {
                alert('Error while getting your profile!')
                console.log(error)
            })
    }

    updateProfile = () => {
        service.updateProfile({
            fullName: this.state.fullName,
            phone: this.state.phone,
            address: this.state.address,
            bio: this.state.bio,
            city: this.state.city,
            postCode: 0,
            state: this.state.state,
            country: this.state.country,
            birthday: "2020-08-04T13:14:51.352Z"
        }).then(() => this.getProfile())
            .catch(error => {
                alert('Error while updating your profile!');
                console.log(error);
            })
    }

    componentDidMount() {
        this.getProfile();
    }

    render() {
        const {navigation} = this.props;

        return (
            <HomeLayout title={'Profile'}>
                <ScrollView style={styles.view}>
                    <View style={styles.logoView}>
                        <Image source={this.state.avatar} style={styles.avatar}/>
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
                        <Button text={'UPDATE PROFILE'} onPress={this.updateProfile}/>
                    </View>
                    <View style={{marginBottom: 32}}>
                        <Button text={'LOG OUT'} backgroundColor={'#dc3545'}
                                onPress={() => service.logout()
                                        .then(() => navigation.navigate('Login'))
                                        .catch(error => alert(error))}/>
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
