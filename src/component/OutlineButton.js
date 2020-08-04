import React from 'react';
import {Text, TouchableOpacity} from "react-native";

const OutlineButton = ({text='Button', onPress, color='#2F80ED', width = '100%', height = 40}) => (
    <TouchableOpacity onPress={onPress}
                      activeOpacity={0.6}
                      style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderWidth: 1,
                          borderColor: color,
                          width: width,
                          height: height,
                          borderRadius: 8,
                          shadowOffset: {width: 10, height: 10},
                          shadowColor: 'black',
                          shadowOpacity: 1,
                          elevation: 2,
                      }}>
        <Text style={{color: color}}>{text}</Text>
    </TouchableOpacity>
)

export default OutlineButton;
