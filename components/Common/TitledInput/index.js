import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';


const TitledInput = ({ value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <TextInput
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        paddingTop: 15,
        paddingLeft: 20,
        paddingBottom: 15,
        color: '#007bff',
        fontSize: 18,
        fontWeight: '200',
        flex: 1,
        width: '100%',
        height: 60,
    },
    containerStyle: {
        height: 60,
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
    }
};

export { TitledInput };
