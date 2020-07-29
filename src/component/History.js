import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const History = ({history}) => {

    const [expand, setExpanded] = useState(false);

    return (
        <View>
            <TouchableOpacity onPress={() => setExpanded(!expand)}>
                <View style={styles.itemView}>
                    <View style={styles.leftCol}>
                        <Text style={{fontSize: 20, color: '#2F80ED'}}>$ {history.transaction.value}</Text>
                        <Text>Sender: {history.fromName}</Text>
                    </View>
                    <Text style={{color: 'green'}}>{history.transaction.status}</Text>
                </View>
            </TouchableOpacity>
            <View style={{
                height: expand ? 120 : 0,
                padding: expand ? 16 : 0,
                marginTop: expand ? 8 : 0,
                ...styles.expandedTab,
            }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>Transaction Fee:</Text>
                    <Text>$ 4</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>Type:</Text>
                    <Text>Donate</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>Message:</Text>
                    <Text>{history.message}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>Date:</Text>
                    <Text>{history.transaction.timeStamp}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemView: {
        height: 88,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    leftCol: {
        flex: 1,
        justifyContent: 'space-evenly',
        height: '100%'
    },
    expandedTab: {
        marginBottom: 16,
        marginHorizontal: 16,
        borderRadius: 8,
        justifyContent: 'space-between'
    }
})

export default History;
