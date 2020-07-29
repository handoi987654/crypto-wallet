import React from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";

const Property = ({field, value, onChange}) => {

    return (
        <View style={styles.property}>
            <Text style={styles.keyText}>{field}:</Text>
            <TextInput style={styles.input} value={value}
                       onChange={onChange}/>
        </View>
    )
};

const styles = StyleSheet.create({
    property: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingBottom: 16,
    },
    keyText: {
        fontSize: 16,
    },
    input: {
        fontSize: 16,
        width: '50%',
        textAlign: 'right',
    },
});

export default Property;
