import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry, icon }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder} style={styles.input}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '80%',

        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 5,
        marginVertical: 8,
    },
    input: {},
});