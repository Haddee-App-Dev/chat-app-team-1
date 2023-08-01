import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function ChatScreenHeader(props) {
    const { headerTitle, button } = props;
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{headerTitle}</Text>
            {
                button
            }
        </View >
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 0,
        padding: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    menuContainer: {
        //marginLeft: 'auto'
    },
});