import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry, autoCapitalize, autoCorrect }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
                autoCorrect={autoCorrect}
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
    input: {
        padding: 5,
        margin: 10,
        width: 200
    },
});
