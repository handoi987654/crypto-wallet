import React, {Component} from "react";
import {View, StyleSheet, Text, FlatList, ActivityIndicator, TouchableOpacity} from "react-native";
import History from "../component/History";
import service from '../service';

class HistoryList extends Component {

    state = {
        historyList: [],
        loaded: false,
    }

    mainScreen = loaded => {
        if (!loaded) {
            return <ActivityIndicator size="large" color="#2F80ED"/>
        } else {
            return <FlatList data={this.state.historyList}
                             renderItem={({item}) => <History history={item}/>}
                             keyExtractor={item => item.donateId}>
            </FlatList>
        }
    }

    componentDidMount() {
        service.getTransaction()
            .then(response => {
                this.setState({
                    historyList: response.data,
                    loaded: true,
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 0.9, padding: 16, justifyContent: 'center'}}>
                {this.mainScreen(this.state.loaded)}
                <TouchableOpacity style={styles.donationBtn}
                                  onPress={() => navigation.navigate('Donation')}>
                    <Text style={{color: '#fff'}}>Donate</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    donationBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 128,
        height: 40,
        borderRadius: 24,
        backgroundColor: '#2F80ED',
        bottom: -32,
        left: 16,
    }
})

export default HistoryList;
