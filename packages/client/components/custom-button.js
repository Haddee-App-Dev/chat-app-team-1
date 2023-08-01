import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
export const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container,
            styles['container_' + type],
            bgColor ? { backgroundColor: bgColor } : {}
            ]}>
            <Text style={[
                styles.text,
                styles['text_' + type],
                fgColor ? { color: fgColor } : {} // fgColor is color of Text
            ]}>
                {text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        padding: 10,
        marginVertical: 8,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },
    text_TERTIARY: {
        color: 'darkgray',
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },
});