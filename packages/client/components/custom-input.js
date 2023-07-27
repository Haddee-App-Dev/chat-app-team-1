import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

<<<<<<< HEAD:packages/client/components/custom-input.js
export const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry, icon }) => {
=======
const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry, autoCapitalize }) => {
>>>>>>> auth:packages/client/components/customInput.js
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
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
<<<<<<< HEAD:packages/client/components/custom-input.js
    input: {},
});
=======
    input: {
        padding: 5,
        margin: 10,
        width: 200
    },
});

export default CustomInput;
>>>>>>> auth:packages/client/components/customInput.js
