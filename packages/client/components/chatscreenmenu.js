import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, IconButton, Menu, Divider, PaperProvider } from 'react-native-paper';

export function ChatScreenHeader() {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Best Chat App</Text>
            <TouchableOpacity onPress={openMenu} style={styles.menuContainer}>
                {/* <IconButton icon="plus-circle" style={styles.icons} /> */}
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<IconButton icon="plus-circle" style={styles.icons} />}
                >
                    <Menu.Item onPress={() => { }} title="New Chat" />
                    <Divider />
                    <Menu.Item onPress={() => { }} title="Add Contacts" />
                    <Divider />
                    <Menu.Item onPress={() => { }} title="Scan" />
                    <Divider />
                    <Menu.Item onPress={() => { }} title="Money" />
                </Menu>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 0
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    menuContainer: {
        //marginLeft: 'auto'
    },
    icons: {
        width: 20,
        height: 20,
        // marginLeft: 'auto'
    },
});